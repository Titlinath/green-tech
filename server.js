// server.js

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Route for the login page
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/login.html'));
});

// Route for the signup page
app.get('/signup.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/signup.html'));
});

// Route for the profile page
app.get('/profile.html', (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(__dirname, 'public/profile.html'));
    } else {
        res.redirect('/login.html');
    }
});

// Route for the dashboard page
app.get('/dashboard.html', (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(__dirname, 'public/dashboard.html'));
    } else {
        res.redirect('/login.html');
    }
});

// Handle login requests
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Dummy authentication (replace with actual database logic)
    if (email === 'user@example.com' && password === 'password') {
        req.session.user = { email, name: 'User', address: 'Address', phone: '1234567890', password: 'password' };
        res.redirect('/dashboard.html');
    } else {
        res.send('Invalid email or password');
    }
});

// Handle signup requests
app.post('/signup', (req, res) => {
    const { email, password, name, address, phone } = req.body;

    // Save user details to the session (replace with actual database logic)
    req.session.user = { email, name, address, phone, password };
    res.redirect('/dashboard.html');
});

// Handle profile requests
app.post('/updateProfile', (req, res) => {
    if (req.session.user) {
        const { name, address, phone, password } = req.body;
        req.session.user = { ...req.session.user, name, address, phone, password };
        res.redirect('/profile.html');
    } else {
        res.redirect('/login.html');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

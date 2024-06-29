document.getElementById('submissionForm').addEventListener('submit', function(event) {
    alert('Your submission has been received. Thank you for contributing!');
});
document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('thankYouMessage').classList.remove('hidden');
    document.getElementById('donationForm').reset(); 
});

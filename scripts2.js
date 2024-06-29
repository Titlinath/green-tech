document.addEventListener('DOMContentLoaded', function() {
    const stories = document.querySelectorAll('.story');

    stories.forEach(story => {
        story.addEventListener('click', () => {
            alert(You clicked on the story: ${story.querySelector('h2').innerText});
        });
    });
});
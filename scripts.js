document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButton = document.querySelector('.cta-button');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#learn-more').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
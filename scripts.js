document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from reloading the page

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedbackMessage = document.getElementById('feedback-message').value;

    // Display a thank you message
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.display = 'block';

    // Hide the form (optional)
    document.getElementById('feedback-form').style.display = 'none';

    // Optionally, you could also send the feedback to a server using an AJAX request
    console.log('Feedback submitted:', { name, email, feedbackMessage });
});

// Smooth scrolling with custom behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default jump to section

        // Get the target section
        const targetId = this.getAttribute('href').substring(1); // Remove '#' from href
        const targetElement = document.getElementById(targetId);

        // Scroll smoothly to the target section using scrollIntoView
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Ensures the top of the section aligns with the top of the viewport
        });
    });
});

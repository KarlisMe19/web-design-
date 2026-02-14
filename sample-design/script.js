function toggleSection(element) {
    // Close all other sections
    const allSections = document.querySelectorAll('.section-box');
    allSections.forEach(section => {
        if (section !== element) {
            section.classList.remove('active');
        }
    });

    // Toggle the clicked section
    element.classList.toggle('active');
}

// Optional: Add smooth scroll effect
document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', function() {
        // Add your navigation logic here
        console.log('Navigating to:', this.textContent);
    });
});
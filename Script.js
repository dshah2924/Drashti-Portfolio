document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded!");

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            // Smooth scroll only if the link is for an anchor on the same page
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handling "View My Resume" button for opening PDF
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is for resume PDF
            if (this.getAttribute('href').endsWith('.pdf')) {
                window.open(this.getAttribute('href'), '_blank');
                e.preventDefault(); // Prevent smooth scrolling for PDF link
            }
        });
    });
});

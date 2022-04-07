const images = document.querySelectorAll('.animate-me');

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
        entry.target.classList.add('fancy');
        }
    });
}, { threshold: [0, 0.5, 1] });

images.forEach(image => {
observer.observe(image);
});
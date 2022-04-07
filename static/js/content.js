const images = document.querySelectorAll('.animate-me');

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
        entry.target.classList.add('fancy');
        } else {
        entry.target.classList.remove('fancy');
        }
    });
}, { threshold: [0] });

images.forEach(image => {
observer.observe(image);
});
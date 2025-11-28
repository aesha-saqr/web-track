const buttons = document.querySelectorAll('.select-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Thank you for choosing TaskFlow!');
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-section');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.animate').forEach(el => {
    el.classList.add('hidden-section');
    observer.observe(el);
});

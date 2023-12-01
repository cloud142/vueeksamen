document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        circle.addEventListener('click', function () {
            circles.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
});



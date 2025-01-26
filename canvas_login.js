// https://github.com/TheGlowEk //

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');

    let particles = [];
    const numParticles = 100;
    
    const particleColor = 'rgba(0, 0, 0, 0.5)';
    const particleSize = 2;
    
    function createParticle() {
        return {
            x: Math.random(),
            y: Math.random(),
            size: particleSize,
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25
        };
    }

    function initializeParticles() {
        particles = [];
        for (let i = 0; i < numParticles; i++) {
            particles.push(createParticle());
        }
    }

    function updateParticles() {
        particles.forEach(particle => {

            particle.x += particle.speedX / canvas.width;
            particle.y += particle.speedY / canvas.height;


            if (particle.x > 1) particle.x = 1;
            if (particle.x < 0) particle.x = 0;
            if (particle.y > 1) particle.y = 1;
            if (particle.y < 0) particle.y = 0;
        });
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = particleColor;
        particles.forEach(particle => {

            const x = particle.x * canvas.width;
            const y = particle.y * canvas.height;
            ctx.beginPath();
            ctx.arc(x, y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    
    function animate() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }

    resizeCanvas(); 
    initializeParticles(); 
    animate();
});

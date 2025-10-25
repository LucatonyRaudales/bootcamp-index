// Espera a que el DOM esté cargado para empezar
document.addEventListener('DOMContentLoaded', () => {

    // Obtener el canvas y su contexto 2D
    const canvas = document.getElementById('github-animation');
    if (!canvas) {
        console.error("No se encontró el elemento canvas.");
        return;
    }
    
    const ctx = canvas.getContext('2d');

    // Ajustar el tamaño del canvas a su contenedor
    // Es importante establecer el width/height del canvas directamente
    // para que la resolución del dibujo sea correcta.
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    let particles = [];
    const particleCount = 70; // Número de partículas

    // Definir la clase Particle (Partícula)
    class Particle {
        constructor(x, y, size, color, speed) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.color = color;
            this.speed = speed;
            // Dirección aleatoria
            this.angle = Math.random() * 2 * Math.PI;
            this.vx = Math.cos(this.angle) * this.speed;
            this.vy = Math.sin(this.angle) * this.speed;
        }

        // Método para dibujar la partícula
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        // Método para actualizar la posición
        update() {
            // Rebotar en los bordes
            if (this.x + this.size > canvas.width || this.x - this.size < 0) {
                this.vx = -this.vx;
            }
            if (this.y + this.size > canvas.height || this.y - this.size < 0) {
                this.vy = -this.vy;
            }

            // Mover la partícula
            this.x += this.vx;
            this.y += this.vy;
        }
    }

    // Función para inicializar las partículas
    function init() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            const size = Math.random() * 3 + 1; // Tamaño aleatorio
            const x = Math.random() * (canvas.width - size * 2) + size;
            const y = Math.random() * (canvas.height - size * 2) + size;
            const speed = Math.random() * 0.5 + 0.2; // Velocidad aleatoria
            const color = '#58a6ff'; // Color de acento
            
            particles.push(new Particle(x, y, size, color, speed));
        }
    }

    // Bucle de animación
    function animate() {
        // Limpiar el canvas en cada fotograma
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Actualizar y dibujar cada partícula
        for (let particle of particles) {
            particle.update();
            particle.draw();
        }

        // Conectar partículas cercanas con líneas (efecto "constelación")
        connectParticles();

        // Solicitar el siguiente fotograma
        requestAnimationFrame(animate);
    }

    // Función para conectar partículas cercanas
    function connectParticles() {
        let maxDistance = 100; // Distancia máxima para conectar
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) { // Empezar en a+1 para evitar duplicados
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    // La opacidad de la línea depende de la distancia
                    ctx.strokeStyle = `rgba(88, 166, 255, ${1 - distance / maxDistance})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }


    // Iniciar todo
    init();
    animate();

    // Re-inicializar si la ventana cambia de tamaño (para responsive)
    window.addEventListener('resize', () => {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        init();
    });
});
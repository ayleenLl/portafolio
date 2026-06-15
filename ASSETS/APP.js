document.addEventListener("DOMContentLoaded", function () {

    const botonArriba = document.getElementById("btn-arriba");

    // Mostrar u ocultar el botón
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            botonArriba.style.display = "block";
        } else {
            botonArriba.style.display = "none";
        }
    });

    // Scroll suave MANUAL con velocidad controlada
    botonArriba.addEventListener("click", function () {
        const duracion = 2000; // ← milisegundos, SUBE este número para más lento
        const inicio = window.scrollY;
        const tiempoInicio = performance.now();

        function animarScroll(tiempoActual) {
            const tiempoTranscurrido = tiempoActual - tiempoInicio;
            const progreso = Math.min(tiempoTranscurrido / duracion, 1);

            // Efecto ease-in-out (arranca suave, frena suave)
            const ease = progreso < 0.5
                ? 2 * progreso * progreso
                : -1 + (4 - 2 * progreso) * progreso;

            window.scrollTo(0, inicio * (1 - ease));

            if (progreso < 1) {
                requestAnimationFrame(animarScroll);
            }
        }

        requestAnimationFrame(animarScroll);
    });

});
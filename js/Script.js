console.log("El HTML vinculó correctamente el archivo JS y el navegador lo procesó bien");

// Manejo del formulario de contacto sin errores
const botonEnviar = document.querySelector('.btn-submit');
if (botonEnviar) {
    botonEnviar.addEventListener('click', (evento) => {
        evento.preventDefault();
        console.log("¡El usuario hizo clic en el botón para ENVIAR MENSAJE!");
    });
}

// EFECTO DE RASTRO MAGENTA
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 500);
});

// LÓGICA DE MODO OSCURO CON EL NUEVO SWITCH
const themeCheckbox = document.getElementById('theme-checkbox');

// 1. Revisar preferencias guardadas o del sistema
const currentTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (currentTheme === 'dark' || (!currentTheme && systemPrefersDark)) {
    document.body.classList.add('dark-mode');
    if (themeCheckbox) themeCheckbox.checked = true; // Activa el interruptor visualmente
} else {
    document.body.classList.remove('dark-mode');
    if (themeCheckbox) themeCheckbox.checked = false;
}

// 2. Escuchar cambios en el switch
if (themeCheckbox) {
    themeCheckbox.addEventListener('change', () => {
        if (themeCheckbox.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
}
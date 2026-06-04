console.log("El HTML vinculó correctamente el archivo JS y el navegador lo procesó bien");


emailjs.init({
    publicKey: "3pwflaQpqIJ7XmL-p",
});


// Manejo del formulario de contacto sin errores
const botonEnviar = document.querySelector('.btn-submit');
if (botonEnviar) {

    botonEnviar.addEventListener('click', (evento) => {
        evento.preventDefault();
        console.log("¡El usuario hizo clic en el botón para ENVIAR MENSAJE!");
        console.log(" este es el valor del id del name" + document.getElementById("nombre").value);
        console.log(" este es el valor del id del email" + document.getElementById("email").value);
        console.log(" este es el valor del id del mensaje" + document.getElementById("mensaje").value);

        emailjs.send(
            "service_jalghah",
            "template_vfqmaaj",

            {
                name: document.getElementById("nombre").value,
                email: document.getElementById("email").value,
                title: "Nuevo mensaje Portafolio",
                message: document.getElementById("mensaje").value
            }
        )
            .then(() => {

                const toastElement = document.getElementById('successToast');

                if (typeof bootstrap !== "undefined") {

                    const toast = new bootstrap.Toast(toastElement);
                    toast.show();

                } else {

                    alert("Correo enviado correctamente");
                    console.error("Bootstrap no está cargado");

                }

            })
            .catch((error) => {
                console.error("Error:", error);
            });
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
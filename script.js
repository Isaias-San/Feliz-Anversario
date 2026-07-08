window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('pantallaCarga').style.display = 'none';
        document.getElementById('pantallaLogin').style.display = 'flex';
    }, 1800); 
});

function verificarClave() {
    const input = document.getElementById('passwordInput').value.trim();
    const error = document.getElementById('errorMsg');
    
    // Contraseña: 08/10/2023
    if (input === "08/10/2023" || input === "08-10-2023" || input === "8/10/2023") {
        document.getElementById('pantallaLogin').style.display = 'none';
        document.getElementById('contenidoPrincipal').style.display = 'block';
        
        // Iniciar el contador dinámico en tiempo real
        setInterval(actualizarContador, 1000);
        actualizarContador(); // Ejecución inmediata inicial
        
        const audio = document.getElementById('musicaFondo');
        audio.play().catch(e => console.log("Audio esperando interacción del usuario."));
    } else {
        error.innerHTML = "❌ Esa no es nuestra fecha especial... ¡Inténtalo otra vez! ❤️";
    }
}

function actualizarContador() {
    // Fecha de aniversario establecida: 8 de Octubre de 2023
    const fechaInicio = new Date('2023-10-08T00:00:00');
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    // Cálculos matemáticos de conversión de tiempo
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Formatear los números para que siempre tengan dos dígitos (ej: "05")
    document.getElementById('contador-dias').innerText = dias.toString().padStart(2, '0');
    document.getElementById('contador-horas').innerText = horas.toString().padStart(2, '0');
    document.getElementById('contador-minutos').innerText = minutos.toString().padStart(2, '0');
    document.getElementById('contador-segundos').innerText = segundos.toString().padStart(2, '0');
}

function reaccionarBoton(mensaje) {
    const modal = document.getElementById('modalEmergente');
    document.getElementById('modalTexto').innerHTML = mensaje;
    modal.style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modalEmergente').style.display = 'none';
}


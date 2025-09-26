document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    // Credenciales Fijas (SOLO para DEMOSTRACIÓN)
    const USER_CORRECTO = 'admin';
    const PASS_CORRECTA = '12345';

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        
        message.textContent = ''; // Limpia el mensaje anterior

        if (username === USER_CORRECTO && password === PASS_CORRECTA) {
            // Éxito: Simula el redireccionamiento
            message.textContent = '¡Acceso Concedido! Redirigiendo...';
            message.style.color = 'green';
            
            // Redirecciona después de 1 segundo (simulación)
            setTimeout(() => {
                alert('Bienvenido al sistema!'); 
                // window.location.href = 'pagina_principal.html'; // Descomenta para redirigir
            }, 1000);

        } else if (username === '' || password === '') {
             message.textContent = 'Por favor, completa ambos campos.';
             message.style.color = 'red';
        } else {
            // Error: Credenciales incorrectas
            message.textContent = 'Usuario o contraseña incorrectos.';
            message.style.color = 'red';
        }
    });
});

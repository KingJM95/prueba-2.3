document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    // Credenciales Fijas (SOLO para DEMOSTRACIÓN)
    const EMAIL_CORRECTO = 'usuario@ejemplo.com'; // ¡Hemos cambiado esto!
    const PASS_CORRECTA = '12345';

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Ahora buscamos el valor del campo 'email'
        const email = document.getElementById('email').value.trim(); 
        const password = document.getElementById('password').value.trim();
        
        message.textContent = ''; 

        // Lógica de validación con el correo
        if (email === EMAIL_CORRECTO && password === PASS_CORRECTA) {
            // Éxito
            message.textContent = '¡Acceso Concedido! Redirigiendo...';
            message.style.color = 'green';
            
            setTimeout(() => {
                alert('Bienvenido al sistema con el correo: ' + email); 
                // window.location.href = 'pagina_principal.html'; 
            }, 1000);

        } else if (email === '' || password === '') {
             message.textContent = 'Por favor, completa el correo y la contraseña.';
             message.style.color = 'red';
        } else {
            // Error
            message.textContent = 'Correo electrónico o contraseña incorrectos.';
            message.style.color = 'red';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (El código de login se queda igual) ...
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');
    const forgotLink = document.getElementById('forgotPasswordLink'); // <--- NUEVO
    
    // Credenciales Fijas (Sigue siendo solo para demostración)
    const EMAIL_CORRECTO = 'usuario@ejemplo.com';
    const PASS_CORRECTA = '12345';
    // -------------------------------------------------------------------

    // --- Lógica para el Login (ya la tienes, no la cambies) ---
    form.addEventListener('submit', function(event) {
        // ... (Tu código de validación de acceso aquí) ...
    });
    // -------------------------------------------------------------------

    // --- Lógica para Recuperar Contraseña (NUEVA) ---
    forgotLink.addEventListener('click', function(event) {
        event.preventDefault(); // Detiene el comportamiento predeterminado del enlace

        // 1. Solicitar el correo al usuario
        const recoveryEmail = prompt("Ingresa el correo electrónico asociado a tu cuenta para recuperar tu contraseña:");

        message.textContent = ''; // Limpia el mensaje anterior
        
        if (recoveryEmail) {
            // 2. Simulación de envío
            if (recoveryEmail.trim() === EMAIL_CORRECTO) {
                // Simula que el servidor encuentra el correo
                message.textContent = `Si el correo '${recoveryEmail}' está en nuestro sistema, te enviaremos instrucciones de recuperación.`;
                message.style.color = '#28a745'; // Color verde de éxito

            } else {
                // Simula que el servidor no da pistas sobre la existencia del correo (buena práctica de seguridad)
                message.textContent = "Te enviaremos un correo con instrucciones si la dirección está registrada.";
                message.style.color = '#28a745';
            }

            // Opcional: limpiar el mensaje después de unos segundos
            setTimeout(() => {
                message.textContent = '';
            }, 8000);

        } else if (recoveryEmail === null) {
            // El usuario hizo clic en Cancelar
            message.textContent = "Recuperación de contraseña cancelada.";
            message.style.color = 'red';
            setTimeout(() => {
                message.textContent = '';
            }, 3000);
        }
    });
});

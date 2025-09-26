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

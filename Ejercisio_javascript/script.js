// Capturar el evento de envío del formulario
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío por defecto del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const edad = parseInt(document.getElementById('edad').value.trim());

    // Validar campos
    if (nombre === '' || apellidos === '') {
        alert('Por favor, rellena todos los campos.');
        return;
    }

    if (isNaN(edad) || edad <= 0) {
        alert('Por favor, introduce una edad válida (mayor a 0).');
        return;
    }

    // Mostrar los datos en la caja de información
    const infoBox = document.getElementById('infoBox');
    const infoText = `Nombre: ${nombre} <br> Apellidos: ${apellidos} <br> Edad: ${edad}`;
    document.getElementById('info').innerHTML = infoText;
    infoBox.style.display = 'block'; // Mostrar la caja de información
});

// Evento para cerrar la caja de información
document.getElementById('closeBtn').addEventListener('click', function() {
    // Ocultar la caja de información
    document.getElementById('infoBox').style.display = 'none';

    // Limpiar los campos del formulario
    document.getElementById('userForm').reset();

    // Poner el foco en el primer campo del formulario
    document.getElementById('nombre').focus();
});

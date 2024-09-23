
function setReminder(id) {
    const name = document.getElementById(`treatment-name-${id}`).value;
    const date = document.getElementById(`date-${id}`).value;
    const time = document.getElementById(`time-${id}`).value;

    if (name && date && time) {
        alert(`Recordatorio configurado para ${name} el ${date} a las ${time}.`);
    } else {
        alert("Por favor, completa todos los campos para configurar el recordatorio.");
    }
}

document.querySelectorAll('.accept-button').forEach((button, index) => {
    button.addEventListener('click', () => setReminder(index + 1));
});

document.querySelectorAll('.cancel-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Tratamiento cancelado');
    });
});

document.querySelector('.assist-icon').addEventListener('click', () => {
    alert('Asistente Virtual activado');
});

document.querySelector('.play-button').addEventListener('click', () => {
    alert('Iniciando juego...');
});

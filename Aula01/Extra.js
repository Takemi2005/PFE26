const horarios = [
    { hora: 14, minuto: 30, valido: true },
    { hora: 25, minuto: 0, valido: false },
    { hora: 9, minuto: 15, valido: true },
    { hora: 23, minuto: 59, valido: true },
    { hora: 24, minuto: 30, valido: false }
];

let contagemValidos = 0;

// Utilizando forEach 
horarios.forEach(horario => {
    if (horario.hora >= 0 && horario.hora < 24 && horario.minuto >= 0 && horario.minuto < 60) {
        contagemValidos++;
        alert(`Horário válido: ${horario.hora}:${String(horario.minuto).padStart(2, '0')}`);
    }
});

alert(`\nTotal de compromissos válidos: ${contagemValidos}`);

    
    const agendaHorarios = [8, 12, 25, 15, -2, 20];
let contagemValidos = 0;

agendaHorarios.forEach((horario) => {
    // Verificando se o horário está entre 0 e 23
    if (horario >= 0 && horario < 24) {
        alert(`Compromisso agendado para as ${horario}h`); // Corrigido para crases
        contagemValidos++; 
    } else {
        alert(`Atenção: O horário ${horario}h é inválido!`); // Já estava correto
    }
});

alert('--- Relatório Final ---');
alert(`Total de compromissos válidos: ${contagemValidos}`); // Corrigido para crases
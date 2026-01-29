 
    // Validar entrada
    
    let prioridade = prompt("Digite o nível de prioridade da tarefa (1-10):")
    let hora = prompt("Digite o horário da tarefa (0-23):")

    if (hora < 0 || hora > 23) {
        console.log("Horário Inválido");
       
    }
    
    if (prioridade < 1 || prioridade > 10) {
        console.log("Nível de Prioridade Inválida");
     
    }
    
    // Determinar turno
    let turno;
    if (hora >= 0 && hora <= 11) {
        turno = "Manhã";
    } else if (hora >= 12 && hora <= 17) {
        turno = "Tarde";
    } else {
        turno = "Noite";
    }
    
    // Verificar prioridade e turno
    if (prioridade > 8 && (turno === "Manhã" || turno === "Tarde")) {
        alert("TAREFA CRÍTICA/URGENTE");
    } else if (prioridade >= 7 && prioridade < 9 && (turno === "Manhã" || turno === "Tarde")) {
        alert("TAREFA IMPORTANTE");
    } else if (turno === "Noite") {
        alert("TAREFA NÃO IMPORTANTE");
    }



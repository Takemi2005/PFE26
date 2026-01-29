
    let dataEvento = prompt("Digite a data do seu compromisso (AAAA-MM-DD):");
    // Criar objeto de data para hoje
    const dataHoje = new Date();
    
    // Criar objeto de data para o evento
    const evento = new Date(dataEvento);
    
    // Calcular diferença em milissegundos
    const diferenca = evento - dataHoje;
    
    // Converter para dias
    const diasRestantes = Math.ceil(diferenca / (24 * 60 * 60 * 1000));
    
    // Exibir resultado
    alert(`Faltam ${diasRestantes} dias para o seu compromisso!`);







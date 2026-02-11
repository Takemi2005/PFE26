
let nome = prompt("Digite o nome do contato:");
    
    // Remove espaços no início e fim, e converte para maiúsculas.trim remove espaços toU deixa maiusculo
    const nomeLimpo = nome.trim().toUpperCase();
    
    // Bônus: contar quantas palavras o nome possui .splint quebra
    const quantidadePalavras = nomeLimpo.split(' ').length;
    
    alert(`Nome formatado: ${nomeLimpo}`);
    alert(`Quantidade de palavras: ${quantidadePalavras}`);
    
  



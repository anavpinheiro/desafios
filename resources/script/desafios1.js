let senha = "aaaa"
let password = prompt("Digite a senha: ");
let numeroTentativas = 3; 

while (numeroTentativas > 0){
    if(password.trim().toLowerCase() === senha.toLowerCase().trim()) {
        alert("Acesso liberado");
        break;
    }
    else{
        numeroTentativas = numeroTentativas - 1;
        let die = numeroTentativas > 0 ? "número de tentativas ".concat(numeroTentativas): "Acesso negado";

        if(die != "acesso negado" && numeroTentativas != 0){
            alert("Senha incoreta, ".concat(die));
            numeroTentativas = prompt("Digee sua senha");
        }
    else {
        alert(die)
        break;
    }
  }
}

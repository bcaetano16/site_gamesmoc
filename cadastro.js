const form = document.getElementById('form-cadastro');


function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

function validaLogin() {
    var Senha = document.getElementById('password').value;
    var NovaSenha = document.getElementById('password2').value;
    if (Senha == NovaSenha) {
        validaLogin = true;
    }
    else validaLogin = false;

}


form.addEventListener('submit', function (e) {
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-cliente');

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido == false) {
        
    }
    else
        if (validaLogin == true) {
        
            nomeBeneficiario.value = '';
        
        alert("Cadastro realizado com sucesso");
        
        }
            else if(validaLogin != true){(alert("As senhas são diferentes ou nome não está completo!"));}
        
        
})
console.log(form);
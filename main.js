const form = document.getElementById('form-login');


function validaLogin2() {
    const Login = document.getElementById('login-usuario').value;
    const Senha = document.getElementById('password-login').value;
    if (Login == Senha) {
        return true;
    }
    alert("Usuário logado com sucesso!");
    return false;
}

console.log(form);




const formularioLogin = document.getElementById('login-form');
const campoUsuario = document.getElementById('username');
const campoSenha = document.getElementById('password');
const mensagemErro = document.getElementById('error-message');
const telaLogin = document.getElementById('login-container');
const telaSucesso = document.getElementById('success-container');
const botaoSair = document.getElementById('logout-btn');

formularioLogin.addEventListener('submit', function(evento) {
    evento.preventDefault(); 
    
    const usuario = campoUsuario.value.trim();
    const senha = campoSenha.value.trim();

    if (usuario === "" || senha === "") {
        mensagemErro.textContent = "Preencha todos os campos.";
        return;
    }

    if (usuario !== "admin") {
        mensagemErro.textContent = "Usuário não existe.";
        return;
    }

    if (senha !== "123456") {
        mensagemErro.textContent = "Senha incorreta.";
        return;
    }

    mensagemErro.textContent = "";
    telaLogin.classList.add('hidden');
    telaSucesso.classList.remove('hidden');
});

botaoSair.addEventListener('click', function() {
    campoUsuario.value = "";
    campoSenha.value = "";
    telaSucesso.classList.add('hidden');
    telaLogin.classList.remove('hidden');
});
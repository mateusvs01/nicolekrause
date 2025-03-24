// Função para alternar o estado do envelope
function toggleEnvelope(element) {
    if (!element.classList.contains('opened')) {
        // Mostra o modal de autenticação
        document.getElementById('auth-modal').style.display = "flex";
    } else {
        // Fecha diretamente sem autenticação
        element.classList.remove('opened');
    }
}

// Função para autenticar o usuário e abrir o envelope
function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "nicole" && password === "2912") {
        // Se correto, abre o envelope e fecha o modal
        document.querySelector('.envelope').classList.add('opened');
        closeModal(); // Fecha o modal corretamente
    } else {
        // Exibe mensagem de erro se as credenciais forem incorretas
        alert("Usuário ou senha incorretos. Pensa mais um pouquinho hehe");
    }
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        modal.style.display = "none"; // Garante que o modal desapareça completamente
        // Limpa os campos de entrada após fechar o modal
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
    }
}

// Evento para inicializar após o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('auth-submit').addEventListener('click', authenticate); // Botão de autenticação
    document.getElementById('cancel-button').addEventListener('click', closeModal); // Botão de cancelar
});

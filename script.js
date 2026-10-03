const btnTema = document.getElementById('btn-tema');
btnTema.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        btnTema.textContent = "Tema Claro";
    } else {
        btnTema.textContent = "Mudar Tema";
    }
});
const formContato = document.getElementById('form-contato');
formContato.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos obrigatórios antes de enviar!");
    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formContato.reset(); // Limpa o formulário
    }
});
const button = document.getElementById('botaoAnimado');

button.addEventListener('click', () => {
    if (button.classList.contains('active')) {
        button.classList.remove('active');
        button.classList.add('disabled');
        button.textContent = 'Desativar';
        button.disabled = false;
    } else {
        button.classList.remove('disabled');
        button.classList.add('active');
        button.textContent = 'Ativar';
        button.disabled = false;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const envelopeContainer = document.getElementById('envelope-container');
    const envelopeIcon = document.querySelector('.envelope-icon');
    const initialScreen = document.getElementById('initial-screen');
    const letterModal = document.getElementById('letter-modal');
    const letterContent = document.getElementById('letter-content');

    // Evento de clique no envelope
    envelopeContainer.addEventListener('click', () => {
        // Inicia a animação de "abrir" o envelope
        envelopeIcon.classList.add('fade-out');

        // Após a animação, move a página para a carta
        setTimeout(() => {
            initialScreen.style.display = 'none';
            letterModal.classList.add('is-active');
        }, 500); // O tempo da animação
    });

    // Função para fechar a carta (caso queira adicionar um botão de fechar)
    // letterModal.addEventListener('click', (event) => {
    //     if (event.target === letterModal) {
    //         letterModal.classList.remove('is-active');
    //         setTimeout(() => {
    //             initialScreen.style.display = 'flex';
    //             envelopeIcon.classList.remove('fade-out');
    //         }, 1000);
    //     }
    // });
});
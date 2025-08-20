document.addEventListener('DOMContentLoaded', () => {
    const openCardBtn = document.querySelector('.open-card-btn');
    const closeCardBtn = document.querySelector('.close-card-btn');
    const cardModal = document.getElementById('cardModal');

    openCardBtn.addEventListener('click', () => {
        cardModal.style.display = 'flex';
    });

    closeCardBtn.addEventListener('click', () => {
        cardModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cardModal) {
            cardModal.style.display = 'none';
        }
    });
});
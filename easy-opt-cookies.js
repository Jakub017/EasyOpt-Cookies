const customizeBtn = document.querySelector('.easy-cookies-customize');
const easyOptModal = document.querySelector('.#asy-opt-cookies-modal');

customizeBtn.addEventListener('click', () => {
    easyOptModal.classList.add('easy-opt-modal--active');
});
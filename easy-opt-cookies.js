const customizeBtn = document.querySelector('.easy-cookies-customize');
const easyOptModal = document.querySelector('#easy-opt-cookies-modal');
const cookiesBanner = document.querySelector('#easy-opt-cookies');

customizeBtn.addEventListener('click', () => {
    easyOptModal.classList.add('easy-opt-modal-active');
    cookiesBanner.style.display = 'none';
});
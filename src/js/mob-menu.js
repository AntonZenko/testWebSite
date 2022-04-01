(() => {
  const refs = {
    openMobMenuBtn: document.querySelector('[data-mobMenu-open]'),
    closeMobMenuBtn: document.querySelector('[data-mobMenu-close]'),
    mobMenu: document.querySelector('[data-mobMenu]'),
  };

  refs.openMobMenuBtn.addEventListener('click', toggleModal);
  refs.closeMobMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mobMenu.classList.toggle('is-off');
  }
})();
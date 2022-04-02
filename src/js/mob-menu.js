(() => {
  const refs = {
    openMobBtn: document.querySelector('[data-mob-open]'),
    closeMobBtn: document.querySelector('[data-mob-close]'),
    mob: document.querySelector('[data-mob]'),
  };

  refs.openMobBtn.addEventListener('click', toggleModal);
  refs.closeMobBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mob.classList.toggle('is-off');
  }
})();
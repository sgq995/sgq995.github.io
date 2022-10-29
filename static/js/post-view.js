document.addEventListener('DOMContentLoaded', () => {
  const menuRoot = document.querySelector('.menu__root');

  const menuOpenButton = document.querySelector('.menu__open');
  menuOpenButton.addEventListener('click', () => {
    document.body.classList.add('overflow-hidden');
    menuRoot.classList.add('hidden');
    navRoot.classList.toggle('hidden');
  });

  const handleCloseNavbar = () => {
    document.body.classList.remove('overflow-hidden');
    navRoot.classList.add('hidden');
    menuRoot.classList.toggle('hidden');
  };

  const navRoot = document.querySelector('.nav__root');
  navRoot.addEventListener('click', (e) => {
    if (e.target !== navbar && !navbar.contains(e.target)) {
      return handleCloseNavbar(e);
    }
  });

  const navbar = document.querySelector('.navbar');

  const navbarCloseButton = document.querySelector('button.navbar__close');
  navbarCloseButton.addEventListener('click', handleCloseNavbar);
});

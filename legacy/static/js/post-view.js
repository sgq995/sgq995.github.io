document.addEventListener('DOMContentLoaded', () => {
  const menuRoot = document.querySelector('.menu__root');

  const handleNavRootShow = () => {
    navContainer.classList.remove('overflow-hidden');

    navRoot.removeEventListener('transitionend', handleNavRootShow);
  }

  const handleOpenNavbar = () => {
    document.body.classList.add('overflow-hidden');
    menuRoot.classList.add('menu__root--hidden');
    navRoot.classList.remove('hidden');
    navRoot.classList.add('nav__root--shown');
    navContainer.classList.add('overflow-hidden');


    navRoot.addEventListener('transitionend', handleNavRootShow);
  }

  const menuOpenButton = document.querySelector('.menu__open');
  menuOpenButton.addEventListener('click', handleOpenNavbar);

  const handleNavRootHide = () => {
    navRoot.classList.add('hidden');
    navContainer.classList.remove('overflow-hidden');

    navRoot.removeEventListener('transitionend', handleNavRootHide);
  };

  const handleCloseNavbar = () => {
    document.body.classList.remove('overflow-hidden');
    menuRoot.classList.toggle('menu__root--hidden');
    navRoot.classList.remove('nav__root--shown');
    navContainer.classList.add('overflow-hidden');

    navRoot.addEventListener('transitionend', handleNavRootHide);
  };

  const navRoot = document.querySelector('.nav__root');
  navRoot.addEventListener('click', (e) => {
    if (e.target !== navbar && !navbar.contains(e.target)) {
      return handleCloseNavbar(e);
    }
  });

  const navContainer = document.querySelector('.nav__container');

  const navbar = document.querySelector('.navbar');

  const navbarCloseButton = document.querySelector('button.navbar__close');
  navbarCloseButton.addEventListener('click', handleCloseNavbar);

  let lastScrollY = 0;
  let ticking = false;
  document.addEventListener('scroll', (e) => {
    const currentScrollY = window.scrollY;

    if (!ticking) {
      requestAnimationFrame(() => {
        const delta = lastScrollY - currentScrollY;

        if (currentScrollY > 16) {
          menuOpenButton.classList.add('menu__open--detached');
          if (delta > 0) {
            // Scrolling up
            menuRoot.classList.remove('menu__root--hidden');
          } else {
            // Scrolling down
            menuRoot.classList.add('menu__root--hidden');
          }
        } else {
          menuRoot.classList.remove('menu__root--hidden');
          menuOpenButton.classList.remove('menu__open--detached');
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });

      ticking = true;
    }
  });
});

import React from 'react';

import '../../assets/styles/components/navigation/Nav.scss';

import twitterIcon from '../../assets/twitter-icon.svg';
import githubIcon from '../../assets/github-icon.svg';
import Search from './Search';

class Nav extends React.Component {
  private navRef = React.createRef<HTMLElement>();
  private prevScrollpos: number = window.pageYOffset;

  handleScrolling = () => {
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      this.navRef.current?.classList.add('Nav--shown');
      this.navRef.current?.classList.remove('Nav--hidden');
    } else {
      this.navRef.current?.classList.remove('Nav--shown');
      this.navRef.current?.classList.add('Nav--hidden');
    }
    this.prevScrollpos = currentScrollPos;

    const scrollTop = document.scrollingElement?.scrollTop ?? 0;
    // const offsetHeight = this.navRef.current?.offsetHeight ?? 0;

    // if (scrollTop > (offsetHeight / 2)) {
    if (this.navRef.current?.classList.contains('Nav--shown')) {
      if (scrollTop > 0) {

        this.navRef.current?.classList.add('Nav--shadow');
      } else {
        this.navRef.current?.classList.remove('Nav--shadow');
      }
    } else {
      this.navRef.current?.classList.remove('Nav--shadow');
    }
  };

  componentDidMount() {
    document.addEventListener('scroll', this.handleScrolling, false);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScrolling, false);
  }

  render() {
    return (
      <nav className="Nav" ref={this.navRef}>
        <ul className="Nav__list">
          <li className="Nav__item">
            Portafolio
          </li>
        </ul>

        <Search />

        <ul className="Nav__list">
          <li className="Nav__item">
            <a href="https://twitter.com/segoqu95">
              <img className="Nav__icon" alt="Twitter" src={twitterIcon} />
            </a>
          </li>

          <li className="Nav__item">
            <a href="https://github.com/sgq995">
              <img className="Nav__icon" alt="GitHub" src={githubIcon} />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;

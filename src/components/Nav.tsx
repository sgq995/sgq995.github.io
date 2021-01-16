import { render } from '@testing-library/react';
import React from 'react';

import './Nav.css';

import twitterIcon from '../assets/twitter-icon.svg';
import githubIcon from '../assets/github-icon.svg';

class Nav extends React.Component {
  navRef = React.createRef<HTMLElement>();

  handleScrolling = () => {
    const scrollTop = document.scrollingElement?.scrollTop ?? 0;
    const offsetHeight = this.navRef.current?.offsetHeight ?? 0;

    if (scrollTop > (offsetHeight / 2)) {
      this.navRef.current?.classList.add('Nav--shadow');
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

        <form>
          <input />
        </form>

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

import { render } from '@testing-library/react';
import React from 'react';

import './Nav.css';

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
            Link
        </li>

          <li className="Nav__item">
            Searchbar
        </li>

          <li className="Nav__item">
            ???
        </li>
        </ul>

        <form>
          <input />
        </form>
      </nav>
    );
  }
}

export default Nav;

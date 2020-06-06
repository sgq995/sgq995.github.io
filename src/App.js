import React from 'react';

import Typography from './Typography';
import Link from './Link';
import NavBar from './NavBar';
import Icon from './Icon';
import Card from './Card';
import Carousel from './Carousel';
import Content from './Content';
import Archive from './Archive';
import Column from './Column';
import Post from './Post';
import Row from './Row';
import Space from './Space';
// import ThemeContext from './ThemeContext';

// import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    // <ThemeContext>
    <React.Fragment>
      <NavBar style={{backgroundColor: 'white'}}>
        <Link href="#">
          <Icon icon="menu" />
        </Link>
        <Link href="#">Hello</Link>
        <Link href="#">Search</Link>
        <Link href="#">Test</Link>
      </NavBar>
      <Carousel>
        <Card />
        <Space width="8px" />
        <Card />
        <Space width="8px" />
        <Card />
        <Space width="8px" />
        <Card />
        <Space width="8px" />
        <Card />
        <Space width="8px" />
        <Card />
      </Carousel>
      <Content>
        <Column>
          <Row>
            <Link href="#">Category</Link>
            <span style={{width: '8px'}}></span>
            <Link href="#">Tags</Link>
          </Row>
          <span style={{height: '24px'}}></span>

          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Column>
        {/* <Archive>
          <Typography>
            Category
          </Typography>
          <Typography>
            Tags
          </Typography>
          <Typography>
            History
          </Typography>
        </Archive> */}
      </Content>
    </React.Fragment>
    // </ThemeContext>
  );
}

export default App;

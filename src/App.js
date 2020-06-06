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
import Footer from './Footer';
import Search from './Search';
import ButtonIcon from './ButtonIcon';
import Select from './Select';
// import ThemeContext from './ThemeContext';

// import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    // <ThemeContext>
    <React.Fragment>
      <NavBar style={{backgroundColor: 'white'}}>
        <ButtonIcon icon="menu" />
        <Link href="#">The Code Blog</Link>
        <Search />
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
            <Select placeholder="Category">
              <option default>Category</option>
              <option>Welcome</option>
              <option>Javascript</option>
              <option>C++</option>
            </Select>
            <Select placeholder="Tag">

            </Select>
          </Row>
          {/* <span style={{height: '24px'}}></span> */}

          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Column>
        <Archive>
          <Typography>
            Category
          </Typography>
          <Typography>
            Tags
          </Typography>
          <Typography>
            History
          </Typography>
        </Archive>
      </Content>
      <Footer>
        <Row>
          &copy; The Code Blog
        </Row>
      </Footer>
    </React.Fragment>
    // </ThemeContext>
  );
}

export default App;

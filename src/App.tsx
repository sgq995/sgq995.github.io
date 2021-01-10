import React from 'react';

import Typography from './components/Typography';
import Link from './components/button/Link';
import NavBar from './components/NavBar';
import Card from './components/layout/Card';
import Carousel from './components/Carousel';
import Content from './components/Content';
import Archive from './components/Archive';
import Column from './components/layout/Column';
import Post from './components/Post';
import Row from './components/layout/Row';
import Space from './components/layout/Space';
import Footer from './components/Footer';
import Search from './components/Search';
import ButtonIcon from './components/button/ButtonIcon';
import Select from './components/Select';
// import ThemeContext from './ThemeContext';

// import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    // <ThemeContext>
    <React.Fragment>
      <NavBar style={{ backgroundColor: 'white' }}>
        <ButtonIcon icon="menu" />
        <Link href="//thecode.blog">
          <Typography special>
            The Code Blog
          </Typography>
        </Link>
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
            <span style={{ width: '8px' }}></span>
            <Link href="#">Tags</Link>
            <Select placeholder="Category">
              <option>Category</option>
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

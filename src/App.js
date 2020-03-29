import React from 'react';

import Article from './Article';
import Nav from './Nav';
import Content from './Content';

import {DARK_THEME, LIGHT_THEME, DEFAULT_THEME} from './themes';

function App() {
  const [theme, setTheme] = React.useState(DEFAULT_THEME);

  document.body.className = theme;

  return (
    <React.Fragment>
      <Nav theme={theme} setTheme={setTheme} />

      <Content>
        {/* <Article></Article> */}
        <article>
          <header>
            <h1>Lorem ipsum</h1>
            <h3>dolor sit amet</h3>
          </header>
          <section>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu odio ut ligula mattis consequat. Nullam congue purus quam, quis dictum odio volutpat et. Maecenas feugiat augue sit amet justo eleifend varius. Curabitur ex justo, laoreet vel tellus non, volutpat lobortis ipsum. Fusce molestie non dolor id egestas. Phasellus sagittis sem dui, eget rutrum lorem dapibus tempor. Sed non tortor et lectus venenatis iaculis ut at purus.

            Mauris vel nunc eu leo congue aliquet quis ut massa. Phasellus accumsan ante id dolor porttitor, non ultrices purus suscipit. Maecenas venenatis neque a luctus varius. Nulla ut lacinia odio, nec maximus libero. Nullam sagittis sem vel eros vulputate rhoncus. Suspendisse id nisi euismod, tincidunt nibh id, ullamcorper sapien. Nam non molestie diam. Vivamus laoreet dui mi, vel accumsan ante sagittis at.
            
            Pellentesque in porttitor felis. Duis ac risus velit. Vivamus vitae turpis vel diam interdum suscipit. Vivamus vitae velit aliquet, cursus ipsum at, accumsan nisl. Vivamus aliquet neque a tellus accumsan auctor. Aenean tincidunt accumsan felis, non scelerisque felis bibendum et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ac finibus turpis. Ut consequat est ut facilisis vestibulum. Suspendisse aliquet est sit amet ipsum gravida, eu gravida libero euismod. Vivamus in leo quam. Nullam nec enim vitae enim viverra imperdiet ut vulputate est. Morbi a nibh aliquam sem imperdiet scelerisque et sit amet purus. Ut tortor ex, bibendum sed volutpat eget, porttitor ut urna. Maecenas ut cursus urna, sed vulputate velit.
            
            Nunc consectetur ipsum eu leo pretium, in sodales quam auctor. Vivamus ultricies condimentum magna, at volutpat nisi sollicitudin eget. Sed auctor gravida bibendum. Vestibulum felis velit, laoreet vel venenatis condimentum, viverra quis odio. Sed sem est, semper eget suscipit non, hendrerit nec lorem. Nulla porttitor faucibus lectus, in congue erat elementum nec. Pellentesque tincidunt, dolor ac volutpat molestie, erat justo euismod ex, vel commodo ipsum mauris ut diam. Aliquam condimentum quam sem, non consequat mi hendrerit ac. Duis rutrum maximus cursus. Quisque semper placerat blandit. Mauris maximus, tellus non maximus efficitur, augue justo viverra elit, eget faucibus sapien dui a nunc.
            
            Donec pellentesque sagittis nisl quis pretium. Etiam nec fermentum magna. Maecenas iaculis ornare justo ut finibus. Proin tempus arcu sed felis venenatis egestas. Pellentesque bibendum maximus sem in mollis. Nunc fermentum tortor at dui viverra faucibus. Cras a sagittis eros. Morbi lobortis, ex a vehicula sodales, nibh erat auctor nisi, bibendum ullamcorper dolor augue non nulla.  
            </p>
          </section>
          <footer>
            <p>Posted on 23/04/2020</p>
          </footer>
        </article>

        <Article
          title="Lorem ipsum"
          // subtitle="dolor sit amet"
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu odio ut ligula mattis consequat. Nullam congue purus quam, quis dictum odio volutpat et. Maecenas feugiat augue sit amet justo eleifend varius. Curabitur ex justo, laoreet vel tellus non, volutpat lobortis ipsum. Fusce molestie non dolor id egestas. Phasellus sagittis sem dui, eget rutrum lorem dapibus tempor. Sed non tortor et lectus venenatis iaculis ut at purus.

          Mauris vel nunc eu leo congue aliquet quis ut massa. Phasellus accumsan ante id dolor porttitor, non ultrices purus suscipit. Maecenas venenatis neque a luctus varius. Nulla ut lacinia odio, nec maximus libero. Nullam sagittis sem vel eros vulputate rhoncus. Suspendisse id nisi euismod, tincidunt nibh id, ullamcorper sapien. Nam non molestie diam. Vivamus laoreet dui mi, vel accumsan ante sagittis at.
          
          Pellentesque in porttitor felis. Duis ac risus velit. Vivamus vitae turpis vel diam interdum suscipit. Vivamus vitae velit aliquet, cursus ipsum at, accumsan nisl. Vivamus aliquet neque a tellus accumsan auctor. Aenean tincidunt accumsan felis, non scelerisque felis bibendum et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ac finibus turpis. Ut consequat est ut facilisis vestibulum. Suspendisse aliquet est sit amet ipsum gravida, eu gravida libero euismod. Vivamus in leo quam. Nullam nec enim vitae enim viverra imperdiet ut vulputate est. Morbi a nibh aliquam sem imperdiet scelerisque et sit amet purus. Ut tortor ex, bibendum sed volutpat eget, porttitor ut urna. Maecenas ut cursus urna, sed vulputate velit.
          
          Nunc consectetur ipsum eu leo pretium, in sodales quam auctor. Vivamus ultricies condimentum magna, at volutpat nisi sollicitudin eget. Sed auctor gravida bibendum. Vestibulum felis velit, laoreet vel venenatis condimentum, viverra quis odio. Sed sem est, semper eget suscipit non, hendrerit nec lorem. Nulla porttitor faucibus lectus, in congue erat elementum nec. Pellentesque tincidunt, dolor ac volutpat molestie, erat justo euismod ex, vel commodo ipsum mauris ut diam. Aliquam condimentum quam sem, non consequat mi hendrerit ac. Duis rutrum maximus cursus. Quisque semper placerat blandit. Mauris maximus, tellus non maximus efficitur, augue justo viverra elit, eget faucibus sapien dui a nunc.
          
          Donec pellentesque sagittis nisl quis pretium. Etiam nec fermentum magna. Maecenas iaculis ornare justo ut finibus. Proin tempus arcu sed felis venenatis egestas. Pellentesque bibendum maximus sem in mollis. Nunc fermentum tortor at dui viverra faucibus. Cras a sagittis eros. Morbi lobortis, ex a vehicula sodales, nibh erat auctor nisi, bibendum ullamcorper dolor augue non nulla.`}
          date="23/04/2020"/>
      </Content>
      
      <footer>

      </footer>
    </React.Fragment>
  );
}

export default App;

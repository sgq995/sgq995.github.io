import React from 'react';
import Typography from './Typography';
import Link from './button/Link';

import './Post.css'
import Icon from './Icon';
import Row from './layout/Row';

function Post(props: React.ComponentProps<React.FC>) {
  const { children } = props;

  return (
    <article className="post">
      <hgroup>
        <h2>Lorem ipsum</h2>
        <h3>Dolor sit amet</h3>
      </hgroup>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis lorem, pulvinar ac neque in, tincidunt feugiat libero. Sed laoreet at mi at convallis. Cras in tincidunt tortor, nec volutpat est. Sed pretium sodales nisl, ac hendrerit libero luctus sit amet. Nam rutrum tempus justo, ac semper sapien. Suspendisse imperdiet enim nulla, nec euismod ipsum scelerisque a. Aliquam fermentum accumsan eros. Cras nibh massa, faucibus sed orci ac, faucibus faucibus tortor. Vivamus placerat blandit luctus. Maecenas sit amet arcu gravida, volutpat justo nec, ultricies velit. Aliquam erat volutpat. Integer felis nunc, luctus id pretium nec, lobortis id tortor. Phasellus pretium non libero et dictum.</p>

      <footer className="post-footer">
        <Row>
          <Icon icon="notifications" />
          <Icon icon="notifications" />
        </Row>
        <Typography className="typography-caption">
          <Link href="#">tags (1)</Link>
        </Typography>
      </footer>
    </article>
  );
}

export default Post;

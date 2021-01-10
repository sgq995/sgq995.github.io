import React from 'react';
import Typography from './Typography';
import Link from './button/Link';

import './Post.css'
import Icon from './Icon';
import Row from './layout/Row';

function Post(props: React.ComponentProps<React.FC>) {
  const { children } = props;

  return (
    <article className="Post">
      <hgroup className="Post__header">
        <h2 className="Post__headline1">Lorem ipsum</h2>
        <h3 className="Post__headline2">Dolor sit amet</h3>

        <Typography className="typography-caption">
          <Link href="#">tags (1)</Link>
        </Typography>
      </hgroup>

      <p className="Post__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis lorem, pulvinar ac neque in, tincidunt feugiat libero. Sed laoreet at mi at convallis. Cras in tincidunt tortor, nec volutpat est. Sed pretium sodales nisl, ac hendrerit libero luctus sit amet. Nam rutrum tempus justo, ac semper sapien. Suspendisse imperdiet enim nulla, nec euismod ipsum scelerisque a. Aliquam fermentum accumsan eros. Cras nibh massa, faucibus sed orci ac, faucibus faucibus tortor. Vivamus placerat blandit luctus. Maecenas sit amet arcu gravida, volutpat justo nec, ultricies velit. Aliquam erat volutpat. Integer felis nunc, luctus id pretium nec, lobortis id tortor. Phasellus pretium non libero et dictum.</p>

      <p className="Post__body">In hac habitasse platea dictumst. In mollis risus ex, vitae imperdiet nibh posuere at. Mauris porta nisl leo, semper sodales augue ullamcorper non. Donec congue, ligula sed fringilla molestie, enim quam sagittis leo, ut vestibulum justo quam et purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lacus lectus. Sed ac eleifend purus. Duis dapibus eros finibus, tempor augue vel, pellentesque erat. Aliquam sed elit ut tortor lobortis molestie. Morbi at magna ex.</p>

      <p className="Post__body">Suspendisse commodo urna ante, quis pretium diam congue sit amet. Vestibulum vehicula tempus molestie. Donec commodo diam quis sem condimentum, vitae volutpat ante tincidunt. Donec interdum elit vel orci rhoncus viverra. Donec quis nibh eget enim euismod luctus. Donec at tortor ipsum. In dignissim ex sed consequat pretium. Aenean vitae nulla urna. Etiam aliquam varius ante a egestas. Proin dictum et urna ut malesuada. Nam tristique nunc at quam tempor pulvinar. Suspendisse rhoncus non justo vel volutpat. Quisque at ultrices lacus, eget posuere purus. Donec ultrices diam justo, sed cursus dolor vestibulum eu.</p>

      <footer className="Post__footer">
        {/* <Row>
          <Icon icon="notifications" />
          <Icon icon="notifications" />
        </Row> */}
      </footer>
    </article>
  );
}

export default Post;

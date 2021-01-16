import React from 'react';
import Nav from '../components/navigation/Nav';
import Post from '../components/blog/Post';
import Separator from '../components/blog/Separator';

import '../assets/styles/pages/Blog.scss';

function Blog() {
  const posts: React.ComponentProps<typeof Post>[] = [{
    title: 'Lorem ipsum',
    subtitle: 'Dolor sit amet',
    date: new Date,
    tags: [{
      name: 'lorem ipsum',
      link: '#',
      count: 1
    }],
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis lorem, pulvinar ac neque in, tincidunt feugiat libero. Sed laoreet at mi at convallis. Cras in tincidunt tortor, nec volutpat est. Sed pretium sodales nisl, ac hendrerit libero luctus sit amet. Nam rutrum tempus justo, ac semper sapien.',

      'Suspendisse imperdiet enim nulla, nec euismod ipsum scelerisque a. Aliquam fermentum accumsan eros. Cras nibh massa, faucibus sed orci ac, faucibus faucibus tortor. Vivamus placerat blandit luctus.',

      'Maecenas sit amet arcu gravida, volutpat justo nec, ultricies velit. Aliquam erat volutpat. Integer felis nunc, luctus id pretium nec, lobortis id tortor. Phasellus pretium non libero et dictum.',

      'In hac habitasse platea dictumst. In mollis risus ex, vitae imperdiet nibh posuere at. Mauris porta nisl leo, semper sodales augue ullamcorper non. Donec congue, ligula sed fringilla molestie, enim quam sagittis leo, ut vestibulum justo quam et purus.',

      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lacus lectus. Sed ac eleifend purus. Duis dapibus eros finibus, tempor augue vel, pellentesque erat. Aliquam sed elit ut tortor lobortis molestie. Morbi at magna ex.',

      'Suspendisse commodo urna ante, quis pretium diam congue sit amet. Vestibulum vehicula tempus molestie. Donec commodo diam quis sem condimentum, vitae volutpat ante tincidunt. Donec interdum elit vel orci rhoncus viverra.',

      'Donec quis nibh eget enim euismod luctus. Donec at tortor ipsum. In dignissim ex sed consequat pretium. Aenean vitae nulla urna. Etiam aliquam varius ante a egestas. Proin dictum et urna ut malesuada. Nam tristique nunc at quam tempor pulvinar.',

      'Suspendisse rhoncus non justo vel volutpat. Quisque at ultrices lacus, eget posuere purus. Donec ultrices diam justo, sed cursus dolor vestibulum eu.',
    ]
  }];

  return (
    <div className="Blog">
      <div className="Blog__wrapper">
        <Nav />

        <section className="Blog__content">
          {posts.map(post => (
            <Post
              {...post}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Blog;

import React from 'react';

import './Card.css';
import Typography from './Typography';
import Column from './Column';
import Row from './Row';
import Link from './Link';
import Space from './Space';
import ButtonLink from './ButtonLink';

function Card(props: React.ComponentProps<React.FC>) {
  const { children } = props;
  
  return (
    <Column component="article" className="card">
      <Column component="header" className="card-header">
        <Typography component="h2" className="card-title typography-headline6">Very large title asdfasdf</Typography>
        {/* <Typography>Subtitle</Typography> */}
      </Column>
      <Typography component="p" className="card-content typography-body2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit ultricies odio, et varius metus volutpat non. Fusce commodo hendrerit.
      </Typography>
      <Column component="footer" className="card-footer">
        <div className="card-bottom-bar">
          <Typography className="typography-body2">Date</Typography>
          <Space width="16px" />
          <ButtonLink href="#">Read</ButtonLink>
        </div>
      </Column>
    </Column>
  );
}

export default Card;

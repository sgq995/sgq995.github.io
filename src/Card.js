import React from 'react';

import './Card.css';
import Typography from './Typography';
import Column from './Column';
import Row from './Row';
import Link from './Link';
import Space from './Space';
import LinkButton from './LinkButton';

function Card(props) {
  const { children } = props;
  
  return (
    <Column component="article" className="card">
      <Column component="header" className="card-header">
        <Typography>Title</Typography>
        <Typography>Subtitle</Typography>
      </Column>
      <Typography>
        Summary
      </Typography>
      <Column component="footer" className="card-footer">
        <div className="card-bottom-bar">
          <Typography>Date</Typography>
          <Space width="16px" />
          <LinkButton href="#">Read</LinkButton>
        </div>
      </Column>
    </Column>
  );
}

export default Card;

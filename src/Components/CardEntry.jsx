import React, { useState } from 'react';
import { CardStyle } from '../styles/cardStyles';

export default function CardEntry() {
  const [cardName, setCardName] = useState('Galick Gun');
  const [description, setDescription] = useState('Does 23 dmg to opponent unless goku');
  const [image, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00veDW-SlpBDqu7izpkCncMtChzPsamUqwA&usqp=CAU');
  return (
    <CardStyle>
      <div className="individual-card">
        <h1>{cardName}</h1>
        <img src={image} alt="cardimage" />
        <h3>{description}</h3>
      </div>
    </CardStyle>
  );
}

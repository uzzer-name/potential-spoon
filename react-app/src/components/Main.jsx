import React from 'react';
import Card from './card/card';

const Main = ({ cards }) => {
  return (
    <div className="main">
      {cards.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          description={card.description} 
          image={card.image} 
        />
      ))}
    </div>
  );
};

export default Main;
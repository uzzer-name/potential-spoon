import React from 'react';
import Main from './components/Main';

const App = () => {
  const cardData = [
    {
      title: 'Гірська дорога',
      description: 'Маленька дорога',
      image: 'https://picsum.photos/id/1018/200/300', 
    },
    {
      title: 'Велика ріка',
      description: 'Так вона справді велика',
      image: 'https://picsum.photos/id/1015/200/300', 
    },
    {
      title: 'Червоні гори',
      description: 'Колір гір схожий на колір рудого лісу',
      image: 'https://picsum.photos/id/1016/200/300', 
    },
  ];

  return (
    <div className="App">
      <Main cards={cardData} />
    </div>
  );
};

export default App;
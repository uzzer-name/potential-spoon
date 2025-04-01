import React from 'react';
import Main from './components/Main';

const App = () => {
  const cardData = [
    {
      title: 'Гірська дорога',
      description: 'Маленька дорога',
      image: 'https://picsum.photos/id/1018/800/900', 
    },
    {
      title: 'Велика ріка',
      description: 'Так вона справді велика',
      image: 'https://picsum.photos/id/1015/800/900', 
    },
    {
      title: 'Червоні гори',
      description: 'Колір гір схожий на колір рудого лісу',
      image: 'https://picsum.photos/id/1016/800/900', 
    },
  ];

  return (
    <div className="App">
      <Main cards={cardData} />
    </div>
  );
};

export default App;
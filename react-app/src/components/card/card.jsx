import React from 'react';

const Card = ({ title, description, image }) => {
  const handleClick = () => {
    alert(title);
  };

  return (
    <div className="w-80 h-96 rounded overflow-hidden shadow-lg m-4 bg-white">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Дізнатися більше
        </button>
      </div>
    </div>
  );
};

export default Card;
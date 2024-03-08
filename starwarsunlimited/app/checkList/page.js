// pages/index.js or another component file
'use client'
import React, { useState, useEffect } from 'react';
import CardComponent from '@/components/CardComponent';
import useLegendaryCards from '@/hooks/useLegendaryCards'; // Adjust the import path as needed
const loadingVideo = 'https://pub-12db928ebc1e4253a6581b0df4d65c61.r2.dev/dart_vader_-_73654%20(540p).mp4';

function CardsList() {
  const { cards, isLoading, isError } = useLegendaryCards();

  // Function to get data from localStorage or return a default value
  const getInitialValue = (key, defaultValue) => {
    if (typeof window !== "undefined") { // Check if window is defined (i.e., if we're running in the browser)
      const savedValue = localStorage.getItem(key);
      if (savedValue) return JSON.parse(savedValue);
    }
    return defaultValue;
  };

  const [counts, setCounts] = useState(() => getInitialValue('counts', {}));
  const [checkedState, setCheckedState] = useState(() => getInitialValue('checkedState', {}));

  useEffect(() => {
    localStorage.setItem('counts', JSON.stringify(counts));
    localStorage.setItem('checkedState', JSON.stringify(checkedState));
  }, [counts, checkedState]);

  const handleIncrement = cardNumber => {
    setCounts(prev => ({ ...prev, [cardNumber]: (prev[cardNumber] || 0) + 1 }));
  };

  const handleDecrement = cardNumber => {
    setCounts(prev => ({ ...prev, [cardNumber]: Math.max((prev[cardNumber] || 0) - 1, 0) }));
  };

  const toggleChecked = cardNumber => {
    setCheckedState(prev => ({ ...prev, [cardNumber]: !prev[cardNumber] }));
  };

  const handleReset = () => {
    setCounts({});
    setCheckedState({});
  };

  if (isLoading) return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full z-50 bg-black flex justify-center items-center overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={loadingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>);
  if (isError) return <div>Error fetching cards.</div>;

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-center text-2xl font-bold font-star-wars text-shadow animated fadeInDown shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] b-4 p-4">
        Legendarys
      </h1>

      {cards.slice(0, 10).map(card => (
        <CardComponent
          key={card.Number}
          card={card}
          onIncrement={() => handleIncrement(card.Number)}
          onDecrement={() => handleDecrement(card.Number)}
          count={counts[card.Number] || 0}
          onCheck={() => toggleChecked(card.Number)}
          isChecked={!!checkedState[card.Number]}
        />
      ))}
      <button onClick={handleReset} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Reset</button>
    </div>
  );
}

export default CardsList;

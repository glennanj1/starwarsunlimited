// components/CardsChecklist.js
'use client'
import React, { useState, useEffect } from 'react';
import useLegendaryCards from '../hooks/useLegendaryCards';

function CardsChecklist() {
  const { cards, isLoading, isError } = useLegendaryCards();
  const [selectedCards, setSelectedCards] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // Load selected cards from localStorage
  useEffect(() => {
    const storedSelections = JSON.parse(localStorage.getItem('selectedCards') || '{}');
    setSelectedCards(storedSelections);
  }, []);

  // Save selected cards to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('selectedCards', JSON.stringify(selectedCards));
  }, [selectedCards]);

  const toggleCard = cardId => {
    const newState = { ...selectedCards, [cardId]: !selectedCards[cardId] };
    setSelectedCards(newState);
  };

  const filteredCards = searchTerm
    ? cards.filter(card => card.Name.toLowerCase().includes(searchTerm.toLowerCase()))
    : cards;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading cards</div>;

  return (
    <>
      <input
        type="text"
        placeholder="Search Legendary Cards"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredCards.map(card => (
          <li key={card.Number} onClick={() => toggleCard(card.Number)}>
            {card.Name} {selectedCards[card.Number] ? '+' : '-'}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CardsChecklist;

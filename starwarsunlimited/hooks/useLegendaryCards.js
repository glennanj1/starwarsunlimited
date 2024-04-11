// hooks/useLegendaryCards.js
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

export default function useLegendaryCards() {
    const { data, error } = useSWR('/api/cards/sor', fetcher);

    console.log(data);

  // Filter for legendary cards by rarity type "L"
  const legendaryCards = data?.data?.filter(card => card.Rarity === 'Legendary') || [];
  return {
    cards: legendaryCards,
    isLoading: !error && !data,
    isError: error
  };
}

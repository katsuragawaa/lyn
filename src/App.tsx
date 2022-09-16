import { useState } from 'react';
import { Calendar } from './components/Calendar';
import { GiftSuggestionCard } from './components/GiftSuggestionCard';
import { GoogleLogin } from './components/GoogleLogin';
import { SuggestionButton } from './components/SuggestionButton';

import { GIFT_SUGGESTIONS, GiftSuggestion } from './services/giftSuggestions';

const getRandomGift = () => GIFT_SUGGESTIONS[Math.floor(Math.random() * GIFT_SUGGESTIONS.length)];

export const App = () => {
  const [gift, setGift] = useState<GiftSuggestion | undefined>();
  const [shuffling, setShuffling] = useState(false);

  const getNewSuggestion = () => {
    setShuffling(true);
    setTimeout(() => {
      setGift(getRandomGift());
      setShuffling(false);
    }, 2000);
  };

  return (
    <div className="App">
      <div className="container mx-auto my-16 flex min-h-screen flex-col items-center md:my-32">
        <div className="w-5/6 md:w-[540px]">
          <h1 className="my-8 text-center text-4xl font-black leading-normal md:text-6xl">
            Aniversário da <span className="text-purple-600">Lyn</span>
          </h1>

          <GoogleLogin />
          <Calendar />

          <SuggestionButton hasSuggestion={gift !== undefined} getNewSuggestion={getNewSuggestion} />

          <GiftSuggestionCard shuffling={shuffling} gift={gift} />
        </div>
      </div>
    </div>
  );
};

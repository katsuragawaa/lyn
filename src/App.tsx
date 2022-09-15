import { useState } from 'react';
import ReactLoading from 'react-loading';
import { Calendar } from './components/Calendar';
import { GoogleLogin } from './components/GoogleLogin';

import { Item, GIFT_SUGGESTIONS, GiftSuggestion } from './services/giftSuggestions';

const GiftSuggestions = ({ items }: { items: Item[] }) => (
  <>
    <div className="my-2 font-bold">Algumas sugestões:</div>
    {items.map((i) => (
      <div className="my-1 text-purple-700" key={i.id}>
        <span className="mr-4 font-bold">•</span>
        <a className="underline" href={i.link} target="_blank">
          {i.name}
        </a>
      </div>
    ))}
  </>
);

const TattooSuggestion = () => (
  <>
    <div className="mx-auto mt-4 flex h-48 w-48 items-center justify-center bg-white">Pix</div>
  </>
);

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
      <div className="container mx-auto my-32 flex min-h-screen flex-col items-center">
        <div>
          <h1 className="my-8 text-6xl font-black leading-normal">
            Aniversário da <span className="text-purple-600">Lyn</span>
          </h1>

          <GoogleLogin />
          <Calendar />

          <div className="mb-12 mt-24 flex justify-center">
            <div className="w-fit cursor-pointer bg-neutral-700 py-2 px-4 text-white" onClick={getNewSuggestion}>
              {gift ? 'Me da outra ideia' : 'Gerar sugestão'}
            </div>
          </div>

          {shuffling ? (
            <div className="flex h-48 items-center justify-center">
              <ReactLoading type="spinningBubbles" color="#404040" height={64} width={64} />
            </div>
          ) : (
            gift && (
              <div className="flex flex-col border-2 border-neutral-700 bg-gradient-to-br from-purple-100 to-purple-300 p-8">
                <div className="mb-4 w-fit border-2 border-neutral-700 bg-yellow-200 py-1 px-2 text-sm font-bold">
                  {typeof gift.priceRange === 'string'
                    ? gift.priceRange
                    : `${gift.priceRange.min} até ${gift.priceRange.max} pila`}
                </div>

                <div className="my-4 text-4xl font-bold">{gift.category}</div>

                <div className="my-4">
                  <div className="text-sm">O que a Lyn disse:</div>
                  <div className="flex py-2">
                    <div className="mr-4 w-1 bg-neutral-700" />
                    <div className="py-1">"{gift.description}"</div>
                  </div>
                </div>

                {gift.items !== undefined ? <GiftSuggestions items={gift.items} /> : <TattooSuggestion />}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

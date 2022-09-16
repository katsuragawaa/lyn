import ReactLoading from 'react-loading';
import { GiftSuggestion } from '../services/giftSuggestions';
import { GiftSuggestions } from './GiftSuggestion';
import { TattooSuggestion } from './TattooSuggestion';

type GiftSuggestionCardProps = {
  shuffling: boolean;
  gift?: GiftSuggestion;
};

export const GiftSuggestionCard = ({ shuffling, gift }: GiftSuggestionCardProps) =>
  shuffling ? (
    <div className="flex h-48 items-center justify-center">
      <ReactLoading type="spinningBubbles" color="#404040" height={64} width={64} />
    </div>
  ) : gift ? (
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
  ) : (
    <></>
  );

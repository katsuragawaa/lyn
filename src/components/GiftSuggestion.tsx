import { Item } from '../services/giftSuggestions';

export const GiftSuggestions = ({ items }: { items: Item[] }) => (
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

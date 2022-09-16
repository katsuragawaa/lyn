import pix from '../assets/pix.jpg';

export const TattooSuggestion = () => (
  <div className="flex w-48 flex-col self-center">
    <img className="mx-auto mt-4 flex h-48 items-center justify-center bg-white" src={pix} />
    <div className="mt-4 text-center font-bold">Apoie essa causa</div>
  </div>
);

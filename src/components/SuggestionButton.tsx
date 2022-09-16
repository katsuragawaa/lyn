type SuggestionButtonProps = {
  hasSuggestion: boolean;
  getNewSuggestion: () => void;
};

export const SuggestionButton = ({ hasSuggestion, getNewSuggestion }: SuggestionButtonProps) => (
  <div className="mb-12 mt-24 flex justify-center">
    <div className="w-fit cursor-pointer bg-neutral-700 py-2 px-4 text-white" onClick={getNewSuggestion}>
      {hasSuggestion ? 'Me da outra ideia' : 'Gerar sugestão'}
    </div>
  </div>
);

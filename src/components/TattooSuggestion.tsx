import { useSnackbar } from 'react-simple-snackbar';
import pix from '../assets/pix.jpg';

const PIX =
  '00020126580014br.gov.bcb.pix01368bd65b32-f3fa-491a-9356-e6311b2b06be5204000053039865802BR5920Evelyn Luiza Bilibio6009Sao Paulo62070503***63048343';

const options = {
  position: 'top-center',
  style: {
    backgroundColor: 'white',
    color: '#404040',
    textAlign: 'center',
    borderRadius: 0,
    border: '2px solid #404040',
    fontWeight: 500,
    fontFamily: 'Space Grotesk',
  },
  closeStyle: {
    color: '#404040',
  },
};

export const TattooSuggestion = () => {
  const [openSnackbar] = useSnackbar(options);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PIX);
    openSnackbar('Código copiado!', 1500);
  };

  return (
    <div className="flex w-48 flex-col self-center">
      <img className="mx-auto mt-4 flex h-48 items-center justify-center bg-white" src={pix} />
      <div className="mt-8 text-center font-bold">Apoie essa causa</div>
      <div
        onClick={copyToClipboard}
        className="mx-7 mt-4 cursor-pointer border border-neutral-700 bg-white py-1 text-center text-sm"
      >
        Pix copia e cola
      </div>
    </div>
  );
};

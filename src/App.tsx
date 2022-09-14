import { GoogleLogin } from './components/GoogleLogin';
import { SaveDate } from './components/SaveDate';

const isPartyDay = (day: number | string) => {
  return typeof day !== 'string' && day === 20;
};

function App() {
  const dates = [
    {
      day: 18,
      weekday: 'Sexta',
    },
    {
      day: 19,
      weekday: 'Sábado',
    },
    {
      day: 20,
      weekday: 'Domingo',
    },
    {
      day: '21*',
      weekday: 'Segunda',
    },
    {
      day: 22,
      weekday: 'Terça',
    },
  ];

  return (
    <div className="App">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center">
        <div>
          <h1 className="my-8 text-6xl font-black leading-normal">
            Aniversário da <span className="text-purple-600">Lyn</span>
          </h1>

          <GoogleLogin />

          <div className="my-12 flex flex-col">
            <SaveDate />

            <div className="my-8 flex flex-row justify-between">
              {dates.map((d) => (
                <div
                  key={d.day}
                  className={`flex h-24 w-20 flex-col items-center justify-center border-2 ${
                    isPartyDay(d.day) ? 'border-purple-700' : 'border-neutral-700'
                  }`}
                >
                  <div className={`mb-1 text-xs ${isPartyDay(d.day) ? 'text-purple-500' : 'text-neutral-500'}`}>
                    {d.weekday}
                  </div>
                  <div className={`text-xl font-bold ${isPartyDay(d.day) && 'text-purple-700'}`}>{d.day}</div>
                </div>
              ))}
            </div>

            <div className="w-48 self-end text-right text-xs">
              <div>* O aniversário dela é no dia 21</div>
              <div>mas a festinha vai ser no dia 20</div>
            </div>
          </div>
        </div>

        <div>Gerador de sugestões de presentes</div>
      </div>
    </div>
  );
}

export default App;

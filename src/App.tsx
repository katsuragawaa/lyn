import { MouseEvent, useState } from 'react';
import moment from 'moment';

import ReactLoading from 'react-loading';
import Tooltip from 'rc-tooltip/lib/Tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';

import { publishTheCalenderEvent } from './services/googleServices';

import { GoogleLogin } from './components/GoogleLogin';

const SUMMARY = "Evelyn' Party";
const DESCRIPTION = 'VEM PRA FESTA';
const LOCATION = 'Rua Coronel Ottoni Maciel, 741 - Vila Izabel, Curitiba - PR, 80320-000';
const PARTY_START = moment('2022-11-20T16:00');
const PARTY_END = moment('2022-11-20T23:59');
const BR_ZONE = 'America/Sao_Paulo';
const PURPLE_COLOR_ID = '3';

const isPartyDay = (day: number | string) => {
  return typeof day !== 'string' && day === 20;
};

function App() {
  const [loading, setLoading] = useState(false);
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

  const createEvent = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setLoading(true);

    const event = {
      summary: SUMMARY,
      location: LOCATION,
      description: DESCRIPTION,
      colorId: PURPLE_COLOR_ID,
      start: {
        dateTime: PARTY_START,
        locale: BR_ZONE,
      },
      end: {
        dateTime: PARTY_END,
        timeZone: BR_ZONE,
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 6 * 60 },
          { method: 'popup', minutes: 60 },
        ],
      },
    };
    publishTheCalenderEvent(event);

    setTimeout(() => {
      window.open('https://calendar.google.com/calendar/u/0/r/day/2022/11/20');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="App">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center">
        <div>
          <h1 className="my-8 text-6xl font-black leading-normal">
            Aniversário da <span className="text-purple-600">Lyn</span>
          </h1>

          <GoogleLogin />

          <div className="my-12 flex flex-col">
            <div className="flex flex-row">
              {loading ? (
                <ReactLoading className="ml-12" type="bubbles" color="#404040" height={48} width={48} />
              ) : (
                <Tooltip placement="top" showArrow={false} overlay={<span>Adicione no seu calendário</span>}>
                  <div className="flex cursor-pointer flex-col" onClick={createEvent}>
                    <div className="text-sm text-neutral-500">Clique para salvar</div>
                    <div className="text-xl font-bold">20 de Nov, 2022</div>
                  </div>
                </Tooltip>
              )}
            </div>

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

        <div className="m-12 flex h-40 w-full items-center justify-center rounded-xl bg-gray-300">placeholder</div>
      </div>
    </div>
  );
}

export default App;

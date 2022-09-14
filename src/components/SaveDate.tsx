import { useState, MouseEvent } from 'react';
import moment from 'moment';
import ReactLoading from 'react-loading';
import Tooltip from 'rc-tooltip/lib/Tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';

import { publishTheCalenderEvent } from '../services/googleServices';

const BR_ZONE = 'America/Sao_Paulo';
const PURPLE_COLOR_ID = '3';
const EVENT_INFO = {
  summary: "Evelyn' Party",
  location: 'VEM PRA FESTA',
  description: 'Rua Coronel Ottoni Maciel, 741 - Vila Izabel, Curitiba - PR, 80320-000',
  colorId: PURPLE_COLOR_ID,
  start: {
    dateTime: moment('2022-11-20T16:00'),
    locale: BR_ZONE,
  },
  end: {
    dateTime: moment('2022-11-20T23:59'),
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

export const SaveDate = () => {
  const [loading, setLoading] = useState(false);

  const createEvent = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setLoading(true);

    publishTheCalenderEvent(EVENT_INFO);

    setTimeout(() => {
      window.open('https://calendar.google.com/calendar/u/0/r/day/2022/11/20');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-row">
      {loading ? (
        <div>
          <div className="text-sm text-neutral-500">Criando...</div>
          <ReactLoading className="ml-12" type="bubbles" color="#404040" height={28} width={40} />
        </div>
      ) : (
        <Tooltip placement="top" showArrow={false} overlay={<span>Adicione no seu calendário</span>}>
          <div className="flex cursor-pointer flex-col" onClick={createEvent}>
            <div className="text-sm text-neutral-500">Clique para salvar</div>
            <div className="text-xl font-bold">20 de Nov, 2022</div>
          </div>
        </Tooltip>
      )}
    </div>
  );
};

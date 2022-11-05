const isPartyDay = (day: number | string) => {
  return typeof day !== 'string' && day === 19;
};

export const Calendar = () => {
  const dates = [
    {
      day: 17,
      weekday: 'Quinta',
    },
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
  ];

  return (
    <div className="flex flex-col">
      <div className="my-8 flex flex-row justify-between gap-4 overflow-x-auto">
        {dates.map((d) => (
          <div
            key={d.day}
            className={`flex h-24 w-20 min-w-max flex-col items-center justify-center border-2 ${
              isPartyDay(d.day) ? 'border-purple-700' : 'border-neutral-700'
            }`}
          >
            <div
              className={`mb-1 w-20 text-center text-xs ${isPartyDay(d.day) ? 'text-purple-500' : 'text-neutral-500'}`}
            >
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
  );
};

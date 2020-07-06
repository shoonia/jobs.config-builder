import { h } from 'preact';

import s from './styles.css';
import { Period } from './Period';
import { DayOfWeek } from './DayOfWeek';
import { DateInMonth } from './DateInMonth';
import { ItemMenu } from './ItemMenu';
import { FunctionInfo } from './FunctionInfo';
import { WEEKLY, MONTHLY, CRON } from '../../constants';
import { Loadable } from '../Loadable';
import { IItem } from '../../util/items';

interface Props {
  data: IItem;
  remove: EventHandlerNonNull;
  clone: EventHandlerNonNull;
  update: EventHandlerNonNull;
  isMax: boolean;
}

const Cron = Loadable(() => import('./Cron').then((i) => i.Cron), true);

const preventDefault = (event: Event) => {
  event.preventDefault();
  event.stopPropagation();
};

export function Item({
  data,
  remove,
  clone,
  update,
  isMax,
}: Props) {
  const dayOfWeek = data.period === WEEKLY
    ? <DayOfWeek
      id={data.id}
      day={data.dayOfWeek}
    />
    : null;

  const dateInMonth = data.period === MONTHLY
    ? <DateInMonth
      id={data.id}
      date={String(data.dateInMonth)}
    />
    : null;

  const cron = data.period === CRON
    ? <Cron
      id={data.id}
      value={data.cronExpression}
    />
    : null;

  return (
    <li>
      <form
        action="#"
        className={s.item}
        onInput={update}
        onSubmit={preventDefault}
      >
        <FunctionInfo
          id={data.id}
          functionLocation={data.functionLocation}
          functionName={data.functionName}
          description={data.description}
        />
        <Period
          id={data.id}
          period={data.period}
          time={data.time}
        />
        {dayOfWeek}
        {dateInMonth}
        {cron}
        <ItemMenu
          id={data.id}
          remove={remove}
          clone={clone}
          isMax={isMax}
        />
      </form>
    </li>
  );
}
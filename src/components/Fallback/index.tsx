import type { FunctionComponent } from 'preact';

import s from './styles.css';

export const Fallback: FunctionComponent = () => (
  <div className={s.box}>
    <div className={s.i1} />
    <div className={s.i2} />
    <div className={s.i3} />
  </div>
);

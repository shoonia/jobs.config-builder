import { nanoid } from 'nanoid/non-secure';

const getCID = (): string => {
  const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)cid\s*=\s*([^;]*).*$)|^.*$/, '$1');
  const cid = cookie !== '' ? cookie : nanoid();

  document.cookie = 'cid='
    + cid
    + ';domain=shoonia.github.io;path=/;max-age='
    + (60 * 60 * 24 * 365);

  return cid;
};

export const sendBeacon = (): void => {
  const url = 'https://www.google-analytics.com/collect?v=1&tid=UA-128241641-3&aip=1&t=event&ea=open&dp=&dt='
    + '&cid=' + getCID();

  let isSend = false;

  try {
    isSend = navigator.sendBeacon(url);
  } catch { /**/ }

  if (!isSend) {
    (new Image).src = url;
  }
};

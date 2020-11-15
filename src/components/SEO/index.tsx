import { h } from 'preact';

const style: h.JSX.CSSProperties = {
  position: 'absolute',
  top: '0',
  width: '1px',
  height: '1px',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  whiteSpace: 'nowrap',
  border: '0',
};

export function SEO() {
  return (
    <div style={style}>
      <h1>
        Corvid jobs config builder
      </h1>
      <p>
        Online generator for Corvid jobs.config file. Build scheduling recurring jobs for your Wix site. Corvid cron config generator
      </p>
    </div>
  );
}

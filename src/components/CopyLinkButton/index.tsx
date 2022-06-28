import { useState } from 'preact/hooks';

import { store } from '../../store';
import { delay } from '../../util/component';
import { createValidatorLink } from '../../util/validatorValue';
import { IconCopyLink } from '../Icons/IconCopyLink';
import { BlankButton } from '../Button';

interface Props {
  className?: string;
}

export const CopyLinkButton: FC<Props> = ({ className }) => {
  const [isCopied, setState] = useState(false);

  const label = isCopied
    ? 'Copied!'
    : 'Copy link to validation results';

  const onClick: EventListener = async () => {
    const { validatorValue } = store.get();
    const link = createValidatorLink(validatorValue);

    if (link) {
      history.pushState(null, '', link);

      await navigator.clipboard.writeText(link);
      setState(true);
      await delay(2_000);
      setState(false);
    }
  };

  return (
    <BlankButton
      onClick={onClick}
      className={className}
      aria-label={label}
      data-rh={label}
      data-rh-at="left"
    >
      <IconCopyLink />
    </BlankButton>
  );
};
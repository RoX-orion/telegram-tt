import type { FC } from '../../../lib/teact/teact';
import React from '../../../lib/teact/teact';

import type { OwnProps } from './InviteViaLinkModal';

import { Bundles } from '../../../util/moduleLoader';

import useModuleLoader from '../../../hooks/useModuleLoader';

const InviteViaLinkModalAsync: FC<OwnProps> = (props) => {
  const { modal } = props;
  const InviteViaLinkModal = useModuleLoader(Bundles.Extra, 'InviteViaLinkModal', !modal);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return InviteViaLinkModal ? <InviteViaLinkModal {...props} /> : undefined;
};

export default InviteViaLinkModalAsync;

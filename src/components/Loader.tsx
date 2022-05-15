import React, { FC } from 'react';

// Styles
import {
  LoaderStyles,
  flexCenterStyles,
} from '../Styles/index.styles';

const Loader: FC = () => (
  <div className={flexCenterStyles}>
    <div style={{ borderTopColor: 'transparent' }} className={LoaderStyles} />
  </div>
);

export default Loader;

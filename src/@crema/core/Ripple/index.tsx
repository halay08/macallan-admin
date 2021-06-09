import React, { ReactNode, useContext } from 'react';
import { createRipples } from 'react-ripples';

import AppContext from '../../utility/AppContext';
import AppContextPropsType from '../../../types/AppContextPropsType';

interface RippleProps {
  children: ReactNode;
}

const Ripple: React.FC<RippleProps> = ({ children }) => {
  const { theme } = useContext<AppContextPropsType>(AppContext);

  const RippleEffect = createRipples({
    color: theme.palette.primary.main,
    during: 2200
  });

  return <RippleEffect>{children}</RippleEffect>;
};

export default Ripple;

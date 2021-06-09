import React, { ReactNode } from 'react';
import Grid from '@material-ui/core/Grid';
import { isBreakPointDown } from '../../utility/Utils';

interface GridContainerProps {
  children: ReactNode;

  [x: string]: any;
}

const GridContainer: React.FC<GridContainerProps> = ({
  children,
  ...others
}) => {
  return (
    <Grid container spacing={isBreakPointDown('md') ? 4 : 8} {...others}>
      {children}
    </Grid>
  );
};

export default GridContainer;

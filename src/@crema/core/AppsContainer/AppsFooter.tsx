import React, { ReactNode } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { CremaTheme } from '../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => ({
  paginationRoot: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 8,
    paddingTop: 8,
    borderTop: '1px solid',
    borderColor: grey[300]
  },
  paddingY: {
    paddingTop: 0,
    paddingBottom: 0
  }
}));

interface AppsFooterProps {
  children: ReactNode;

  [x: string]: any;
}

const AppsFooter: React.FC<AppsFooterProps> = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <Box className={classes.paginationRoot} {...rest}>
      {children}
    </Box>
  );
};

export default AppsFooter;

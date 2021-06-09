import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import { CremaTheme } from '../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => ({
  listFooterRoot: {
    padding: 10,
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'center'
  }
}));

interface GridFooterProps {
  loading?: boolean;
  footerText?: string;
}

const GridFooter: React.FC<GridFooterProps> = ({
  loading = false,
  footerText = 'No More content'
}) => {
  const classes = useStyles();
  if (loading) {
    return (
      <Box
        width={1}
        display="flex"
        color="text.secondary"
        justifyContent="center"
        p={2}
      >
        <CircularProgress size={16} />
        <Box component="span" ml={2}>
          Loading...
        </Box>
      </Box>
    );
  } else {
    return (
      <Box className={clsx(classes.listFooterRoot, 'list-footer')}>
        <Box component="p">{footerText}</Box>
      </Box>
    );
  }
};

export default GridFooter;

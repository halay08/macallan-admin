import React from 'react';
import { Box, CircularProgress, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  listFooterRoot: {
    padding: 10,
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'center'
  },
  listFooterLoaderRoot: {
    width: '100%',
    display: 'flex',
    color: theme.palette.text.secondary,
    justifyContent: 'center',
    padding: 8,
    borderTop: `1px solid ${theme.palette.grey[200]}`,
    boxSizing: 'border-box'
  }
}));

interface ListFooterProps {
  loading?: boolean;
  footerText?: string;
}

const ListFooter: React.FC<ListFooterProps> = ({
  loading = false,
  footerText
}) => {
  const classes = useStyles();

  return loading ? (
    <Box className={classes.listFooterLoaderRoot}>
      <CircularProgress size={16} />
      <Box component="span" ml={2}>
        Loading...
      </Box>
    </Box>
  ) : (
    <Box className={clsx(classes.listFooterRoot, 'list-footer')}>
      <Box component="p">{footerText}</Box>
    </Box>
  );
};

export default ListFooter;

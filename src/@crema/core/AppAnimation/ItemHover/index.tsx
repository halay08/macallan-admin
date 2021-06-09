import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, fade } from '@material-ui/core';
import { CremaTheme } from '../../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => ({
  root: {
    padding: 24,
    transition: 'all .2s',
    '& .fav-btn': {
      opacity: 0,
      visibility: 'hidden'
    },
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.1),
      transform: 'translateY(-4px)',
      '& .fav-btn': {
        opacity: 1,
        visibility: 'visible'
      }
    }
  }
}));

interface ItemHoverProps {
  children: any;
}

const ItemHover: React.FC<ItemHoverProps> = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.root}>{children}</Box>;
};

export default ItemHover;

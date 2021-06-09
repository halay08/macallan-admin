import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0 7px',
    fontSize: 11,
    fontWeight: 600,
    height: 20,
    minWidth: 20,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.secondary.contrastText
  }
}));

interface BadgeProps {
  className?: string;
  count: any;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({
  className,
  count,
  color = 'secondary'
}) => {
  const classes = useStyles();

  if (color === 'primary') {
    color = 'primary.main';
  } else if (color === 'secondary') {
    color = 'secondary.main';
  }
  return (
    <Box bgcolor={color} className={clsx(classes.root, className)}>
      {count}
    </Box>
  );
};

export default React.memo(Badge);

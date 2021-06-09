import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AppsIcon from '@material-ui/icons/Apps';
import clsx from 'clsx';
import ListIcon from '@material-ui/icons/List';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { CremaTheme } from '../../../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => ({
  root: {
    cursor: 'pointer',
    '&.active': {
      color: theme.palette.primary.main
    }
  }
}));

interface ViewSelectButtonsProps {
  pageView: string;
  onChangePageView: (pageView: string) => void;
}

const ViewSelectButtons: React.FC<ViewSelectButtonsProps> = ({
  pageView,
  onChangePageView
}) => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" ml="auto">
      <IconButton onClick={() => onChangePageView('grid')}>
        <AppsIcon
          className={clsx(classes.root, {
            active: pageView === 'grid'
          })}
        />
      </IconButton>

      <IconButton onClick={() => onChangePageView('list')}>
        <ListIcon
          className={clsx(classes.root, {
            active: pageView === 'list'
          })}
        />
      </IconButton>
    </Box>
  );
};

export default ViewSelectButtons;

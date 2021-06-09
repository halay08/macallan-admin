import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import { CremaTheme } from '../../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => ({
  headerTop: {
    borderBottom: 'solid 1px',
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    padding: '2px 0',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  headerContainer: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1140
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: 1720
    }
  },
  alertStyle: {
    backgroundColor: 'transparent !important',
    color: theme.palette.primary.contrastText,
    padding: 0,
    textAlign: 'center',
    '& .MuiAlert-message': {
      flex: 1
    },
    '& .MuiAlert-action': {
      marginLeft: 10
    }
  }
}));

interface NotificationBarProps {}

const NotificationBar: React.FC<NotificationBarProps> = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <Collapse in={open}>
      <Box className={classes.headerTop}>
        <Box className={classes.headerContainer}>
          <Alert
            className={classes.alertStyle}
            icon={false}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Get flat 60% off on your first purchase
          </Alert>
        </Box>
      </Box>
    </Collapse>
  );
};
export default NotificationBar;

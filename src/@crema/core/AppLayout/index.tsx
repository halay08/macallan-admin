import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import AppContext from '../../utility/AppContext';
import Layouts from './Layouts';
import { ContentView } from '../../index';
import useStyles from '../../../shared/jss/common/common.style';
import { AppState } from '../../../redux/store';
import AppContextPropsType from '../../../types/AppContextPropsType';

const useStyle = makeStyles(() => ({
  appAuth: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    height: '100vh',
    backgroundColor: '#F2C900',
    // background: `url(/assets/images/auth-background.jpg) no-repeat center center`,
    backgroundSize: 'cover',

    '& .scrollbar-container': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    '& .main-content-view': {
      padding: 20
    },
    '& .footer': {
      marginRight: 0,
      marginLeft: 0
    }
  }
}));

interface CremaLayoutProps {}

const CremaLayout: React.FC<CremaLayoutProps> = () => {
  useStyles();
  const { navStyle } = useContext<AppContextPropsType>(AppContext);
  const { user } = useSelector<AppState, AppState['auth']>(({ auth }) => auth);
  const AppLayout = Layouts[navStyle];

  const classes = useStyle();
  return (
    <>
      {user ? (
        <AppLayout />
      ) : (
        <Box className={classes.appAuth}>
          <ContentView />
        </Box>
      )}
    </>
  );
};

export default React.memo(CremaLayout);

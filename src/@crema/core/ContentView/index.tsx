import React, { useContext } from 'react';
import { renderRoutes } from 'react-router-config';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { AppSuspense } from '../../index';
import routes from '../../../modules';
import Scrollbar from '../Scrollbar';
import AppContext from '../../utility/AppContext';
import AppFooter from '../AppLayout/AppFooter';
import Box from '@material-ui/core/Box';
import { RouteTransition } from '../../../shared/constants/AppEnums';
import AppErrorBoundary from '../AppErrorBoundary';
import AppContextPropsType from '../../../types/AppContextPropsType';

interface TransitionWrapperProps {
  children: any;
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({ children }) => {
  const { rtAnim } = useContext<AppContextPropsType>(AppContext);
  const location = useLocation();
  if (rtAnim === RouteTransition.NONE) {
    return <>{children}</>;
  }
  return (
    <TransitionGroup appear enter exit>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames={rtAnim}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

const ContentView = () => {
  return (
    <Scrollbar>
      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        className="main-content-view"
      >
        <AppSuspense>
          <AppErrorBoundary>
            <TransitionWrapper>{renderRoutes(routes)}</TransitionWrapper>
          </AppErrorBoundary>
        </AppSuspense>
      </Box>
      <AppFooter />
    </Scrollbar>
  );
};

export default ContentView;

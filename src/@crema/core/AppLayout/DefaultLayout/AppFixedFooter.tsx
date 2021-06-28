import React, { useContext } from 'react';
import AppContext from '../../../utility/AppContext';
import Box from '@material-ui/core/Box';
import { Button, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import AppContextPropsType from '../../../../types/AppContextPropsType';

const useStyles = makeStyles(theme => ({
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    zIndex: 99,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    margin: '0',
    '& .footerContainer': {
      padding: '5px 20px',
      [theme.breakpoints.up('md')]: {
        paddingLeft: 32,
        paddingRight: 32
      },
      [theme.breakpoints.up('xl')]: {
        padding: '10px 32px'
      }
    }
  }
}));

interface AppFixedFooterProps {}

const AppFixedFooter: React.FC<AppFixedFooterProps> = () => {
  const { footer, footerType } = useContext<AppContextPropsType>(AppContext);

  const classes = useStyles();

  return (
    <>
      {footer && footerType === 'fixed' ? (
        <Box className={clsx(classes.footer, 'footer fixed-footer')}>
          <Box
            className="footerContainer"
            alignItems="center"
            flexDirection="row"
            display="flex"
          >
            <Box>Copy right @Macallan 2021</Box>
            <Box ml="auto">
              <Box px={5} clone>
                <Button color="primary">Buy Now</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default AppFixedFooter;

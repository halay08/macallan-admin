import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import BusinessIcon from '@material-ui/icons/Business';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { Link } from 'react-router-dom';
import Popper from '@material-ui/core/Popper';
import AppContext from '../../../../@crema/utility/AppContext';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { CremaTheme } from '../../../../types/AppContextPropsType';
import { ConnectionObj } from '../../../../types/models/apps/Mail';

const useStyles = makeStyles((theme: CremaTheme) => ({
  popperRoot: {
    backgroundColor: theme.palette.background.paper,
    cursor: 'pointer',
    boxShadow:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  },
  toolTip: {
    cursor: 'pointer',
    marginLeft: 12
  },
  marginLeft: {
    marginLeft: 12
  },
  divider: {
    marginTop: 8,
    marginBottom: 8
  }
}));

interface ConnectionListHoverPopUpProps {
  anchorEl: any;
  open: boolean;
  handlePopoverClose: () => void;
  connection: ConnectionObj;
}

const ConnectionListHoverPopUp: React.FC<ConnectionListHoverPopUpProps> = ({
  anchorEl,
  open,
  connection
}) => {
  const { theme } = useContext(AppContext);

  const classes = useStyles();

  return (
    <Popper
      id="mouse-over-popover"
      open={open}
      anchorEl={anchorEl}
      placement="right"
      className={classes.popperRoot}
      style={{
        marginLeft: '-15px',
        zIndex: 1305,
        borderRadius: theme.overrides.MuiCard.root.borderRadius
      }}
    >
      <ListItem key={connection.id} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={connection.image} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Box component="span" fontWeight={Fonts.MEDIUM}>
              {connection.name}
            </Box>
          }
          secondary={
            <Box component="span" display="block">
              {connection.email}
            </Box>
          }
        />
      </ListItem>

      <Box pt={4} pb={2} px={5} display="flex" alignItems="center">
        <Tooltip title={<IntlMessages id="common.address" />}>
          <BusinessIcon />
        </Tooltip>
        <Box ml={4}>
          {connection.address ? (
            connection.address
          ) : (
            <IntlMessages id="common.na" />
          )}
        </Box>
      </Box>

      <Box py={3} px={5} display="flex" alignItems="center">
        <Tooltip title={<IntlMessages id="common.designation" />}>
          <WorkIcon />
        </Tooltip>
        <Box ml={4}>
          {connection.designation ? (
            connection.designation
          ) : (
            <IntlMessages id="common.na" />
          )}
        </Box>
      </Box>

      <Divider className={classes.divider} />

      <Box pt={3} pb={3} px={5} display="flex" alignItems="center">
        <Box>
          <IntlMessages id="mailApp.addToContacts" />
        </Box>
        <Box ml="auto">
          <Link className={classes.marginLeft} to="/apps/mail/compose">
            <Tooltip title={<IntlMessages id="mailApp.sendMail" />}>
              <MailIcon />
            </Tooltip>
          </Link>
          <Tooltip
            className={classes.toolTip}
            title={<IntlMessages id="mailApp.chat" />}
          >
            <QuestionAnswerIcon />
          </Tooltip>
          <Tooltip
            className={classes.toolTip}
            title={<IntlMessages id="mailApp.remove" />}
          >
            <NotInterestedIcon />
          </Tooltip>
        </Box>
      </Box>
    </Popper>
  );
};

export default ConnectionListHoverPopUp;

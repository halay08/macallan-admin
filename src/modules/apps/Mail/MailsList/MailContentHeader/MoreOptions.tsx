import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  onUpdateReadStatus,
  onUpdateStarredStatus
} from '../../../../../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { grey } from '@material-ui/core/colors';
import { MailObj } from '../../../../../types/models/apps/Mail';
import { AppState } from '../../../../../redux/store';

const useStyles = makeStyles(() => ({
  pointer: {
    cursor: 'pointer'
  },
  moreVertIconRoot: {
    color: grey[700],
    display: 'block'
  }
}));

interface MoreOptionsProps {
  checkedMails: number[];
  setCheckedMails: (ids: number[]) => void;
  path: string;
}

const MoreOptions: React.FC<MoreOptionsProps> = ({
  checkedMails,
  setCheckedMails,
  path
}) => {
  let unReadOption;
  let readOption;
  let starredOption;
  let unStarredOption;

  const dispatch = useDispatch();

  const { mailList }: { mailList: MailObj[] } = useSelector<
    AppState,
    AppState['mailApp']
  >(({ mailApp }) => mailApp);

  const [isMoreIcon, onOpenMoreIcon] = useState(null);

  mailList.map((mail: MailObj) => {
    if (checkedMails.includes(mail.id) && mail.isRead) {
      unReadOption = true;
    }
    if (checkedMails.includes(mail.id) && !mail.isRead) {
      readOption = true;
    }
    if (checkedMails.includes(mail.id) && mail.isStarred) {
      unStarredOption = true;
    }
    if (checkedMails.includes(mail.id) && !mail.isStarred) {
      starredOption = true;
    }
    return null;
  });

  const onViewMoreOpen = (event: any) => {
    onOpenMoreIcon(event.currentTarget);
  };

  const onViewMoreClose = () => {
    onOpenMoreIcon(null);
  };

  const onChangeReadStatus = (status: boolean) => {
    dispatch(onUpdateReadStatus(checkedMails, status));
    setCheckedMails([]);
    onOpenMoreIcon(null);
  };

  const onChangeAllReadStatus = (status: boolean) => {
    const checkedMails = mailList.map(mail => mail.id);
    dispatch(onUpdateReadStatus(checkedMails, status));
    setCheckedMails([]);
    onOpenMoreIcon(null);
  };

  const onChangeAllStarred = (status: boolean) => {
    const checkedMails = mailList.map((mail: MailObj) => mail.id);
    dispatch(
      onUpdateStarredStatus(checkedMails, status, path[path.length - 1])
    );
    setCheckedMails([]);
    onOpenMoreIcon(null);
  };

  const onChangeStarredStatus = (status: boolean) => {
    dispatch(
      onUpdateStarredStatus(checkedMails, status, path[path.length - 1])
    );
    setCheckedMails([]);
    onOpenMoreIcon(null);
  };

  const classes = useStyles();

  return (
    <>
      {checkedMails.length > 0 ? (
        <Box>
          <Tooltip title={<IntlMessages id="common.more" />}>
            <MoreVertIcon
              className={clsx(classes.pointer, classes.moreVertIconRoot)}
              onClick={onViewMoreOpen}
            />
          </Tooltip>

          <Menu
            anchorEl={isMoreIcon}
            open={Boolean(isMoreIcon)}
            onClose={onViewMoreClose}
          >
            {readOption ? (
              <MenuItem onClick={() => onChangeReadStatus(true)}>
                <IntlMessages id="mailApp.markAsRead" />
              </MenuItem>
            ) : null}
            {unReadOption ? (
              <MenuItem onClick={() => onChangeReadStatus(false)}>
                <IntlMessages id="mailApp.markAsUnread" />
              </MenuItem>
            ) : null}
            {starredOption ? (
              <MenuItem onClick={() => onChangeStarredStatus(true)}>
                <IntlMessages id="mailApp.markAsImportant" />
              </MenuItem>
            ) : null}
            {unStarredOption ? (
              <MenuItem onClick={() => onChangeStarredStatus(false)}>
                <IntlMessages id="mailApp.markAsNotImportant" />
              </MenuItem>
            ) : null}
          </Menu>
        </Box>
      ) : (
        <Box>
          <Tooltip title={<IntlMessages id="common.more" />}>
            <MoreVertIcon
              className={clsx(classes.pointer, classes.moreVertIconRoot)}
              onClick={onViewMoreOpen}
            />
          </Tooltip>

          <Menu
            anchorEl={isMoreIcon}
            open={Boolean(isMoreIcon)}
            onClose={onViewMoreClose}
          >
            <MenuItem onClick={() => onChangeAllReadStatus(true)}>
              <IntlMessages id="mailApp.markAllAsRead" />
            </MenuItem>
            <MenuItem onClick={() => onChangeAllReadStatus(false)}>
              <IntlMessages id="mailApp.markAllAsUnread" />
            </MenuItem>
            <MenuItem onClick={() => onChangeAllStarred(true)}>
              <IntlMessages id="mailApp.markAllAsImportant" />
            </MenuItem>
            <MenuItem onClick={() => onChangeAllStarred(false)}>
              <IntlMessages id="mailApp.markAllAsNotImportant" />
            </MenuItem>
          </Menu>
        </Box>
      )}
    </>
  );
};

export default MoreOptions;

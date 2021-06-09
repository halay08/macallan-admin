import React from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import LabelSharpIcon from '@material-ui/icons/LabelSharp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArchiveIcon from '@material-ui/icons/Archive';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import { onUpdateSelectedMail } from '../../../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { LabelObj, MailObj } from '../../../../../types/models/apps/Mail';
import { AppState } from '../../../../../redux/store';

const useStyles = makeStyles(() => ({
  pointer: {
    cursor: 'pointer'
  }
}));

interface MailDetailHeaderProps {
  selectedMail: MailObj;
}

const MailDetailHeader: React.FC<MailDetailHeaderProps> = ({
  selectedMail
}) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { labelList }: { labelList: LabelObj[] } = useSelector<
    AppState,
    AppState['mailApp']
  >(({ mailApp }) => mailApp);

  const [isLabelOpen, onOpenLabel] = React.useState<null | HTMLElement>(null);

  const [isMoreIcon, onOpenMoreIcon] = React.useState<null | HTMLElement>(null);

  const onClickBackButton = () => {
    history.goBack();
  };

  const onLabelOpen = (event: React.MouseEvent<HTMLElement>) => {
    onOpenLabel(event.currentTarget);
  };

  const onLabelClose = () => {
    onOpenLabel(null);
  };

  const onViewMoreOpen = (event: React.MouseEvent<HTMLElement>) => {
    onOpenMoreIcon(event.currentTarget);
  };

  const onViewMoreClose = () => {
    onOpenMoreIcon(null);
  };
  const getLabelObject = (labelId: number): LabelObj => {
    return labelList.find(label => label.id === labelId)!;
  };

  const onSelectLabel = (event: any) => {
    const mail = selectedMail;
    mail.label = getLabelObject(+event.target.value as number);
    dispatch(onUpdateSelectedMail(mail));
    onOpenLabel(null);
  };

  const onChangeMailFolder = (type: number) => {
    const mail = selectedMail;
    mail.folderValue = type;
    dispatch(onUpdateSelectedMail(mail));
    history.goBack();
  };

  const onChangeReadStatus = () => {
    const mail = selectedMail;
    mail.isRead = false;
    dispatch(onUpdateSelectedMail(mail));
    history.goBack();
  };

  const onChangeStarredStatus = () => {
    const mail = selectedMail;
    mail.isStarred = !mail.isStarred;
    dispatch(onUpdateSelectedMail(mail));
    onOpenMoreIcon(null);
  };

  const classes = useStyles();
  if (!selectedMail) return null;
  return (
    <>
      <Tooltip title={<IntlMessages id="common.back" />}>
        <Box mx={2} my={0.5} component="span" color="text.disabled">
          <KeyboardBackspaceIcon
            onClick={onClickBackButton}
            className={classes.pointer}
          />
        </Box>
      </Tooltip>

      <Box ml="auto">
        <Tooltip title={<IntlMessages id="common.archive" />}>
          <Box ml={{ xs: 2, sm: 4 }} component="span" color="text.disabled">
            <ArchiveIcon
              className={classes.pointer}
              onClick={() => onChangeMailFolder(127)}
            />
          </Box>
        </Tooltip>

        <Tooltip title={<IntlMessages id="common.reportSpam" />}>
          <Box ml={{ xs: 2, sm: 4 }} component="span" color="text.disabled">
            <InfoSharpIcon
              className={classes.pointer}
              onClick={() => onChangeMailFolder(125)}
            />
          </Box>
        </Tooltip>

        <Tooltip title={<IntlMessages id="common.trash" />}>
          <Box ml={{ xs: 2, sm: 4 }} component="span" color="text.disabled">
            <DeleteSharpIcon
              className={classes.pointer}
              onClick={() => onChangeMailFolder(126)}
            />
          </Box>
        </Tooltip>

        <Tooltip title={<IntlMessages id="mailApp.markAsUnread" />}>
          <Box ml={{ xs: 2, sm: 4 }} component="span" color="text.disabled">
            <MarkunreadIcon
              className={classes.pointer}
              onClick={() => onChangeReadStatus()}
            />
          </Box>
        </Tooltip>

        <Tooltip title={<IntlMessages id="common.label" />}>
          <Box
            ml={{ xs: 2, sm: 4 }}
            component="span"
            color="text.disabled"
            onClick={onLabelOpen}
          >
            <LabelSharpIcon className={classes.pointer} />
          </Box>
        </Tooltip>

        <Menu
          anchorEl={isLabelOpen}
          open={Boolean(isLabelOpen)}
          onClose={onLabelClose}
        >
          {labelList.map(label => {
            return (
              <MenuItem onClick={onSelectLabel} value={label.id} key={label.id}>
                {label.name}
              </MenuItem>
            );
          })}
        </Menu>

        <Tooltip title={<IntlMessages id="common.more" />}>
          <Box
            ml={2}
            component="span"
            color="text.disabled"
            onClick={onViewMoreOpen}
          >
            <MoreVertIcon className={classes.pointer} />
          </Box>
        </Tooltip>

        <Menu
          anchorEl={isMoreIcon}
          open={Boolean(isMoreIcon)}
          onClose={onViewMoreClose}
        >
          <MenuItem onClick={onChangeReadStatus}>
            <IntlMessages id="mailApp.markAsUnread" />
          </MenuItem>
          <MenuItem onClick={onChangeStarredStatus}>
            {selectedMail.isStarred ? (
              <IntlMessages id="mailApp.markAsNotImportant" />
            ) : (
              <IntlMessages id="mailApp.markAsImportant" />
            )}
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default MailDetailHeader;

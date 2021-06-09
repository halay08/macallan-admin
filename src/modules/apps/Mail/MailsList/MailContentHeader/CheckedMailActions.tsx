import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import ArchiveIcon from '@material-ui/icons/Archive';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import LabelSharpIcon from '@material-ui/icons/LabelSharp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShopTwoSharpIcon from '@material-ui/icons/ShopTwoSharp';
import {
  onUpdateMailFolders,
  onUpdateMailLabels
} from '../../../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AppState } from '../../../../../redux/store';
import { FolderObj, LabelObj } from '../../../../../types/models/apps/Mail';

const useStyles = makeStyles(() => ({
  root: {
    cursor: 'pointer',
    display: 'block'
  }
}));

interface CheckedMailActionsProps {
  checkedMails: number[];
  setCheckedMails: (ids: number[]) => void;
}

const CheckedMailActions: React.FC<CheckedMailActionsProps> = ({
  checkedMails,
  setCheckedMails
}) => {
  const dispatch = useDispatch();
  const [isLabelOpen, onOpenLabel] = useState(null);

  const [isMoveToOpen, onOpenMoveToIcon] = useState<null | SVGSVGElement>(null);

  const {
    labelList,
    folderList
  }: { labelList: LabelObj[]; folderList: FolderObj[] } = useSelector<
    AppState,
    AppState['mailApp']
  >(({ mailApp }) => mailApp);

  const onLabelOpen = (event: any) => {
    onOpenLabel(event.currentTarget);
  };

  const onLabelClose = () => {
    onOpenLabel(null);
  };

  const onMoveToOpen = (event: React.MouseEvent<SVGSVGElement>) => {
    onOpenMoveToIcon(event.currentTarget);
  };

  const onMoveToClose = () => {
    onOpenMoveToIcon(null);
  };

  const onChangeMailFolder = (type: number) => {
    dispatch(onUpdateMailFolders(checkedMails, type));
    setCheckedMails([]);
  };

  const onSelectLabel = (event: any) => {
    const labelType = labelList.find(
      (label: LabelObj) => label.id === (+event.target.value as number)
    )!;
    dispatch(onUpdateMailLabels(checkedMails, labelType.id));
    setCheckedMails([]);
    onOpenLabel(null);
  };
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <Tooltip title={<IntlMessages id="common.archive" />}>
        <Box mr={{ xs: 2, sm: 4 }} component="span" color="text.disabled">
          <ArchiveIcon
            className={classes.root}
            onClick={() => onChangeMailFolder(127)}
          />
        </Box>
      </Tooltip>

      <Tooltip title={<IntlMessages id="common.reportSpam" />}>
        <Box mr={{ xs: 2, sm: 4 }} component="span" color="text.disabled">
          <InfoSharpIcon
            className={classes.root}
            onClick={() => onChangeMailFolder(125)}
          />
        </Box>
      </Tooltip>

      <Tooltip title={<IntlMessages id="common.trash" />}>
        <Box mr={{ xs: 2, sm: 4 }} component="span" color="text.disabled">
          <DeleteSharpIcon
            className={classes.root}
            onClick={() => onChangeMailFolder(126)}
          />
        </Box>
      </Tooltip>

      <Tooltip title={<IntlMessages id="common.label" />}>
        <Box mr={{ xs: 2, sm: 4 }} component="span" color="text.disabled">
          <LabelSharpIcon onClick={onLabelOpen} />
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

      <Tooltip title={<IntlMessages id="common.moveTo" />}>
        <Box mr={{ xs: 2, sm: 4 }} component="span" color="text.disabled">
          <ShopTwoSharpIcon className={classes.root} onClick={onMoveToOpen} />
        </Box>
      </Tooltip>

      <Menu
        anchorEl={isMoveToOpen}
        open={Boolean(isMoveToOpen)}
        onClose={onMoveToClose}
      >
        {folderList.map(folder => {
          return (
            <MenuItem
              onClick={() => onChangeMailFolder(folder.id)}
              key={folder.id}
            >
              {folder.name}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default CheckedMailActions;

import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  onDeleteSelectedList,
  onEditBoardList
} from '../../../../../redux/actions';
import { useDispatch } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import ConfirmationDialog from '../../../../../@crema/core/ConfirmationDialog';
import CheckIcon from '@material-ui/icons/Check';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Fonts } from '../../../../../shared/constants/AppEnums';
import { CardListObj } from '../../../../../types/models/apps/ScrumbBoard';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 8,
    minHeight: (props: { isEditListName: boolean }) =>
      props.isEditListName ? '5.5rem' : '3.5rem'
  },
  pointer: {
    cursor: 'pointer'
  },
  marginLeft12: {
    marginLeft: 12
  },
  textFieldRoot: {
    marginTop: 0
  }
}));

interface ListHeaderProps {
  list: CardListObj;
  boardId: number;
}

const ListHeader: React.FC<ListHeaderProps> = ({ list, boardId }) => {
  const dispatch = useDispatch();

  const [isEditListName, setEditListName] = useState<boolean>(false);

  const [editedListName, setEditedListName] = useState<string>('');

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);

  const onDeleteBoardList = () => {
    dispatch(onDeleteSelectedList(boardId, list.id));
    setDeleteDialogOpen(false);
  };

  const onEditButtonClick = () => {
    setEditedListName(list.name);
    setEditListName(!isEditListName);
  };

  const onEditListName = () => {
    if (editedListName !== '') {
      const editedList = { ...list, name: editedListName };
      dispatch(onEditBoardList(boardId, editedList));
      setEditListName(false);
    }
  };

  const classes = useStyles({ isEditListName });

  return (
    <Card className={classes.root}>
      <Box display="flex" alignItems="center">
        {!isEditListName ? (
          <>
            <Box component="h5" fontSize={15} fontWeight={Fonts.MEDIUM}>
              {list.name}
            </Box>
            <Box ml="auto" display="flex" alignItems="center">
              <EditIcon
                className={clsx(classes.marginLeft12, classes.pointer)}
                onClick={onEditButtonClick}
              />
              <DeleteIcon
                className={clsx(classes.marginLeft12, classes.pointer)}
                onClick={() => setDeleteDialogOpen(true)}
              />
            </Box>
          </>
        ) : (
          <>
            <Box mr={3}>
              <TextField
                fullWidth
                className={classes.textFieldRoot}
                margin="normal"
                label={<IntlMessages id="scrumboard.listTitle" />}
                value={editedListName}
                onChange={event => setEditedListName(event.target.value)}
              />
            </Box>
            <Box ml="auto" display="flex" alignItems="center">
              <CheckIcon className={classes.pointer} onClick={onEditListName} />
              <CloseIcon
                className={clsx(classes.marginLeft12, classes.pointer)}
                onClick={() => setEditListName(false)}
              />
            </Box>
          </>
        )}
      </Box>

      {isDeleteDialogOpen ? (
        <ConfirmationDialog
          open={isDeleteDialogOpen}
          onDeny={setDeleteDialogOpen}
          onConfirm={onDeleteBoardList}
          title={<IntlMessages id="scrumboard.deleteMessage" />}
          dialogTitle={<IntlMessages id="common.deleteItem" />}
        />
      ) : null}
    </Card>
  );
};

export default ListHeader;

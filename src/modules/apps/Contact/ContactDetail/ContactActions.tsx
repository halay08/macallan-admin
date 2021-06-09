import React from 'react';
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AppsStarredIcon from '../../../../@crema/core/AppsStarredIcon';
import { makeStyles } from '@material-ui/core/styles';
import { ContactObj } from '../../../../types/models/apps/Contact';

interface ContactActionsProps {
  contact: ContactObj;
  onDeleteContact: () => void;
  onChangeStarred: (checked: boolean, item: any) => void;
  onOpenEditContact: (contact: ContactObj) => void;
}

const useStyles = makeStyles(() => ({
  pointer: {
    cursor: 'pointer'
  }
}));

const ContactActions: React.FC<ContactActionsProps> = ({
  onDeleteContact,
  onChangeStarred,
  onOpenEditContact,
  contact
}) => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center">
      <Box ml={2}>
        <EditIcon
          className={classes.pointer}
          onClick={() => onOpenEditContact(contact)}
        />
      </Box>
      <Box ml={2}>
        <AppsStarredIcon item={contact} onChange={onChangeStarred} />
      </Box>
      <Box ml={2}>
        <DeleteIcon className={classes.pointer} onClick={onDeleteContact} />
      </Box>
    </Box>
  );
};

export default ContactActions;

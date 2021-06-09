import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import { ContactObj } from '../../../../../types/models/apps/Contact';

const useStyles = makeStyles(() => ({
  pointer: {
    cursor: 'pointer'
  }
}));

interface ItemMenuProps {
  onSelectContactsForDelete: (ids: number[]) => void;
  contact: ContactObj;
  onChangeStarred: (isStarred: boolean, contact: ContactObj) => void;
  onOpenEditContact: (contact: ContactObj) => void;
}

const ItemMenu: React.FC<ItemMenuProps> = ({
  onSelectContactsForDelete,
  contact,
  onChangeStarred,
  onOpenEditContact
}) => {
  const [isMoreIcon, onOpenMoreIcon] = React.useState<null | HTMLElement>(null);

  const onViewMoreOpen = (event: any) => {
    onOpenMoreIcon(event.currentTarget);
  };

  const onViewMoreClose = () => {
    onOpenMoreIcon(null);
  };

  const onDeleteContact = () => {
    onSelectContactsForDelete([contact.id]);
    onViewMoreClose();
  };

  const onChangeStarredStatus = () => {
    onChangeStarred(!contact.isStarred, contact);
    onViewMoreClose();
  };

  const onClickEditOption = () => {
    onOpenEditContact(contact);
    onViewMoreClose();
  };

  const classes = useStyles();

  return (
    <>
      <Tooltip title={<IntlMessages id="common.more" />}>
        <MoreVertIcon className={classes.pointer} onClick={onViewMoreOpen} />
      </Tooltip>
      <Menu
        anchorEl={isMoreIcon}
        open={Boolean(isMoreIcon)}
        onClose={onViewMoreClose}
      >
        <MenuItem onClick={onChangeStarredStatus}>
          {contact.isStarred ? (
            <IntlMessages id="common.unstarred" />
          ) : (
            <IntlMessages id="common.starred" />
          )}
        </MenuItem>

        <MenuItem onClick={onClickEditOption}>
          <IntlMessages id="common.edit" />
        </MenuItem>
        <MenuItem onClick={onDeleteContact}>
          <IntlMessages id="common.delete" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default ItemMenu;

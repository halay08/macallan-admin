import React from 'react';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import LabelSharpIcon from '@material-ui/icons/LabelSharp';
import { onUpdateContactLabel } from '../../../../../redux/actions/ContactApp';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  pointer: {
    cursor: 'pointer',
    display: 'block'
  }
}));

interface ContactCheckedActionsProps {
  checkedContacts: number[];
  setCheckedContacts: (checkedContacts: number[]) => void;
  onSelectContactsForDelete: (checkedContacts: number[]) => void;
}

const ContactCheckedActions: React.FC<ContactCheckedActionsProps> = ({
  checkedContacts,
  setCheckedContacts,
  onSelectContactsForDelete
}) => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const [isLabelOpen, onOpenLabel] = React.useState<null | HTMLElement>(null);

  const onLabelOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    onOpenLabel(event.currentTarget);
  };

  const onLabelClose = () => {
    onOpenLabel(null);
  };

  const onSelectLabel = (event: React.MouseEvent<HTMLElement>) => {
    const path = pathname.split('/');
    // @ts-ignore
    const labelType = event.target.value;
    dispatch(
      onUpdateContactLabel(checkedContacts, labelType, path[path.length - 2])
    );
    setCheckedContacts([]);
    onLabelClose();
  };

  const classes = useStyles();

  return (
    <Box component="span" display="flex" alignItems="center" mr={{ xl: 4 }}>
      <Tooltip title={<IntlMessages id="common.delete" />}>
        <Box mr={4} component="span" color="text.secondary">
          <DeleteSharpIcon
            className={classes.pointer}
            onClick={() => onSelectContactsForDelete(checkedContacts)}
          />
        </Box>
      </Tooltip>

      <Tooltip title={<IntlMessages id="common.label" />}>
        <Box
          mr={4}
          component="span"
          color="text.secondary"
          onClick={onLabelOpen}
        >
          <LabelSharpIcon className={classes.pointer} />
        </Box>
      </Tooltip>

      <Menu
        anchorEl={isLabelOpen}
        keepMounted
        elevation={0}
        open={Boolean(isLabelOpen)}
        onClose={onLabelClose}
      >
        <MenuItem value={311} onClick={onSelectLabel}>
          <IntlMessages id="common.crema" />
        </MenuItem>
        <MenuItem value={312} onClick={onSelectLabel}>
          <IntlMessages id="common.personal" />
        </MenuItem>
        <MenuItem value={313} onClick={onSelectLabel}>
          <IntlMessages id="common.work" />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ContactCheckedActions;

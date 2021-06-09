import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../../redux/store';
import { ContactObj } from '../../../../../types/models/apps/Contact';

interface CheckBoxProps {
  checkedContacts: number[];
  setCheckedContacts: (contactIds: number[]) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  checkedContacts,
  setCheckedContacts
}) => {
  const { contactList }: { contactList: ContactObj[] } = useSelector<
    AppState,
    AppState['contactApp']
  >(({ contactApp }) => contactApp);

  const onHandleMasterCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      const contactIds = contactList.map(contact => contact.id);
      setCheckedContacts(contactIds);
    } else {
      setCheckedContacts([]);
    }
  };

  return (
    <Box mr={{ xs: 1, xl: 2 }}>
      <Checkbox
        color="primary"
        indeterminate={
          checkedContacts.length > 0 &&
          checkedContacts.length < contactList.length
        }
        checked={
          contactList.length > 0 &&
          checkedContacts.length === contactList.length
        }
        onChange={onHandleMasterCheckbox}
      />
    </Box>
  );
};

export default CheckBox;

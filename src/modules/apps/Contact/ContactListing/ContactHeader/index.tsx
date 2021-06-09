import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import SearchBar from '../../../../../@crema/core/SearchBar';
import { Hidden, makeStyles } from '@material-ui/core';
import { useIntl } from 'react-intl';
import CheckBox from './CheckBox';
import ContactCheckedActions from './ContactCheckedActions';
import ViewSelectButtons from './ViewSelectButtons';
import AppsPagination from '../../../../../@crema/core/AppsPagination';
import { AppState } from '../../../../../redux/store';
import { ContactObj } from '../../../../../types/models/apps/Contact';

const useStyles = makeStyles(() => ({
  appsPaginationRoot: {
    paddingLeft: 8,
    paddingRight: 8
  }
}));

interface ContactHeaderProps {
  checkedContacts: number[];
  setCheckedContacts: (checkedContacts: number[]) => void;
  filterText: string;
  onSetFilterText: (filterText: string) => void;
  onChangePageView: (pageView: string) => void;
  onSelectContactsForDelete: (ids: number[]) => void;
  page: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void;
  pageView: string;
}

const ContactHeader: React.FC<ContactHeaderProps> = ({
  checkedContacts,
  setCheckedContacts,
  filterText,
  onSetFilterText,
  onChangePageView,
  onSelectContactsForDelete,
  page,
  onPageChange,
  pageView
}) => {
  const {
    contactList,
    totalContacts
  }: { contactList: ContactObj[]; totalContacts: number } = useSelector<
    AppState,
    AppState['contactApp']
  >(({ contactApp }) => contactApp);

  const classes = useStyles();

  const { messages } = useIntl();

  return (
    <>
      <Box flex={1} display="flex" flexDirection="row" alignItems="center">
        <CheckBox
          checkedContacts={checkedContacts}
          setCheckedContacts={setCheckedContacts}
        />

        {checkedContacts.length > 0 ? (
          <ContactCheckedActions
            onSelectContactsForDelete={onSelectContactsForDelete}
            checkedContacts={checkedContacts}
            setCheckedContacts={setCheckedContacts}
          />
        ) : null}

        <SearchBar
          overlap={false}
          value={filterText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onSetFilterText(event.target.value)
          }
          placeholder={messages['common.searchHere'] as string}
        />

        <ViewSelectButtons
          pageView={pageView}
          onChangePageView={onChangePageView}
        />
      </Box>
      <Hidden xsDown>
        {contactList.length > 0 ? (
          <AppsPagination
            className={classes.appsPaginationRoot}
            count={totalContacts}
            page={page}
            onPageChange={onPageChange}
          />
        ) : null}
      </Hidden>
    </>
  );
};

export default ContactHeader;

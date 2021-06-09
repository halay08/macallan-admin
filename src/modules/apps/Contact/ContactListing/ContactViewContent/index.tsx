import ContactListItem from './ContactListItem';
import Box from '@material-ui/core/Box';
import ContactGridItem from './ContactGridItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppList from '../../../../../@crema/core/AppList';
import AppGrid from '../../../../../@crema/core/AppGrid';
import ListEmptyResult from '../../../../../@crema/core/AppList/ListEmptyResult';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import ContactListSkeleton from '../../../../../@crema/core/Skeleton/ContactListSkeleton';
import { AppState } from '../../../../../redux/store';
import { ContactObj } from '../../../../../types/models/apps/Contact';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 0,
    paddingBottom: 0,
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
}));

interface ContactViewContentProps {
  list: ContactObj[];
  pageView: string;
  loading: boolean;
  handleAddContactOpen: () => void;
  onChangeStarred: (isStarred: boolean, contact: ContactObj) => void;
  onChangeCheckedContacts: (event: any, id: number) => void;
  checkedContacts: number[];
  onSelectContactsForDelete: (contactIds: number[]) => void;
  onOpenEditContact: (contact: ContactObj) => void;
  onViewContactDetail: (contact: ContactObj) => void;
}

const ContactViewContent: React.FC<ContactViewContentProps> = ({
  list,
  pageView,
  loading,
  handleAddContactOpen,
  onChangeStarred,
  onChangeCheckedContacts,
  checkedContacts,
  onSelectContactsForDelete,
  onOpenEditContact,
  onViewContactDetail
}) => {
  const { labelList } = useSelector<AppState, AppState['contactApp']>(
    ({ contactApp }) => contactApp
  );

  const classes = useStyles();

  return (
    <>
      {pageView === 'list' ? (
        <AppList
          data={list}
          animation="transition.slideUpIn"
          className={classes.root}
          ListEmptyComponent={
            <ListEmptyResult
              loading={loading}
              actionTitle={<IntlMessages id="contactApp.createContact" />}
              onClick={handleAddContactOpen}
              placeholder={<ContactListSkeleton />}
            />
          }
          renderRow={contact => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              labelList={labelList}
              onChangeCheckedContacts={onChangeCheckedContacts}
              checkedContacts={checkedContacts}
              onSelectContactsForDelete={onSelectContactsForDelete}
              onChangeStarred={onChangeStarred}
              onViewContactDetail={onViewContactDetail}
              onOpenEditContact={onOpenEditContact}
            />
          )}
        />
      ) : (
        <Box p={6}>
          <AppGrid
            responsive={{
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 3
            }}
            data={list}
            renderRow={contact => (
              <ContactGridItem
                key={contact.id}
                contact={contact}
                labelList={labelList}
                onChangeCheckedContacts={onChangeCheckedContacts}
                checkedContacts={checkedContacts}
                onChangeStarred={onChangeStarred}
                onSelectContactsForDelete={onSelectContactsForDelete}
                onViewContactDetail={onViewContactDetail}
                onOpenEditContact={onOpenEditContact}
              />
            )}
          />
        </Box>
      )}
    </>
  );
};
export default ContactViewContent;

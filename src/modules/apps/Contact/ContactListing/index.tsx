import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  onDeleteContacts,
  onGetContactList,
  onUpdateStarredStatus
} from '../../../../redux/actions/ContactApp';
import ContactHeader from './ContactHeader';
import ConfirmationDialog from '../../../../@crema/core/ConfirmationDialog';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import CreateContact from '../CreateContact';
import { Hidden } from '@material-ui/core';
import ContactViewContent from './ContactViewContent';
import ContactDetail from '../ContactDetail';
import AppsPagination from '../../../../@crema/core/AppsPagination';
import AppsHeader from '../../../../@crema/core/AppsContainer/AppsHeader';
import AppsContent from '../../../../@crema/core/AppsContainer/AppsContent';
import AppsFooter from '../../../../@crema/core/AppsContainer/AppsFooter';
import { AppState } from '../../../../redux/store';
import { ContactObj } from '../../../../types/models/apps/Contact';

const ContactListing = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const {
    contactList,
    totalContacts
  }: { contactList: ContactObj[]; totalContacts: number } = useSelector<
    AppState,
    AppState['contactApp']
  >(({ contactApp }) => contactApp);

  const [filterText, onSetFilterText] = useState('');

  const [page, setPage] = useState(0);

  const [pageView, setPageView] = useState<string>('list');

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);

  const [checkedContacts, setCheckedContacts] = useState<number[]>([]);

  const [toDeleteContacts, setToDeleteContacts] = useState<number[]>([]);

  const [isAddContact, onSetIsAddContact] = useState<boolean>(false);

  const [isShowDetail, onShowDetail] = useState<boolean>(false);

  const [selectedContact, setSelectedContact] = useState<ContactObj | null>(
    null
  );

  const { loading } = useSelector<AppState, AppState['common']>(
    ({ common }) => common
  );

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    const path = pathname.split('/');
    dispatch(
      onGetContactList(path[path.length - 2], path[path.length - 1], page)
    );
  }, [pathname, pageView, page, dispatch]);

  const handleAddContactOpen = () => {
    onSetIsAddContact(true);
  };

  const handleAddContactClose = () => {
    onSetIsAddContact(false);
  };

  const onViewContactDetail = (contact: ContactObj) => {
    setSelectedContact(contact);
    onShowDetail(true);
  };

  const onOpenEditContact = (contact: ContactObj) => {
    setSelectedContact(contact);
    handleAddContactOpen();
  };

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    value: number
  ) => {
    setPage(value);
  };

  const onChangePageView = (view: string) => {
    setPageView(view);
  };

  const onChangeCheckedContacts = (event: any, id: number) => {
    if (event.target.checked) {
      setCheckedContacts(checkedContacts.concat(id));
    } else {
      setCheckedContacts(checkedContacts.filter(contactId => contactId !== id));
    }
  };

  const onChangeStarred = (status: boolean, contact: ContactObj) => {
    const selectedIdList = [contact.id];
    const path = pathname.split('/');
    dispatch(
      onUpdateStarredStatus(selectedIdList, status, path[path.length - 1])
    );
  };

  const onUpdateContact = (contact: ContactObj) => {
    setSelectedContact(contact);
    handleAddContactClose();
  };

  const onGetFilteredItems = () => {
    if (filterText === '') {
      return contactList;
    } else {
      return contactList.filter((contact: ContactObj) =>
        contact.name.toUpperCase().includes(filterText.toUpperCase())
      );
    }
  };

  const onDeleteSelectedContacts = () => {
    const path = pathname.split('/');
    dispatch(
      onDeleteContacts(
        path[path.length - 2],
        path[path.length - 1],
        toDeleteContacts,
        page
      )
    );
    setDeleteDialogOpen(false);
    setCheckedContacts([]);
  };

  const onSelectContactsForDelete = (contactIds: number[]) => {
    setToDeleteContacts(contactIds);
    setDeleteDialogOpen(true);
  };

  const list = onGetFilteredItems();

  return (
    <>
      <AppsHeader>
        <ContactHeader
          checkedContacts={checkedContacts}
          setCheckedContacts={setCheckedContacts}
          filterText={filterText}
          onSelectContactsForDelete={onSelectContactsForDelete}
          onSetFilterText={onSetFilterText}
          onPageChange={onPageChange}
          page={page}
          onChangePageView={onChangePageView}
          pageView={pageView}
        />
      </AppsHeader>
      <AppsContent>
        <ContactViewContent
          list={list}
          loading={loading}
          pageView={pageView}
          handleAddContactOpen={handleAddContactOpen}
          onChangeCheckedContacts={onChangeCheckedContacts}
          onChangeStarred={onChangeStarred}
          checkedContacts={checkedContacts}
          onSelectContactsForDelete={onSelectContactsForDelete}
          onViewContactDetail={onViewContactDetail}
          onOpenEditContact={onOpenEditContact}
        />
      </AppsContent>

      <Hidden smUp>
        {contactList.length > 0 ? (
          <AppsFooter>
            <AppsPagination
              count={totalContacts}
              page={page}
              onPageChange={onPageChange}
            />
          </AppsFooter>
        ) : null}
      </Hidden>

      {isAddContact ? (
        <CreateContact
          isAddContact={isAddContact}
          handleAddContactClose={handleAddContactClose}
          selectContact={selectedContact}
          onUpdateContact={onUpdateContact}
        />
      ) : null}

      {isShowDetail ? (
        <ContactDetail
          selectedContact={selectedContact}
          isShowDetail={isShowDetail}
          onShowDetail={onShowDetail}
          onSelectContactsForDelete={onSelectContactsForDelete}
          onOpenEditContact={onOpenEditContact}
        />
      ) : null}

      {isDeleteDialogOpen ? (
        <ConfirmationDialog
          open={isDeleteDialogOpen}
          onDeny={setDeleteDialogOpen}
          onConfirm={onDeleteSelectedContacts}
          title={<IntlMessages id="contactApp.deleteContact" />}
          dialogTitle={<IntlMessages id="common.deleteItem" />}
        />
      ) : null}
    </>
  );
};

export default ContactListing;

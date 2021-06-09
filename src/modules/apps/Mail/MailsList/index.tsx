import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MailContentHeader from './MailContentHeader';
import MailListItem from './MailListItem';
import {
  onGetMailList,
  onUpdateReadStatus,
  onUpdateStarredStatus
} from '../../../../redux/actions';
import { Hidden } from '@material-ui/core';
import AppsPagination from '../../../../@crema/core/AppsPagination';
import { makeStyles } from '@material-ui/core/styles';
import AppsContent from '../../../../@crema/core/AppsContainer/AppsContent';
import AppsHeader from '../../../../@crema/core/AppsContainer/AppsHeader';
import AppsFooter from '../../../../@crema/core/AppsContainer/AppsFooter';
import AppList from '../../../../@crema/core/AppList';
import ListEmptyResult from '../../../../@crema/core/AppList/ListEmptyResult';
import EmailListSkeleton from '../../../../@crema/core/Skeleton/EmailListSkeleton';
import { AppState } from '../../../../redux/store';
import { LabelObj, MailObj } from '../../../../types/models/apps/Mail';

const useStyles = makeStyles(() => ({
  paddingY: {
    paddingTop: 0,
    paddingBottom: 0
  }
}));

interface MailsListProps {}

const MailsList: React.FC<MailsListProps> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { name }: { name: string } = useParams();

  const {
    mailList,
    totalMails
  }: {
    mailList: MailObj[];
    labelList: LabelObj[];
    totalMails: number;
  } = useSelector<AppState, AppState['mailApp']>(({ mailApp }) => mailApp);

  const [page, setPage] = useState(0);

  const { pathname } = useLocation();

  const path = pathname.split('/');

  const { loading } = useSelector<AppState, AppState['common']>(
    ({ common }) => common
  );

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    const path = pathname.split('/');
    setPage(0);
    dispatch(onGetMailList(path[path.length - 2], path[path.length - 1], page));
  }, [dispatch, page, pathname]);

  const [checkedMails, setCheckedMails] = useState<number[]>([]);

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    value: number
  ) => {
    setPage(value);
  };

  const onChangeCheckedMails = (check: boolean, id: number) => {
    if (check) {
      setCheckedMails(checkedMails.concat(id));
    } else {
      setCheckedMails(checkedMails.filter(mailId => mailId !== id));
    }
  };

  const onViewMailDetail = (mail: MailObj) => {
    const changedMailList = [mail.id];
    dispatch(onUpdateReadStatus(changedMailList, true));
    history.push(`/apps/mail/${name}/${mail.id}`);
  };

  const onChangeStarred = (checked: boolean, mail: MailObj) => {
    const selectedIdList = [mail.id];
    dispatch(
      onUpdateStarredStatus(selectedIdList, checked, path[path.length - 1])
    );
  };

  const classes = useStyles();

  return (
    <>
      <AppsHeader>
        <MailContentHeader
          checkedMails={checkedMails}
          setCheckedMails={setCheckedMails}
          onPageChange={onPageChange}
          page={page}
          path={pathname}
        />
      </AppsHeader>
      <AppsContent>
        <AppList
          className={classes.paddingY}
          data={mailList}
          ListEmptyComponent={
            <ListEmptyResult
              loading={loading}
              placeholder={<EmailListSkeleton />}
            />
          }
          renderRow={mail => (
            <MailListItem
              key={mail.id}
              mail={mail}
              onChangeCheckedMails={onChangeCheckedMails}
              checkedMails={checkedMails}
              onViewMailDetail={onViewMailDetail}
              onChangeStarred={onChangeStarred}
            />
          )}
        />
      </AppsContent>
      <Hidden smUp>
        {mailList.length > 0 ? (
          <AppsFooter>
            <AppsPagination
              count={totalMails}
              page={page}
              onPageChange={onPageChange}
            />
          </AppsFooter>
        ) : null}
      </Hidden>
    </>
  );
};

export default MailsList;

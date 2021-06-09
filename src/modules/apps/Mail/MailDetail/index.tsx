import React, { useEffect } from 'react';
import MailDetailHeader from './MailDetailHeader';
import MailDetailBody from './MailDetailBody';
import { useDispatch, useSelector } from 'react-redux';
import { onGetSelectedMail, onNullifyMail } from '../../../../redux/actions';
import { useParams } from 'react-router-dom';
import AppsContent from '../../../../@crema/core/AppsContainer/AppsContent';
import AppsHeader from '../../../../@crema/core/AppsContainer/AppsHeader';
import { Box } from '@material-ui/core';
import AppAnimate from '../../../../@crema/core/AppAnimate';
import { MailDetailSkeleton } from '../../../../@crema/core/Skeleton/MailDetailSkeleton';
import { AppState } from '../../../../redux/store';

interface MailDetailProps {}

const MailDetail: React.FC<MailDetailProps> = () => {
  const dispatch = useDispatch();

  const { id }: { id: string } = useParams();

  const { selectedMail } = useSelector<AppState, AppState['mailApp']>(
    ({ mailApp }) => mailApp
  );

  useEffect(() => {
    dispatch(onGetSelectedMail(+id));
    return () => {
      onNullifyMail();
    };
  }, [dispatch, id]);

  if (!selectedMail) {
    return <MailDetailSkeleton />;
  }

  return (
    <Box height={1} display="flex" flexDirection="column">
      <AppsHeader>
        <MailDetailHeader selectedMail={selectedMail} />
      </AppsHeader>
      <AppsContent isDetailView>
        <AppAnimate animatoin="transition.slideUpIn">
          <MailDetailBody selectedMail={selectedMail} />
        </AppAnimate>
      </AppsContent>
    </Box>
  );
};

export default MailDetail;

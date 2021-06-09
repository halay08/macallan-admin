import React, { useEffect } from 'react';
import MailsList from './MailsList';
import MailDetail from './MailDetail';
import {
  onGetConnectionList,
  onGetFolderList,
  onGetLabelList
} from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import AppsContainer from '../../../@crema/core/AppsContainer';
import MailSidebar from './MailSideBar';
import { useIntl } from 'react-intl';
import { RouteComponentProps } from 'react-router-dom';

interface MailParamProps {
  id: string;
}

interface MailProps extends RouteComponentProps<MailParamProps> {
  props: any;
}

const Mail: React.FC<MailProps> = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetLabelList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetFolderList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetConnectionList());
  }, [dispatch]);

  const onGetMainComponent = () => {
    if (props.match.params.id) {
      return <MailDetail />;
    } else {
      return <MailsList />;
    }
  };

  const { messages } = useIntl();
  return (
    <AppsContainer
      title={messages['mailApp.mail']}
      sidebarContent={<MailSidebar />}
    >
      {onGetMainComponent()}
    </AppsContainer>
  );
};

export default Mail;

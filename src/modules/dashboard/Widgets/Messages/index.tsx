import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import MessageItem from '../../../../@crema/core/HeaderMessages/MessageItem';
import { makeStyles } from '@material-ui/core/styles';
import { isBreakPointDown } from '../../../../@crema/utility/Utils';
import AppList from '../../../../@crema/core/AppList';
import AppCard from '../../../../@crema/core/AppCard';
import { useIntl } from 'react-intl';
import Scrollbar from '../../../../@crema/core/Scrollbar';
import { MessagesData } from '../../../../types/models/dashboards/Widgets';

const useStyles = makeStyles(theme => ({
  pointer: {
    cursor: 'pointer'
  },
  ScrollbarRoot: {
    height: 263
  }
}));
const getData = (data: MessagesData[]) => {
  if (isBreakPointDown('xl')) {
    return data.slice(0, 4);
  } else {
    return data;
  }
};

interface MessagesProps {
  data: MessagesData[];
}

const Messages: React.FC<MessagesProps> = ({ data }) => {
  const messageData = getData(data);

  const classes = useStyles();
  const { messages } = useIntl();
  return (
    <AppCard
      height="1"
      title={messages['dashboard.messages']}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      action={<CloseIcon className={classes.pointer} />}
    >
      <Scrollbar className={classes.ScrollbarRoot}>
        <AppList
          data={messageData}
          renderRow={item => {
            return <MessageItem key={item.id} item={item} />;
          }}
        />
      </Scrollbar>
    </AppCard>
  );
};

export default Messages;

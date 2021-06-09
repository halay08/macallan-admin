import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import NotificationItem from '../../../../@crema/core/Notifications/NotificationItem';
import AppList from '../../../../@crema/core/AppList';
import AppCard from '../../../../@crema/core/AppCard';
import { useIntl } from 'react-intl';
import Scrollbar from '../../../../@crema/core/Scrollbar';
import { CremaTheme } from '../../../../types/AppContextPropsType';
import { RecentActivityData } from '../../../../types/models/dashboards/Widgets';

const useStyles = makeStyles((theme: CremaTheme) => ({
  pointer: {
    cursor: 'pointer'
  },
  scrollbarRoot: {
    height: 276,
    [theme.breakpoints.up('xl')]: {
      height: 326
    }
  }
}));

interface RecentActivityProps {
  data: RecentActivityData[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ data }) => {
  const classes = useStyles();
  const { messages } = useIntl();
  return (
    <AppCard
      height="1"
      title={messages['dashboard.recentActivity']}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      action={
        <Box component="span" ml="auto" mt={1.5}>
          <CloseIcon className={classes.pointer} />
        </Box>
      }
    >
      <Scrollbar className={classes.scrollbarRoot}>
        <AppList
          data={data}
          renderRow={item => {
            return <NotificationItem item={item} key={item.id} />;
          }}
        />
      </Scrollbar>
    </AppCard>
  );
};

export default RecentActivity;

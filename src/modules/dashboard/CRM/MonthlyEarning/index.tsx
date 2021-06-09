import React from 'react';
import EarningGraph from './EarningGraph';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Categories from './Categories';
import AppCard from '../../../../@crema/core/AppCard';
import { useIntl } from 'react-intl';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { EarningGraphData } from '../../../../types/models/dashboards/CRM';

const useStyles = makeStyles(theme => ({
  earningGraphROot: {
    '& text': {
      fill: theme.palette.text.primary
    }
  }
}));

interface MonthlyEarningProps {
  earningGraphData: EarningGraphData[];
}

export const MonthlyEarning: React.FC<MonthlyEarningProps> = ({
  earningGraphData
}) => {
  const { messages } = useIntl();
  const classes = useStyles();
  return (
    <AppCard height="100%" title={messages['dashboard.earningInMonth']}>
      <Box className={classes.earningGraphROot}>
        <EarningGraph earningGraphData={earningGraphData} />
      </Box>
      <Divider />
      <Box pt={3}>
        <List>
          {earningGraphData.map(category => {
            if (category.name !== '') {
              return <Categories category={category} key={category.name} />;
            }
            return null;
          })}
        </List>
      </Box>
    </AppCard>
  );
};

export default MonthlyEarning;

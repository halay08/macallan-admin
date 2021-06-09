import React from 'react';
import BtcGraph from './BtcGraph';
import { Box, makeStyles } from '@material-ui/core';
import AppCard from '../../../../@crema/core/AppCard';
import { useIntl } from 'react-intl';
import { BtcChartData } from '../../../../types/models/dashboards/Crypto';

const useStyles = makeStyles(() => ({
  textRes: {
    fontSize: 14
  }
}));

interface BtcGraphProps {
  data: BtcChartData[];
}

const BtcVolumeCurrency: React.FC<BtcGraphProps> = ({ data }) => {
  const classes = useStyles();
  const { messages } = useIntl();
  return (
    <AppCard height="1" title={messages['dashboard.btcVolumeByCurency']}>
      <BtcGraph data={data} />
      <Box
        pl={{ xl: 5 }}
        pt={5}
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
      >
        {data.map(item => {
          return (
            <Box
              px={3}
              display="flex"
              flex={1}
              alignItems="center"
              key={item.id}
            >
              <Box
                component="span"
                height={{ xs: 12, xl: 16 }}
                width={{ xs: 12, xl: 16 }}
                borderRadius="50%"
                display="block"
                p={1}
                bgcolor={item.color}
              />
              <Box
                component="span"
                color="text.secondary"
                ml={2}
                className={classes.textRes}
              >
                {item.name}
              </Box>
            </Box>
          );
        })}
      </Box>
    </AppCard>
  );
};

export default BtcVolumeCurrency;

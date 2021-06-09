import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { ReviewGraphData } from '../../../../types/models/dashboards/CRM';

const useStyles = makeStyles(theme => ({
  revenueChart: {
    height: '208px !important',
    [theme.breakpoints.up('xl')]: {
      height: '193px !important'
    }
  }
}));

interface RevenueGraphProps {
  data: ReviewGraphData[];
}

const RevenueGraph: React.FC<RevenueGraphProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <ResponsiveContainer width={400} className={classes.revenueChart}>
      <LineChart data={data} margin={{ left: 10, right: 55, bottom: 10 }}>
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#FFDE00"
          strokeWidth={5}
          dot={{ r: 7 }}
        />
        <Tooltip
          labelStyle={{ color: 'black' }}
          cursor={false}
          content={(data: any) => {
            return data.payload[0] ? (
              <Box component="span" p={4} color="primary.main">
                {data.payload[0].payload.revenue}
              </Box>
            ) : null;
          }}
          wrapperStyle={{
            background: '#FFDE00',
            borderRadius: 10,
            radius: 10,
            overflow: 'hidden'
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueGraph;

import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

interface ExtraRevenueGraphProps {
  data: any[];
  classes: any;
}

const ExtraRevenueGraph: React.FC<ExtraRevenueGraphProps> = ({
  data,
  classes
}) => {
  return (
    <ResponsiveContainer height={200} className={classes.containerRoot}>
      <AreaChart
        width={500}
        height={100}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 0
        }}
      >
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#4C51BF"
          fill="#4C51BF"
          strokeWidth={5}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ExtraRevenueGraph;

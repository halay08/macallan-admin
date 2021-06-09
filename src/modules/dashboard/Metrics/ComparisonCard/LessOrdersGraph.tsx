import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

interface LessOrdersGraphProps {
  data: any[];
  classes: any;
}

const LessOrdersGraph: React.FC<LessOrdersGraphProps> = ({ data, classes }) => {
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
          dataKey="orders"
          stroke="#E53E3E"
          fill="#E53E3E"
          strokeWidth={5}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LessOrdersGraph;

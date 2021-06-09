import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

interface RevenueGrowthGraphProps {
  data: any[];
}

const RevenueGrowthGraph: React.FC<RevenueGrowthGraphProps> = ({ data }) => {
  return (
    <ResponsiveContainer height={200} width="100%">
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
          dataKey="growth"
          stroke="#3182CE"
          fill="#3182CE"
          strokeWidth={5}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RevenueGrowthGraph;

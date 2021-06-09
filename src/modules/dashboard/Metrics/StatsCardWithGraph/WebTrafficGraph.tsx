import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

interface WebTrafficGraphProps {
  data: any[];
}

const WebTrafficGraph: React.FC<WebTrafficGraphProps> = ({ data }) => {
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
          dataKey="traffic"
          stroke="#E53E3E"
          fill="#FC8181"
          strokeWidth={5}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default WebTrafficGraph;

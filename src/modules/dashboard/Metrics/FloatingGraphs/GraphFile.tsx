import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

interface GraphFileProps {
  data: { number: string; value: number }[];
  strokeColor: string;
  areaColor: string;
}

const GraphFile: React.FC<GraphFileProps> = ({
  data,
  strokeColor = '#4299E1',
  areaColor = '#90CDF4'
}) => {
  return (
    <ResponsiveContainer width="100%" height={140}>
      <AreaChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
        <Tooltip labelStyle={{ color: 'black' }} />
        <defs>
          <linearGradient id="color15" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={areaColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={strokeColor} stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <Area
          dataKey="value"
          strokeWidth={4}
          stackId="2"
          stroke={strokeColor}
          fill={areaColor}
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default GraphFile;

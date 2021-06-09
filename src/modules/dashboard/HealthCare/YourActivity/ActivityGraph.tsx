import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import { YourActivityData } from '../../../../types/models/dashboards/HealthCare';

interface ActivityGraphProps {
  data: YourActivityData[];
}

const ActivityGraph: React.FC<ActivityGraphProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={143}>
      <BarChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }}
        barSize={20}
      >
        <Tooltip labelStyle={{ color: 'black' }} />
        <Bar dataKey="visits" fill="#FAB81733" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityGraph;

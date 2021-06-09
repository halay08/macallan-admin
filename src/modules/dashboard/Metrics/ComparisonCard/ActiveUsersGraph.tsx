import React from 'react';
import { Line, LineChart, ResponsiveContainer } from 'recharts';

interface ActiveUsersGraphProps {
  data: any[];
  classes: any;
}

const ActiveUsersGraph: React.FC<ActiveUsersGraphProps> = ({
  data,
  classes
}) => {
  return (
    <ResponsiveContainer height={200} className={classes.containerRoot}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="activeUsers"
          stroke="#4299E1"
          strokeWidth={5}
          dot={{ r: 0 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ActiveUsersGraph;

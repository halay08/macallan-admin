import React from 'react';
import { Line, LineChart, ResponsiveContainer } from 'recharts';
import Box from '@material-ui/core/Box';

interface WorkViewsGraphPorps {
  data: { name: string; value: number }[];
}

const WorkViewsGraph: React.FC<WorkViewsGraphPorps> = ({ data }) => {
  return (
    <Box p={0} mt="auto" flexDirection="auto">
      <ResponsiveContainer height={100} width="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#E2E8F0"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default WorkViewsGraph;

import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

interface CourseGraphProps {
  data: {
    month: string;
    duration: number;
  }[];
}

const CourseGraph: React.FC<CourseGraphProps> = ({ data }) => {
  return (
    <ResponsiveContainer width={50} height={112}>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="color10" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#19A6D2" stopOpacity={1} />
            <stop offset="95%" stopColor="#fff" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="duration"
          strokeWidth={2}
          stroke="#19A6D2"
          fill="url(#color10)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CourseGraph;

import React, { useContext } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import AppContext from '../../../../@crema/utility/AppContext';
import { CancelVisitData } from '../../../../types/models/dashboards/HealthCare';

interface VisitsGraphProps {
  data: CancelVisitData[];
}

const VisitsGraph: React.FC<VisitsGraphProps> = ({ data }) => {
  const { theme } = useContext(AppContext);
  return (
    <ResponsiveContainer width="100%" height={230}>
      <AreaChart data={data} margin={{ top: 50, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorVisit" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={theme.palette.secondary.main}
              stopOpacity={0.1}
            />
            <stop
              offset="95%"
              stopColor={theme.palette.secondary.main}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <Tooltip labelStyle={{ color: 'black' }} />
        <CartesianGrid
          strokeDasharray="2 10"
          horizontal={false}
          vertical={false}
        />
        <Area
          type="monotone"
          dataKey="number"
          stroke={theme.palette.secondary.main}
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorVisit)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default VisitsGraph;

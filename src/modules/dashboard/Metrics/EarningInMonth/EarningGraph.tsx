import React from 'react';
import { Cell, Pie, PieChart } from 'recharts';
import { makeStyles } from '@material-ui/core';
import { EarningInMonthData } from '../../../../types/models/dashboards/Metrics';

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

interface EarningGraphProps {
  data: EarningInMonthData[];
}

const EarningGraph: React.FC<EarningGraphProps> = props => {
  const useStyles = makeStyles(() => ({
    earningGraph: {
      width: '260px !important',
      height: '260px !important',
      alignSelf: 'center',
      '& .recharts-surface': {
        width: '260px !important',
        height: '260px !important'
      }
    }
  }));

  const classes = useStyles(props);

  const { data } = props;

  return (
    <PieChart width={400} height={400} className={classes.earningGraph}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default EarningGraph;

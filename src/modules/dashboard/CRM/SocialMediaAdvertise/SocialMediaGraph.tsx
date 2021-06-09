import React from 'react';
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts';
import Box from '@material-ui/core/Box';
import { SocialMediaData } from '../../../../types/models/dashboards/CRM';

interface SocialMediaAdvertiseProps {
  socialMediaData: SocialMediaData[];
  classes: any;
}

const SocialMediaGraph: React.FC<SocialMediaAdvertiseProps> = ({
  socialMediaData,
  classes
}) => {
  const customizedLabel = (props: any) => {
    const { x, y, value } = props;
    return (
      <text
        x={x + 15}
        y={y}
        dy={-20}
        className={classes.graphText}
        fill={value > 0 ? '#48BB78' : '#E53E3E'}
        textAnchor="middle"
      >
        {value > 0 ? '+' + value : value}%
      </text>
    );
  };

  return (
    <Box mt={5}>
      <ResponsiveContainer width="100%" height={370}>
        <BarChart
          barSize={35}
          data={socialMediaData}
          margin={{ top: 35, right: 0, left: 0, bottom: 35 }}
        >
          <XAxis dataKey="revenue" axisLine={false} tickLine={false} />
          <YAxis hide />
          <Bar dataKey="revenue">
            <LabelList
              dataKey="change"
              content={props => customizedLabel(props)}
            />
            {socialMediaData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SocialMediaGraph;

import React from 'react';
import { Line, LineChart } from 'recharts';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

interface LineGraphProps {
  data: { number: string; value: number }[];
  graphColor: string;
}

const LineGraph: React.FC<LineGraphProps> = ({ data, graphColor }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      marginBottom: 8
    }
  }));
  const classes = useStyles();

  return (
    <Box ml="auto">
      <LineChart className={classes.root} width={300} height={40} data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={graphColor}
          strokeWidth={5}
          dot={false}
        />
      </LineChart>

      <LineChart width={300} height={40} data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={graphColor}
          strokeWidth={5}
          dot={false}
          strokeDasharray="5 5"
        />
      </LineChart>
    </Box>
  );
};

export default LineGraph;

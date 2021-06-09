import React from 'react';
import LineGraph from './LineGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import { Fonts } from '../../../../shared/constants/AppEnums';
import AppCard from '../../../../@crema/core/AppCard';
import { MetricsLineGraphData } from '../../../../types/models/dashboards/Metrics';

interface MetricTitleLineGraphCardProps {
  title: any;
  titleColor: string;
  valueColor: string;
  differenceColor: string;
  bgColor: string;
  data: MetricsLineGraphData;
  graphColor: string;
}

const MetricTitleLineGraphCard: React.FC<MetricTitleLineGraphCardProps> = ({
  title,
  titleColor,
  valueColor,
  differenceColor,
  bgColor,
  data,
  graphColor
}) => {
  return (
    <AppCard style={{ backgroundColor: bgColor }}>
      <Box
        component="h3"
        mb={2}
        fontWeight={Fonts.BOLD}
        fontSize={16}
        color={titleColor}
      >
        {title}
      </Box>
      <Box display="flex" alignItems="center" mb={{ xs: 3, xl: 0 }}>
        <Box
          component="h2"
          mb={0}
          mr={3}
          color={valueColor}
          fontWeight={Fonts.MEDIUM}
          fontSize={{ xs: 24, md: 30, xl: 36 }}
        >
          {data.value}
        </Box>

        <LineGraph data={data.graphData} graphColor={graphColor} />
      </Box>
      <Box component="p" fontSize={14} color={differenceColor}>
        <Box mr={1} component="span">
          {data.difference}
        </Box>
        <Box mr={1} component="span">
          <IntlMessages id="dashboard.thisMonth" />
        </Box>
        <Box mr={1} component="span">
          {data.differencePercent}
        </Box>
      </Box>
    </AppCard>
  );
};

export default MetricTitleLineGraphCard;

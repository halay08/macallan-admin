import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import GraphFile from './GraphFile';
import Box from '@material-ui/core/Box';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { green } from '@material-ui/core/colors';
import AppCard from '../../../../@crema/core/AppCard';
import { MetricsFloatingChildData } from '../../../../types/models/dashboards/Metrics';

interface FloatingGraphsProps {
  data: MetricsFloatingChildData;
  title: any;
}

const FloatingGraphs: React.FC<FloatingGraphsProps> = ({ data, title }) => {
  return (
    <AppCard textAlign="center" height={1}>
      <Box component="p" mb={3} color="text.secondary" fontSize={14}>
        {title}
      </Box>
      <Box
        component="h3"
        fontWeight={Fonts.MEDIUM}
        fontSize={20}
        display="flex"
        justifyContent="center"
      >
        <Box component="span" px={3}>
          {data.value}
        </Box>
        {data.change > 0 ? (
          <Box
            component="span"
            display="flex"
            alignItems="center"
            color={green[500]}
            fontWeight={Fonts.MEDIUM}
            mt={1}
            fontSize={16}
          >
            <Box component="span" fontWeight={Fonts.LIGHT} fontSize={14}>
              <ArrowUpwardIcon />
            </Box>
            <Box component="span" ml={1} mb={1}>
              {data.change}
            </Box>
          </Box>
        ) : (
          <Box
            component="span"
            display="flex"
            alignItems="center"
            color="secondary.main"
            fontWeight={Fonts.MEDIUM}
            mt={1}
            fontSize={16}
          >
            <Box component="span" fontWeight={Fonts.LIGHT} fontSize={14}>
              <ArrowDownwardIcon />
            </Box>
            <Box component="span" ml={1} mb={1}>
              {data.change}
            </Box>
          </Box>
        )}
      </Box>
      <Box m={-8} mt={-2}>
        <GraphFile
          data={data.graphData}
          strokeColor={data.strokeColor}
          areaColor={data.areaColor}
        />
      </Box>
    </AppCard>
  );
};

export default FloatingGraphs;

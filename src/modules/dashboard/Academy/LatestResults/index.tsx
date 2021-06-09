import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import AppList from '../../../../@crema/core/AppList';
import Box from '@material-ui/core/Box';
import AppLinearProgress from '../../../../@crema/core/AppLinearProgress';
import { useIntl } from 'react-intl';
import { isBreakPointDown } from '../../../../@crema/utility/Utils';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { LatestResultData } from '../../../../types/models/dashboards/Academy';

const useStyles = makeStyles(() => ({
  firstItems: {
    width: '60%'
  },
  secondItems: {
    width: '30%'
  },
  thirdItems: {
    width: '10%'
  }
}));

const getColor = (percentage: number) => {
  if (percentage < 50) {
    return '#F5585B';
  }
  return '#FAB817';
};

interface ResultItemProps {
  result: LatestResultData;
}

const ResultItem: React.FC<ResultItemProps> = ({ result }) => {
  const classes = useStyles();
  return (
    <Box
      className="item-hover"
      px={5}
      py={3}
      display="flex"
      alignItems="center"
      flexWrap="wrap"
    >
      <Box className={classes.firstItems} display="flex" alignItems="center">
        <Box
          whiteSpace="nowrap"
          fontSize={14}
          fontWeight={Fonts.MEDIUM}
          component="p"
          color="text.primary"
        >
          {result.chapter}
        </Box>
        <Box whiteSpace="nowrap" ml={1} component="p" color="text.secondary">
          - {result.topic}
        </Box>
      </Box>
      <Box className={classes.secondItems} pl={4}>
        <AppLinearProgress
          value={result.percentage}
          activeColor={getColor(result.percentage)}
        />
      </Box>
      <Box
        className={classes.thirdItems}
        pl={4}
        color={getColor(result.percentage)}
        component="span"
      >
        {result.percentage}%
      </Box>
    </Box>
  );
};

interface LatestResultsProps {
  latestResults: LatestResultData[];
}

const LatestResults: React.FC<LatestResultsProps> = ({ latestResults }) => {
  const { messages } = useIntl();

  const getData = (data: LatestResultData[]) => {
    if (isBreakPointDown('xl')) {
      return data.slice(0, 6);
    } else {
      return data;
    }
  };
  return (
    <AppCard
      height={1}
      title={messages['academy.latestResults']}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <AppList
        animation="transition.slideRightBigIn"
        data={getData(latestResults)}
        renderRow={(data, index) => <ResultItem key={index} result={data} />}
      />
    </AppCard>
  );
};

export default LatestResults;

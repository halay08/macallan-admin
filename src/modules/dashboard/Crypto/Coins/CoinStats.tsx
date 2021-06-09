import React from 'react';
import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { green, red } from '@material-ui/core/colors';
import { Fonts } from '../../../../shared/constants/AppEnums';
import AppCard from '../../../../@crema/core/AppCard';
import clsx from 'clsx';
import { CoinData } from '../../../../types/models/dashboards/Crypto';
import { CremaTheme } from '../../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => ({
  statsCard: {
    borderRadius: theme.overrides.MuiCardLg.root.borderRadius
  },
  root: {
    height: 50,
    width: 50,
    borderRadius: theme.overrides.MuiCardLg.root.borderRadius,
    backgroundColor: (props: { bgColor: string }) => props.bgColor,
    [theme.breakpoints.up('md')]: {
      height: 60,
      width: 60
    },
    [theme.breakpoints.up('xl')]: {
      height: 70,
      width: 70
    }
  }
}));

interface CoinStatsProps {
  icon: string;
  bgColor: string;
  data: CoinData;
  heading: any;
}

const CoinStats: React.FC<CoinStatsProps> = ({
  icon,
  bgColor,
  data,
  heading
}) => {
  const classes = useStyles({ bgColor });

  return (
    <AppCard className={clsx(classes.statsCard, 'card-hover')}>
      <Box display="flex" alignItems="center">
        <Box p={3} fontSize={{ xs: 30, md: 48 }} clone>
          <Avatar className={classes.root}>
            <img alt="" src={icon} />
          </Avatar>
        </Box>

        <Box position="relative" ml={{ xs: 3, xl: 6 }}>
          <Box component="p" fontSize={14} color="text.secondary" mb={2}>
            {heading}
          </Box>
          <Box
            component="h3"
            display="inline-block"
            fontWeight={Fonts.MEDIUM}
            fontSize={20}
          >
            ${data.price}
          </Box>
          <Box
            component="span"
            ml={3}
            fontSize={16}
            fontWeight={Fonts.MEDIUM}
            color={data.increment > 0.0 ? green[500] : red[500]}
          >
            {data.increment}%
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default CoinStats;

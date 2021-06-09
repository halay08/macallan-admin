import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { Fonts } from '../../../../shared/constants/AppEnums';
import AppCard from '../../../../@crema/core/AppCard';
import clsx from 'clsx';
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
    }
  }
}));

interface StatsCardProps {
  icon: ReactNode;
  bgColor: string;
  heading: any;
  data: {
    count: string;
  };
}

const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  bgColor = '',
  data,
  heading
}) => {
  const classes = useStyles({ bgColor });

  return (
    <AppCard className={clsx(classes.statsCard, 'card-hover')}>
      <Box display="flex" alignItems="center">
        <Box fontSize={{ xs: 36, md: 48 }} clone>
          <Avatar className={classes.root}>{icon}</Avatar>
        </Box>
        <Box ml={{ xs: 3, xl: 4 }}>
          <Box component="p" color="text.secondary" mb={2} fontSize={14}>
            {heading}
          </Box>
          <Box component="h3" fontWeight={Fonts.MEDIUM} fontSize={20}>
            {data.count}
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default StatsCard;

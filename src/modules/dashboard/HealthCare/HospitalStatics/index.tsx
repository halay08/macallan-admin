import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import { Box, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { Doses } from '../../../../types/models/dashboards/HealthCare';

const useStyles = makeStyles(() => ({
  titleRoot: {
    fontSize: 16
  },
  textTruncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%'
  },
  cardContentRoot: {
    width: 'calc(100% - 70px)'
  }
}));

interface HospitalStaticsProps {
  data: Doses;
}

const HospitalStatics: React.FC<HospitalStaticsProps> = ({ data }) => {
  const { icon, value, name } = data;
  const classes = useStyles();
  return (
    <AppCard height={1} className="card-hover">
      <Box display="flex" alignItems="center">
        <Box mr={4} clone alignSelf="flex-start">
          <img src={icon} alt="icon" />
        </Box>
        <Box className={classes.cardContentRoot}>
          <Typography
            className={clsx(classes.textTruncate, classes.titleRoot)}
            component="h5"
            variant="inherit"
            color="inherit"
          >
            {value}
          </Typography>
          <Box
            component="p"
            pt={0.5}
            className={classes.textTruncate}
            color="text.secondary"
          >
            {name}
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default HospitalStatics;

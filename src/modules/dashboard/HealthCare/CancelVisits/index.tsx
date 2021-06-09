import React from 'react';
import { useIntl } from 'react-intl';
import AppCard from '../../../../@crema/core/AppCard';
import { Box, makeStyles } from '@material-ui/core';
import VisitsGraph from './VisitsGraph';
import AppMenu from '../../../../@crema/core/AppMenu';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { CancelVisitData } from '../../../../types/models/dashboards/HealthCare';

const useStyles = makeStyles(theme => ({
  arrowIconRoot: {
    '& img': {
      height: 12
    }
  }
}));

interface CancelVisitsProps {
  data: CancelVisitData[];
}

const CancelVisits: React.FC<CancelVisitsProps> = ({ data }) => {
  const { messages } = useIntl();
  const classes = useStyles();
  return (
    <AppCard
      title={messages['healthCare.cancelledVisits']}
      action={<AppMenu />}
    >
      <Box>
        <Box mb={6} display="flex" alignItems="center">
          <Box component="span" mr={2} fontSize={20} fontWeight={Fonts.BOLD}>
            32
          </Box>
          <Box className={classes.arrowIconRoot}>
            <img src={'/assets/images/dashboard/decries_icon.png'} alt="down" />
          </Box>
        </Box>
        <Box mx={-6} mb={-6}>
          <VisitsGraph data={data} />
        </Box>
      </Box>
    </AppCard>
  );
};

export default CancelVisits;

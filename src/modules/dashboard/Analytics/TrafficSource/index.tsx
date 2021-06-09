import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { Box } from '@material-ui/core';
import AppLinearProgress from '../../../../@crema/core/AppLinearProgress';
import { withStyles } from '@material-ui/core/styles';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { useIntl } from 'react-intl';
import { TrafficData } from '../../../../types/models/dashboards/Analytics';

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles(theme => ({
  root: (props: { expanded: boolean }) => ({
    backgroundColor: props.expanded
      ? '#00000008'
      : theme.palette.background.paper,
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  }),
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
}))(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: '#00000008'
  }
}))(MuiAccordionDetails);

interface TrafficSourceProps {
  trafficData: TrafficData[];
}

const TrafficSource: React.FC<TrafficSourceProps> = ({ trafficData }) => {
  const [expanded, setExpanded] = React.useState<number | false>(1);

  const handleChange =
    (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const { messages } = useIntl();
  return (
    <AppCard title={messages['dashboard.analytics.trafficSource']}>
      {trafficData.map(data => (
        <Accordion
          key={data.id}
          expanded={expanded === data.id}
          onChange={handleChange(data.id)}
        >
          <AccordionSummary
            expanded={expanded === data.id}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Box display="flex" flex={1} flexDirection="column">
              <Box
                mb={2}
                display="flex"
                justifyContent="space-between"
                alignItems="space-between"
              >
                <Box>{data.title}</Box>
                <Box component="span" color="text.secondary">
                  {data.value}%
                </Box>
              </Box>
              <AppLinearProgress
                value={data.value}
                thickness={10}
                activeColor="#0698EC"
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box display="flex" flex={1} justifyContent="flex-end">
              <Box component="span" ml={2} fontWeight={Fonts.LIGHT}>
                {data.session}
              </Box>
              <Box ml={2} component="span" color="text.secondary">
                Session
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </AppCard>
  );
};

export default TrafficSource;

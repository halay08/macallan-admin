import React from 'react';
import SocialMediaGraph from './SocialMediaGraph';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import { Fonts } from '../../../../shared/constants/AppEnums';
import AppCard from '../../../../@crema/core/AppCard';
import { useIntl } from 'react-intl';
import { SocialMediaData } from '../../../../types/models/dashboards/CRM';

const useStyles = makeStyles(() => ({
  textRoot: {
    textTransform: 'capitalize'
  },
  graphText: {
    fontWeight: Fonts.MEDIUM,
    fontSize: 14
  },
  textTruncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
}));

interface SocialMediaAdvertiseProps {
  socialMediaData: SocialMediaData[];
}

const SocialMediaAdvertise: React.FC<SocialMediaAdvertiseProps> = ({
  socialMediaData
}) => {
  const classes = useStyles();
  const { messages } = useIntl();
  return (
    <AppCard title={messages['dashboard.socialMedia']} height="100%">
      <SocialMediaGraph socialMediaData={socialMediaData} classes={classes} />
      <Box
        mb={1}
        mx={{ xs: -2, xl: -3 }}
        display="flex"
        justifyContent="space-between"
      >
        {socialMediaData.map(item => {
          return (
            <Box px={{ xs: 2, xl: 3 }} key={item.id}>
              <Box
                component="h4"
                mb={1}
                fontWeight={Fonts.MEDIUM}
                fontSize={18}
              >{`$${item.revenue}`}</Box>
              <Box display="flex" alignItems="center">
                <Box
                  component="span"
                  height={12}
                  width={12}
                  borderRadius="50%"
                  display="block"
                  p={1}
                  mr={2}
                  bgcolor={item.color}
                />
                <Box
                  component="p"
                  color="text.secondary"
                  fontSize={12}
                  className={classes.textRoot}
                >
                  {item.name}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </AppCard>
  );
};

export default SocialMediaAdvertise;

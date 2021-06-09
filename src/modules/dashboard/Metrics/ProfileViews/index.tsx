import React from 'react';
import ProfileViewsGraph from './ProfileViewsGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import { Fonts } from '../../../../shared/constants/AppEnums';
import AppCard from '../../../../@crema/core/AppCard';
import { ProfileViewsData } from '../../../../types/models/dashboards/Metrics';

interface ProfileViewsProps {
  data: ProfileViewsData;
}

const ProfileViews: React.FC<ProfileViewsProps> = ({ data }) => {
  return (
    <AppCard
      height={1}
      contentStyle={{ display: 'flex', flexDirection: 'column' }}
    >
      <Box
        component="h3"
        mb={1}
        color="text.primary"
        fontSize={20}
        fontWeight={Fonts.MEDIUM}
      >
        {data.views}
      </Box>
      <Box
        component="p"
        color="text.secondary"
        fontSize={14}
        fontWeight={Fonts.REGULAR}
      >
        <IntlMessages id="dashboard.profileViews" />
      </Box>
      <Box mt="auto">
        <ProfileViewsGraph data={data.graphData} />
      </Box>
    </AppCard>
  );
};

export default ProfileViews;

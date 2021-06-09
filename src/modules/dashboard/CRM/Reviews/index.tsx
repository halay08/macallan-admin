import React from 'react';
import ReviewsGraph from './ReviewsGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import { green, teal } from '@material-ui/core/colors';
import { Fonts } from '../../../../shared/constants/AppEnums';
import AppCard from '../../../../@crema/core/AppCard';
import { ReviewGraphData } from '../../../../types/models/dashboards/CRM';

interface ReviewsProps {
  reviewGraphData: ReviewGraphData[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviewGraphData }) => {
  return (
    <AppCard style={{ backgroundColor: teal[600], color: 'white' }}>
      <Box display="flex">
        <Box>
          <Box mb={1} component="h3" fontWeight={Fonts.BOLD} fontSize={16}>
            <IntlMessages id="common.reviews" />
          </Box>
          <Box
            component="h4"
            mb={2}
            fontWeight={Fonts.MEDIUM}
            fontSize={{ xs: 18, xl: 20 }}
            color={green[300]}
          >
            34,042
          </Box>
          <Box component="p" fontSize={14}>
            <IntlMessages id="dashboard.reviewText" />
          </Box>
        </Box>
      </Box>
      <Box mb={-16}>
        <ReviewsGraph reviewGraphData={reviewGraphData} />
      </Box>
    </AppCard>
  );
};

export default Reviews;

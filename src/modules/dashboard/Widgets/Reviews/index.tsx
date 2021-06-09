import React from 'react';
import ReviewItem from './ReviewItem';
import AppList from '../../../../@crema/core/AppList';
import AppCard from '../../../../@crema/core/AppCard';
import { useIntl } from 'react-intl';
import Scrollbar from '../../../../@crema/core/Scrollbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ReviewsList } from '../../../../types/models/dashboards/Widgets';

const useStyles = makeStyles(theme => ({
  scrollbarRoot: {
    height: 362,
    [theme.breakpoints.up('xl')]: {
      height: 316
    }
  }
}));

interface ReviewsProps {
  data: ReviewsList[];
}

const Reviews: React.FC<ReviewsProps> = ({ data }) => {
  const { messages } = useIntl();
  const classes = useStyles();

  return (
    <AppCard
      height="1"
      title={messages['common.reviews']}
      contentStyle={{ paddingRight: 0, paddingLeft: 0 }}
    >
      <Scrollbar className={classes.scrollbarRoot}>
        <AppList
          data={data}
          renderRow={item => {
            return <ReviewItem key={item.id} item={item} />;
          }}
        />
      </Scrollbar>
    </AppCard>
  );
};

export default Reviews;

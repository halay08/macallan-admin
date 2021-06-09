import React from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { ReviewsList } from '../../../../types/models/dashboards/Widgets';

const useStyles = makeStyles(() => ({
  reviewsList: {
    fontSize: 14,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 8
  }
}));

interface ReviewItemProps {
  item: ReviewsList;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ item }) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.reviewsList, 'item-hover')} key={item.id}>
      <Box mb={1} display="flex" alignItems="center">
        <Rating value={item.rating} readOnly />
        <Box
          component="span"
          ml="auto"
          color="text.secondary"
          fontWeight={Fonts.MEDIUM}
        >
          {item.time}
        </Box>
      </Box>
      <Box component="p" color="grey.600" mb={1}>
        {item.content}
      </Box>
      <Box component="span" color="primary.main" fontWeight={Fonts.MEDIUM}>
        - {item.by}
      </Box>
    </Box>
  );
};

export default ReviewItem;

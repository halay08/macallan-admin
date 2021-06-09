import React from 'react';
import Box from '@material-ui/core/Box';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/core';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { RelatedCoursesData } from '../../../../types/models/dashboards/Academy';

const useStyles = makeStyles(() => ({
  courseView: {
    '& .MuiSvgIcon-root': {
      fontSize: 16
    }
  },
  imgRoot: {
    width: '100%'
  }
}));

interface CourseItemProps {
  data: RelatedCoursesData;
}

const CourseItem: React.FC<CourseItemProps> = ({ data }) => {
  const classes = useStyles();
  return (
    <Box px={{ sm: 3 }}>
      <Box mb={2}>
        <img className={classes.imgRoot} src={data.image} alt={data.title} />
      </Box>
      <Box component="p" fontSize={14} fontWeight={Fonts.MEDIUM} mb={2}>
        {data.title}
      </Box>
      <Box display="flex" alignItems="center" color="text.secondary">
        <Box component="p">{data.author}</Box>
        <Box
          ml={3}
          display="flex"
          alignItems="center"
          className={classes.courseView}
        >
          <VisibilityIcon />
          <Box component="p" ml={2}>
            {data.views} views
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseItem;

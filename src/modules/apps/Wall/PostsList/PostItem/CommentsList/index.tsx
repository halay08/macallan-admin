import React from 'react';
import Box from '@material-ui/core/Box';
import AppList from '../../../../../../@crema/core/AppList';
import CommentItem from './CommentItem';
import { makeStyles } from '@material-ui/core';
import { Fonts } from '../../../../../../shared/constants/AppEnums';
import { CommentObj } from '../../../../../../types/models/apps/Wall';

const useStyles = makeStyles(() => ({
  commentListRoot: {
    borderTop: '1px solid #E5E4EA',
    paddingTop: 20
  }
}));

interface CommentsListProps {
  comments: CommentObj[];
}

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  const classes = useStyles();
  return (
    <Box className={classes.commentListRoot}>
      <Box
        component="p"
        color="primary.main"
        mb={{ xs: 5, xl: 6 }}
        fontSize={16}
        fontFamily={Fonts.MEDIUM}
      >
        Comments
      </Box>
      <AppList
        data={comments}
        renderRow={(item, index) => <CommentItem key={index} item={item} />}
      />
    </Box>
  );
};

export default CommentsList;

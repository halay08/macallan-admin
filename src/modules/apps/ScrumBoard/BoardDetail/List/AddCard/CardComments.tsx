import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { useIntl } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { Fonts } from '../../../../../../shared/constants/AppEnums';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  avatarRoot: {
    width: 50,
    height: 50,
    backgroundColor: orange[500]
  },
  textareaAutosizeRoot: {
    width: '100%'
  }
}));

interface CardCommentsProps {
  comments: any[];
  onAddNewComment: (comment: string) => void;
}

const CardComments: React.FC<CardCommentsProps> = ({
  comments,
  onAddNewComment
}) => {
  const [comment, setComment] = useState<string>('');

  const onAddComment = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 13) {
      onAddNewComment(comment);
      setComment('');
    }
  };

  const { messages } = useIntl();

  const classes = useStyles();

  return (
    <Box mb={{ xs: 5, xl: 10 }}>
      <Box mb={5}>
        {comments.map((item, index) => {
          return (
            <Box mb={5} key={index}>
              <Box mb={4} display="flex" alignItems="center">
                {item.image ? (
                  <Avatar src={item.image} className={classes.avatarRoot} />
                ) : (
                  <Avatar className={classes.avatarRoot}>
                    {item.name.charAt(0).toUpperCase()}
                  </Avatar>
                )}
                <Box ml={4}>
                  <Box
                    component="span"
                    mb={1}
                    display="block"
                    color="primary.main"
                    fontWeight={Fonts.LIGHT}
                  >
                    {item.name}
                  </Box>
                  <Box
                    component="span"
                    color="text.secondary"
                    fontSize={14}
                    display="block"
                  >
                    {item.date}
                  </Box>
                </Box>
              </Box>
              <Box component="p" ml={2} mb={0}>
                {item.comment}
              </Box>
            </Box>
          );
        })}
      </Box>

      <TextField
        multiline
        onKeyDown={onAddComment}
        value={comment}
        onChange={e => setComment(e.target.value)}
        className={classes.textareaAutosizeRoot}
        rows="4"
        variant="outlined"
        placeholder={messages['common.pressEnter'] as string}
      />
    </Box>
  );
};

export default CardComments;

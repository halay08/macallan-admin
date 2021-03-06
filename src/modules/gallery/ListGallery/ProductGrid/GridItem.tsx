import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { IArtworkEntity, statusColor, statusFormatter } from '../../types';
import { firebaseTimestampToDate, getFirebaseImageLink } from 'shared/ultis';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  textUppercase: {
    textTransform: 'uppercase'
  },
  lineThrough: {
    textDecoration: 'line-through'
  },
  textBase: {
    fontSize: 16
  },
  textSm: {
    fontSize: 14
  },
  textXs: {
    fontSize: 12
  },
  textRes: {
    fontSize: 12,
    [theme.breakpoints.up('xl')]: {
      fontSize: 14
    }
  },
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  btn: {
    fontWeight: Fonts.MEDIUM,
    padding: '4px 12px',
    fontSize: 12
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));

type props = {
  item: IArtworkEntity;
};

const GridItem = (props: props) => {
  const { item } = props;
  const history = useHistory();
  const classes = useStyles(props);

  return (
    <Box
      p={5}
      m={2}
      className="pointer item-hover"
      onClick={() => {
        history.push('/gallery/detail/' + item.id);
      }}
      clone
    >
      <Card>
        <Box
          mt={2}
          mb={5}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="start"
        >
          <Box
            component="span"
            maxHeight={28}
            color="primary.contrastText"
            bgcolor={statusColor[item.status]}
            py={1}
            px={2}
            mb={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontWeight={Fonts.MEDIUM}
            borderRadius={8}
            className={classes.textSm}
          >
            {statusFormatter[item.status]}
          </Box>
          <Box textAlign="center" height={200} width="100%">
            <img
              className={classes.img}
              src={
                item.thumbnails
                  ? getFirebaseImageLink(item.thumbnails.url)
                  : getFirebaseImageLink(item.imgUrl)
              }
              alt="gallery"
            />
          </Box>
        </Box>

        <Box
          mb={1}
          color="text.primary"
          fontWeight={Fonts.BOLD}
          fontSize={16}
          component="h3"
          className={classes.truncate}
        >
          {item.contact
            ? item.contact.name || item.contact.email
            : item.message}
        </Box>

        <Box
          mb={3}
          mr={6}
          color="text.secondary"
          className={clsx(classes.truncate, classes.textSm)}
        >
          {item.contact ? item.contact.country : ''}
        </Box>

        <Box
          mb={3}
          mr={6}
          color="text.secondary"
          className={clsx(classes.truncate, classes.textSm)}
        >
          {firebaseTimestampToDate(item.createdAt).toLocaleDateString()}
        </Box>
      </Card>
    </Box>
  );
};

export default GridItem;

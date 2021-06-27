import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { IArtworkEntity } from '../types';
import { firebaseTimestampToDate } from 'shared/ultis';

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

const statusFormatter = {
  in_review: 'In Review',
  approved: 'Approved',
  rejected: 'Rejected'
};

const statusColor = {
  in_review: 'info.main',
  approved: 'success.main',
  rejected: 'error.main'
};

type props = {
  item: IArtworkEntity;
};

const GridItem = (props: props) => {
  const { item } = props;

  const getImageLink = (imgSrc: string) => {
    const firebaseStorage = 'https://firebasestorage.googleapis.com/v0/b/';
    const bucket = `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}/o/`;
    const imageName = imgSrc.replaceAll('/', '%2F');
    return firebaseStorage + bucket + imageName + '?alt=media';
  };

  const classes = useStyles(props);
  return (
    <Box p={5} m={2} className="pointer item-hover" onClick={() => {}} clone>
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
          <Box textAlign="center" height={300} width="100%">
            <img
              className={classes.img}
              src={
                item.thumbnails
                  ? getImageLink(item.thumbnails.url)
                  : getImageLink(item.imgUrl)
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

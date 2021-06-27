import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { IArtworkEntity } from '../types';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 280,
    [theme.breakpoints.up('sm')]: {
      width: '8rem'
    },
    [theme.breakpoints.up('xl')]: {
      width: '10rem'
    }
  },
  contentRoot: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 8rem)'
    },
    [theme.breakpoints.up('xl')]: {
      width: 'calc(100% - 10rem)'
    }
  },
  priceView: {
    fontSize: 12,
    [theme.breakpoints.up('xl')]: {
      fontSize: 14
    }
  },
  textUppercase: {
    textTransform: 'uppercase'
  },
  lineThrough: {
    textDecoration: 'line-through'
  },
  textSm: {
    fontSize: 14
  },
  textXs: {
    fontSize: 12
  },
  checkBoxRoot: {
    '& .MuiCheckbox-root': {
      padding: 3
    }
  },
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: 'calc(100% - 40px)'
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
const ListItem = (props: props) => {
  const { item } = props;
  const classes = useStyles(props);

  return (
    <Box p={5} m={2} className="pointer item-hover" clone>
      <Card>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
          <Box
            pr={{ xs: 0, sm: 4 }}
            mb={{ xs: 3, sm: 0 }}
            className={classes.root}
          >
            <Box mb={2}>
              <img
                src={item.thumbnails ? item.thumbnails.url : item.imgUrl}
                alt="watch"
              />
            </Box>
          </Box>

          <Box className={classes.contentRoot}>
            <Box
              component="h3"
              fontWeight={Fonts.BOLD}
              fontSize={16}
              className={classes.truncate}
            >
              {item.contact
                ? item.contact.name || item.contact.email
                : item.message}
            </Box>

            <Box
              component="p"
              color="text.secondary"
              mb={2}
              className={classes.textSm}
            >
              {item.contact ? item.contact.country : ''}
            </Box>

            <Box
              component="p"
              color="text.secondary"
              mb={5}
              className={classes.textSm}
            >
              {item.createdAt?.toLocaleDateString()}
            </Box>

            <Box color={statusColor[item.status]} fontWeight={Fonts.BOLD}>
              {statusFormatter[item.status]}
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ListItem;

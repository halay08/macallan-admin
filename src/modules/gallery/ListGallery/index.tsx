import React, { useContext, useEffect, useState } from 'react';
import AppsHeader from '../../../@crema/core/AppsContainer/AppsHeader';
import GalleryListHeader from './Header';
import { useDispatch, useSelector } from 'react-redux';
import AppsContent from '../../../@crema/core/AppsContainer/AppsContent';
import { Box, fade } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { AppContext } from '../../../@crema';
import { AppState } from 'redux/store';
import { IArtworkEntity } from '../types';
import ProductGrid from './ProductGrid';
import { ArtworkService } from 'services';
import { fetchError, fetchStart, fetchSuccess } from 'redux/actions';
import { DEFAULT_ERROR } from 'shared/constants/constants';
import { useLoadMore } from 'hooks';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > div': {
      width: '100%'
    }
  }
}));

const limit = 12;

const ListGallery = () => {
  const classes = useStyles();
  const { theme } = useContext(AppContext);
  const { loading } = useSelector<AppState, AppState['common']>(
    ({ common }) => common
  );
  const dispatch = useDispatch();
  const [galleries, setGalleries] = useState<IArtworkEntity[]>([]);
  const [status, setStatus] = useState<string>('');
  const [order, setOrder] = useState<string>('desc');

  const getGallery = async (option?) => {
    try {
      dispatch(fetchStart());
      const service = new ArtworkService();
      const newGalleries = await service.getArtworks(option);
      dispatch(fetchSuccess());
      return newGalleries;
    } catch ({ message = DEFAULT_ERROR }) {
      dispatch(fetchError(message));
      return [];
    }
  };

  useEffect(() => {
    setGalleries([]);
    handleLoadMore('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, order]);

  const handleLoadMore = async lastDocumentId => {
    const newGalleries = await getGallery({
      status,
      limit,
      orderBy: [
        {
          field: 'createdAt',
          order
        }
      ],
      startAfter: lastDocumentId
    });
    handleAfterGet(newGalleries);
  };
  const [handleAfterGet] = useLoadMore(handleLoadMore, setGalleries);

  return (
    <>
      <AppsHeader>
        <GalleryListHeader
          setStatus={setStatus}
          status={status}
          order={order}
          setOrder={setOrder}
        />
      </AppsHeader>

      <AppsContent
        style={{ backgroundColor: fade(theme.palette.background.default, 0.6) }}
      >
        <Box className={classes.root} flex={1} display="flex" p={2} height={1}>
          <ProductGrid ecommerceList={galleries} loading={loading} />
        </Box>
      </AppsContent>
    </>
  );
};

export default ListGallery;

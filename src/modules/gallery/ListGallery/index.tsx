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

const ListGallery = () => {
  const classes = useStyles();
  const { theme } = useContext(AppContext);
  const { loading } = useSelector<AppState, AppState['common']>(
    ({ common }) => common
  );
  const dispatch = useDispatch();
  const [galleries, setGalleries] = useState<IArtworkEntity[]>([]);
  const [status, setStatus] = useState<string>();

  const getGallery = async (option?) => {
    try {
      dispatch(fetchStart());
      const service = new ArtworkService();
      const newGalleries = await service.getArtworks(option);
      dispatch(fetchSuccess());
      return newGalleries;
    } catch ({ message = DEFAULT_ERROR }) {
      dispatch(fetchError(message));
    }
  };

  useEffect(() => {
    setGalleries([]);

    (async () => {
      const newGalleries =
        !status || status === 'all'
          ? await getGallery()
          : await getGallery({ status });
      handleAfterGet(newGalleries);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const handleLoadMore = async lastDocumentId => {
    const newGalleries = await getGallery({
      status,
      startAfter: lastDocumentId
    });
    handleAfterGet(newGalleries);
  };
  const [handleAfterGet] = useLoadMore(handleLoadMore, setGalleries);

  return (
    <>
      <AppsHeader>
        <GalleryListHeader onChange={setStatus} />
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

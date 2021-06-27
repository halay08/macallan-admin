import React, { useEffect, useState } from 'react';
import AppCard from '../../../@crema/core/AppCard';
import ProductView from './ProductView';
import AppAnimate from '../../../@crema/core/AppAnimate';
import GridContainer from '../../../@crema/core/GridContainer';
import { IArtworkEntity } from '../types';
import { useParams } from 'react-router-dom';
import { ArtworkService } from 'services';
import { Grid } from '@material-ui/core';
import { getFirebaseImageLink } from 'shared/ultis';
import { ActionButton } from './ActionButton';
import { useDispatch } from 'react-redux';
import { fetchError, fetchStart, fetchSuccess } from 'redux/actions';

const GalleryDetail = props => {
  const { id } = useParams<any>();
  const [currentGallery, setCurrentGallery] = useState<IArtworkEntity>();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const service = new ArtworkService();
      const gallery = await service.getArtworkById(id);
      setCurrentGallery(gallery);
    })();
  }, [id]);

  const onApprove = async () => {
    try {
      dispatch(fetchStart());
      const service = new ArtworkService();
      const gallery = await service.approveArtwork(id);
      setCurrentGallery(gallery);
      dispatch(fetchSuccess());
    } catch ({ message = DEFAULT_ERROR }) {
      dispatch(fetchError(message));
    }
  };

  const onReject = async () => {
    try {
      dispatch(fetchStart());
      const service = new ArtworkService();
      const gallery = await service.rejectArtwork(id);
      setCurrentGallery(gallery);
      dispatch(fetchSuccess());
    } catch ({ message = DEFAULT_ERROR }) {
      dispatch(fetchError(message));
    }
  };

  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <AppCard>
        <GridContainer>
          <Grid item sm={12} md={4}>
            {currentGallery && (
              <>
                <img
                  src={getFirebaseImageLink(currentGallery.imgUrl)}
                  alt="gallery"
                />
                <ActionButton
                  onApprove={onApprove}
                  onReject={onReject}
                  status={currentGallery.status}
                />
              </>
            )}
          </Grid>
          {currentGallery && <ProductView item={currentGallery} />}
        </GridContainer>
      </AppCard>
    </AppAnimate>
  );
};

export default GalleryDetail;

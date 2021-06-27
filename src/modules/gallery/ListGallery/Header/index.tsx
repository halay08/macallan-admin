import React from 'react';
import { Box, Hidden } from '@material-ui/core';
import { Fonts } from '../../../../shared/constants/AppEnums';
import AppSelect from '@crema/core/AppSelect';
import { ICyoStatus } from '../types';

const selectValues = Object.values(ICyoStatus);

const GalleryListHeader = ({ onChange }) => {
  return (
    <Box display="flex" flex={1} alignItems="center">
      <Box display="flex" flex={1}>
        <Box fontWeight={Fonts.BOLD} mr={3}>
          Gallery
        </Box>
        <Hidden only="xs">
          <Box component="span">
            (Showing 1 – 40 products of 93,723 products)
          </Box>
        </Hidden>
      </Box>
      <Box display="flex" alignItems="center" mr={6}>
        <Box component="span" mb={1} fontWeight={Fonts.MEDIUM}>
          Status:
        </Box>
        <AppSelect
          menus={['all', ...selectValues]}
          defaultValue={'all'}
          onChange={onChange}
        />
      </Box>
    </Box>
  );
};

export default GalleryListHeader;

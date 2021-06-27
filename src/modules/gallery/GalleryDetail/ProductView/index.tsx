import React from 'react';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {
  IArtworkEntity,
  statusColor,
  statusFormatter
} from 'modules/gallery/types';
import { Fonts } from 'shared/constants/AppEnums';
import { firebaseTimestampToDate } from 'shared/ultis';
import { FormRow } from './FormRow';

type props = {
  item: IArtworkEntity;
};
const ProductView = ({ item }: props) => {
  return (
    <Grid item sm={12} md={8}>
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
        fontSize={14}
        borderRadius={8}
        width="fit-content"
      >
        {statusFormatter[item.status]}
      </Box>
      <Box component="h3" color="text.primary" fontSize={20} mb={1}>
        Contract Information
      </Box>
      {item.contact && (
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow label="Name: " value={item.contact.name} />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow label="Country: " value={item.contact.country} />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow label="Email: " value={item.contact.email} />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow label="Age: " value={item.contact.age} />
          </Grid>
        </Grid>
      )}
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <Box component="h3" color="text.primary" fontSize={20} mb={1}>
        Message
      </Box>
      <Box component="p" color="text.secondary">
        {item.message}
      </Box>
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <Box mb={3} mr={6} color="text.secondary">
        {firebaseTimestampToDate(item.createdAt).toLocaleDateString()}
      </Box>
    </Grid>
  );
};

export default ProductView;

import React from 'react';
import GridItem from './GridItem';
import AppGrid from '../../../../@crema/core/AppGrid';
import ListEmptyResult from '../../../../@crema/core/AppList/ListEmptyResult';
import { IArtworkEntity } from '../../types';

type props = {
  ecommerceList: Array<IArtworkEntity>;
  loading?: boolean;
};

const ProductGrid = ({ ecommerceList, loading }: props) => {
  return (
    <AppGrid
      delay={200}
      data={ecommerceList}
      renderRow={item => <GridItem item={item} key={item.id} />}
      ListEmptyComponent={
        <ListEmptyResult content="No product found" loading={loading} />
      }
    />
  );
};
export default ProductGrid;

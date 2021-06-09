import React, { CSSProperties } from 'react';
import GridView from './GridView';
import GridFooter from './GridFooter';

interface AppGridProps {
  footerProps?: any;
  column?: number;
  responsive?: any;
  itemPadding?: number;
  animation?: any;

  renderRow(item: any, index: number | null): any;

  onEndReached?(): void;

  data: any;
  containerStyle?: CSSProperties;
  border?: any;

  [x: string]: any;
}

const AppGrid: React.FC<AppGridProps> = ({
  footerProps,
  renderRow,
  loading = false,
  border = false,
  data = [],
  onEndReached = () => {},
  ...rest
}) => {
  return (
    <GridView
      renderRow={renderRow}
      onEndReached={onEndReached}
      data={data}
      {...rest}
      ListFooterComponent={
        footerProps ? (
          <GridFooter
            loading={footerProps.loading}
            footerText={footerProps.footerText}
          />
        ) : null
      }
    />
  );
};

export default AppGrid;

import React from 'react';
import ListView from './ListView';
import ListFooter from './ListFooter';

interface AppListProps {
  renderRow(item: any, index: number | null): any;

  onEndReached?(): void;

  border?: boolean;
  footerProps?: any;
  data: any[];

  [x: string]: any;
}

const AppList: React.FC<AppListProps> = ({
  footerProps,
  renderRow,
  onEndReached,
  data,
  border = false,
  ...props
}) => {
  return (
    <ListView
      renderRow={renderRow}
      onEndReached={onEndReached}
      data={data}
      {...props}
      ListFooterComponent={
        footerProps ? (
          <ListFooter
            loading={footerProps.loading}
            footerText={footerProps.footerText}
          />
        ) : null
      }
    />
  );
};

export default AppList;

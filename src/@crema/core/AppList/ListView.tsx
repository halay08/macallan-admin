import React, { CSSProperties } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { Box, useTheme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import AppAnimateGroup from '../AppAnimateGroup';

const getEmptyContainer = (ListEmptyComponent: any) => {
  if (ListEmptyComponent)
    return React.isValidElement(ListEmptyComponent) ? (
      ListEmptyComponent
    ) : (
      <ListEmptyComponent />
    );
  return null;
};

const getFooterContainer = (ListFooterComponent: any) => {
  if (ListFooterComponent)
    return React.isValidElement(ListFooterComponent) ? (
      ListFooterComponent
    ) : (
      <ListFooterComponent />
    );
  return null;
};

interface ListViewProps {
  renderRow(item: any, index: number | null): any;

  onEndReached?(): void;

  data: any[];
  delay?: number;
  duration?: number;
  containerStyle?: CSSProperties;
  border?: any;
  ListFooterComponent?: any;
  ListEmptyComponent?: any;
  ItemSeparatorComponent?: any;

  [x: string]: any;
}

const ListView: React.FC<ListViewProps> = ({
  renderRow,
  onEndReached = () => {},
  data,
  delay = 0,
  duration = 200,
  containerStyle,
  border = false,
  ListFooterComponent,
  ListEmptyComponent,
  ItemSeparatorComponent,
  ...rest
}) => {
  const theme = useTheme();
  const borderStyle = {
    border: `1px solid ${grey[300]}`,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    overflow: 'hidden'
  };

  if (!onEndReached) {
    onEndReached = () => {};
  }

  let style = containerStyle;
  if (border) {
    style = { ...style, ...borderStyle };
  }
  useBottomScrollListener(onEndReached, 200);
  return (
    <Box style={{ ...style }} {...rest} flex={1}>
      <AppAnimateGroup>
        {data.map((item: any, index: number) => (
          <Box key={'list-item-' + index}>{renderRow(item, index)}</Box>
        ))}
      </AppAnimateGroup>
      {data.length === 0 ? getEmptyContainer(ListEmptyComponent) : null}
      {getFooterContainer(ListFooterComponent)}
    </Box>
  );
};

export default ListView;

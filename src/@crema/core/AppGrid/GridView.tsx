import React, { CSSProperties, useEffect, useState } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { Box, makeStyles, useTheme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import AppAnimateGroup from '../AppAnimateGroup';
import { useWidth } from '../../utility/Utils';

const useStyles = makeStyles(() => ({
  gridContainer: {
    width: '100%'
  },
  columnRow: (props: { itemPadding: number; displayColumn: number }) => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: -props.itemPadding,
    marginRight: -props.itemPadding
  }),
  columnCount: (props: { itemPadding: number; displayColumn: number }) => ({
    flexGrow: 0,
    maxWidth: `${100 / props.displayColumn}%`,
    flexBasis: `${100 / props.displayColumn}%`,
    padding: props.itemPadding,
    boxSizing: 'border-box'
  })
}));

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

interface GridViewProps {
  column?: number;
  responsive?: any;
  itemPadding?: number;

  renderRow(item: any, index: number | null): any;

  onEndReached(): void;

  data: any;
  containerStyle?: CSSProperties;
  border?: boolean;
  ListFooterComponent?: any;
  ListEmptyComponent?: any;
  ItemSeparatorComponent?: any;
}

const GridView: React.FC<GridViewProps> = ({
  border = false,
  data = [],
  column = 3,
  itemPadding = 12,
  responsive,
  renderRow,
  onEndReached,
  containerStyle,
  ListFooterComponent,
  ListEmptyComponent,
  ItemSeparatorComponent,
  ...rest
}) => {
  const theme = useTheme();
  const width = useWidth();
  const borderStyle = {
    border: `1px solid ${grey[300]}`,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    overflow: 'hidden'
  };

  const [displayColumn, setColumn] = useState<number>(column);
  if (!onEndReached) {
    onEndReached = () => {};
  }

  useEffect(() => {
    setColumn(column);
  }, [column]);

  useEffect(() => {
    const getColumnCount = () => {
      if (responsive) {
        if (width === 'xs') {
          return responsive.xs || column;
        } else if (width === 'sm') {
          return responsive.sm || responsive.xs || column;
        } else if (width === 'md') {
          return responsive.md || responsive.sm || responsive.xs || column;
        } else if (width === 'lg') {
          return (
            responsive.lg ||
            responsive.md ||
            responsive.sm ||
            responsive.xs ||
            column
          );
        } else if (width === 'xl') {
          return (
            responsive.xl ||
            responsive.lg ||
            responsive.md ||
            responsive.sm ||
            responsive.xs ||
            column
          );
        }
      } else {
        return column;
      }
    };
    setColumn(getColumnCount());
  }, [width, column, responsive]);

  const classes = useStyles({ displayColumn, itemPadding });

  let style = containerStyle;
  if (border) {
    style = { ...style, ...borderStyle };
  }
  useBottomScrollListener(onEndReached, 200);
  return (
    <Box className={classes.gridContainer}>
      <Box className={classes.columnRow} style={{ ...style }} {...rest}>
        <AppAnimateGroup>
          {data.length > 0
            ? data.map((item: any, index: number) => (
                <Box key={'grid-' + index} className={classes.columnCount}>
                  {renderRow(item, index)}
                </Box>
              ))
            : null}
        </AppAnimateGroup>
      </Box>
      {data.length === 0 ? getEmptyContainer(ListEmptyComponent) : null}
      {getFooterContainer(ListFooterComponent)}
    </Box>
  );
};

export default GridView;

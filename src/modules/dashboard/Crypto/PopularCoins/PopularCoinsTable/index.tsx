import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import { makeStyles } from '@material-ui/core';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '../../../../../@crema/core/AppTableContainer';
import { PopularCoinsData } from '../../../../../types/models/dashboards/Crypto';

const useStyles = makeStyles(() => ({
  borderBottomClass: {
    borderBottom: '0 none'
  }
}));

interface PopularCoinsTableProps {
  popularCoins: PopularCoinsData[];
}

const PopularCoinsTable: React.FC<PopularCoinsTableProps> = ({
  popularCoins
}) => {
  const classes = useStyles();
  return (
    <AppTableContainer>
      <Table>
        <TableHead className={classes.borderBottomClass}>
          <TableHeading />
        </TableHead>
        <TableBody>
          {popularCoins.map(row => (
            <TableItem key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default PopularCoinsTable;

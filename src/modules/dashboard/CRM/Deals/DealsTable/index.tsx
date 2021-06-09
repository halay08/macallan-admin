import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import { makeStyles } from '@material-ui/core';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '../../../../../@crema/core/AppTableContainer';
import { DealsTableData } from '../../../../../types/models/dashboards/CRM';

const useStyles = makeStyles(theme => ({
  borderBottomClass: {
    borderBottom: '0 none'
  }
}));

interface DealsTableProps {
  dealsTableData: DealsTableData[];
}

const DealsTable: React.FC<DealsTableProps> = ({ dealsTableData }) => {
  const classes = useStyles();

  return (
    <AppTableContainer>
      <Table className="table">
        <TableHead className={classes.borderBottomClass}>
          <TableHeading />
        </TableHead>
        <TableBody className={classes.borderBottomClass}>
          {dealsTableData.map(row => (
            <TableItem row={row} key={row.id} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default DealsTable;

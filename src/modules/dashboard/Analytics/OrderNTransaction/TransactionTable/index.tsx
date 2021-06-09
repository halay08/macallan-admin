import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '../../../../../@crema/core/AppTableContainer';
import { TransactionData } from '../../../../../types/models/dashboards/Analytics';

interface Props {
  transactionData: TransactionData[];
}

const TransactionTable: React.FC<Props> = ({ transactionData }) => {
  return (
    <AppTableContainer>
      <Table className="table">
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {transactionData.map(data => (
            <TableItem data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default TransactionTable;

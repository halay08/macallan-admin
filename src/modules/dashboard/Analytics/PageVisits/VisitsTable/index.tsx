import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import { makeStyles } from '@material-ui/core';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import { isBreakPointDown } from '../../../../../@crema/utility/Utils';
import AppTableContainer from '../../../../../@crema/core/AppTableContainer';
import { PageVisit } from '../../../../../types/models/dashboards/Analytics';

interface Props {
  visitsData: PageVisit[];
}

const VisitsTable: React.FC<Props> = ({ visitsData }) => {
  const useStyles = makeStyles(theme => ({
    borderBottomClass: {
      borderBottom: '0 none'
    }
  }));
  const classes = useStyles();
  const getData = (data: PageVisit[]) => {
    if (isBreakPointDown('lg')) {
      return data.slice(0, 10);
    } else if (isBreakPointDown('xl')) {
      return data.slice(0, 11);
    } else {
      return data.slice(0, 11);
    }
  };

  return (
    <AppTableContainer>
      <Table className="table">
        <TableHead className={classes.borderBottomClass}>
          <TableHeading />
        </TableHead>
        <TableBody className={classes.borderBottomClass}>
          {getData(visitsData).map(data => (
            <TableItem data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default VisitsTable;

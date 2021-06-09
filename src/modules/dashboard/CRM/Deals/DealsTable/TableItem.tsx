import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { Box, makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import TableRow from '@material-ui/core/TableRow';
import clsx from 'clsx';
import { blue, green, red } from '@material-ui/core/colors';
import { Fonts } from '../../../../../shared/constants/AppEnums';
import { CremaTheme } from '../../../../../types/AppContextPropsType';
import { DealsTableData } from '../../../../../types/models/dashboards/CRM';

const getProgressColor = (progress: string) => {
  switch (progress) {
    case 'Pending':
      return `${red[600]}`;

    case 'Approved':
      return `${blue[600]}`;

    case 'Application':
      return `${green[600]}`;

    default:
      return `${red[600]}`;
  }
};
const useStyles = makeStyles((theme: CremaTheme) => ({
  borderBottomClass: {
    borderBottom: '0 none'
  },
  tableCell: {
    borderBottom: '0 none',
    fontSize: 13,
    padding: 8,
    '&:first-child': {
      paddingLeft: 20
    },
    '&:last-child': {
      paddingRight: 20
    }
  },
  tableCellColor: {
    color: (props: { progress: string }) =>
      `${getProgressColor(props.progress)}`
  }
}));

interface TableItemProps {
  row: DealsTableData;
}

const TableItem: React.FC<TableItemProps> = ({ row }) => {
  const classes = useStyles({ progress: row.progress });
  return (
    <TableRow
      key={row.name}
      className={clsx(classes.borderBottomClass, 'item-hover')}
    >
      <TableCell component="th" scope="row" className={classes.tableCell}>
        {row.id}.
      </TableCell>
      <TableCell align="left" className={classes.tableCell}>
        <Box display="flex" alignItems="center">
          {row.logo ? (
            <Avatar src={row.logo} />
          ) : (
            <Avatar>{row.name[0].toUpperCase()}</Avatar>
          )}
          <Box component="span" ml={{ xs: 3, xl: 5 }} fontWeight={Fonts.BOLD}>
            {row.name}
          </Box>
        </Box>
      </TableCell>
      <TableCell
        align="left"
        className={clsx(classes.tableCell, classes.tableCellColor)}
      >
        <Box component="span" fontWeight={Fonts.REGULAR}>
          {row.progress}
        </Box>
      </TableCell>
      <TableCell align="left" className={classes.tableCell}>
        {row.type}
      </TableCell>
      <TableCell align="left" className={classes.tableCell}>
        {row.amount}
      </TableCell>
      <TableCell align="left" className={clsx(classes.tableCell)}>
        {row.created}
      </TableCell>
    </TableRow>
  );
};

export default TableItem;

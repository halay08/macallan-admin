import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Fonts } from '../../../../../shared/constants/AppEnums';
import { CremaTheme } from '../../../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => ({
  tableRowRoot: {
    borderBottom: '0 none',
    color: grey[500]
  },
  tableCellRoot: {
    borderBottom: '0 none',
    fontSize: 13,
    padding: 8,
    fontWeight: Fonts.BOLD,
    '&:first-child': {
      paddingLeft: 20
    },
    '&:last-child': {
      paddingRight: 20
    }
  }
}));

interface TableHeadingProps {}

const TableHeading: React.FC<TableHeadingProps> = () => {
  const classes = useStyles();
  return (
    <TableRow className={classes.tableRowRoot}>
      <TableCell className={classes.tableCellRoot}>
        <IntlMessages id="common.num" />
      </TableCell>
      <TableCell align="left" className={classes.tableCellRoot}>
        <IntlMessages id="common.name" />
      </TableCell>
      <TableCell align="left" className={classes.tableCellRoot}>
        <IntlMessages id="common.progress" />
      </TableCell>
      <TableCell align="left" className={classes.tableCellRoot}>
        <IntlMessages id="common.type" />
      </TableCell>
      <TableCell align="left" className={classes.tableCellRoot}>
        <IntlMessages id="common.amount" />
      </TableCell>
      <TableCell align="left" className={classes.tableCellRoot}>
        <IntlMessages id="common.created" />
      </TableCell>
    </TableRow>
  );
};

export default TableHeading;

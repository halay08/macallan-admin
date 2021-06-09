import { makeStyles } from '@material-ui/core';
import { CremaTheme } from '../../../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => ({
  tableCell: {
    fontSize: 13,
    padding: 8,
    whiteSpace: 'nowrap',
    '&:first-child': {
      paddingLeft: 20
    },
    '&:last-child': {
      paddingRight: 20
    }
  },
  whiteSpace: {
    whiteSpace: 'nowrap'
  },
  anchar: {
    color: theme.palette.primary.main,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    display: 'inline-block'
  },
  badgeRoot: {
    padding: '3px 10px',
    borderRadius: 4,
    display: 'inline-block'
  }
}));
export default useStyles;

import { blue, green, red } from '@material-ui/core/colors';
import { LabelObj } from '../../../../../types/models/apps/Contact';

const labelList: LabelObj[] = [
  { id: 311, name: 'Crema', alias: 'crema', color: red[500] },
  { id: 312, name: 'Personal', alias: 'personal', color: blue[500] },
  { id: 313, name: 'Work', alias: 'work', color: green[500] }
];
export default labelList;

import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppCard from '../../../../@crema/core/AppCard';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import AppTableContainer from '../../../../@crema/core/AppTableContainer';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import { useIntl } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import { StudentRankingData } from '../../../../types/models/dashboards/Academy';

const useStyles = makeStyles({
  iconButton: {
    height: 30,
    width: 30
  }
});

interface StudentRankingsProps {
  studentRankings: StudentRankingData[];
}
const StudentRankings: React.FC<StudentRankingsProps> = ({
  studentRankings
}) => {
  const classes = useStyles();
  const { messages } = useIntl();
  return (
    <AppCard
      height={1}
      title={messages['academy.studentRankings']}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      action={
        <IconButton className={classes.iconButton}>
          <MoreVertIcon />
        </IconButton>
      }
    >
      <AppTableContainer>
        <Table className="table">
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {studentRankings.map(data => (
              <TableItem data={data} key={data.id} />
            ))}
          </TableBody>
        </Table>
      </AppTableContainer>
    </AppCard>
  );
};

export default StudentRankings;

import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

interface AppsPaginationProps {
  count: number;
  page: number;
  rowsPerPage?: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void;
  className?: string;
}

const AppsPagination: React.FC<AppsPaginationProps> = ({
  count,
  page,
  onPageChange,
  rowsPerPage = 15,
  className = ''
}) => {
  return (
    <TablePagination
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      className={className}
      page={page}
      backIconButtonProps={{ 'aria-label': 'Previous Page' }}
      nextIconButtonProps={{ 'aria-label': 'Next Page' }}
      onChangePage={onPageChange}
      rowsPerPageOptions={[]}
    />
  );
};

export default AppsPagination;

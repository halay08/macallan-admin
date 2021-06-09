import React, { useState } from 'react';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import Tooltip from '@material-ui/core/Tooltip';
import IntlMessages from '../../utility/IntlMessages';
import ConfirmationDialog from '../ConfirmationDialog';

interface AppsDeleteIconProps {
  deleteAction: () => void;
  deleteTitle: string;
  className: string;
}

const AppsDeleteIcon: React.FC<AppsDeleteIconProps> = ({
  deleteAction,
  deleteTitle,
  className
}) => {
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  return (
    <>
      <Tooltip title={<IntlMessages id="common.trash" />}>
        <DeleteSharpIcon
          className={className}
          onClick={() => setDeleteDialogOpen(true)}
        />
      </Tooltip>
      {isDeleteDialogOpen ? (
        <ConfirmationDialog
          open={isDeleteDialogOpen}
          onDeny={setDeleteDialogOpen}
          onConfirm={deleteAction}
          title={deleteTitle}
          dialogTitle={<IntlMessages id="common.deleteItem" />}
        />
      ) : null}
    </>
  );
};

export default AppsDeleteIcon;

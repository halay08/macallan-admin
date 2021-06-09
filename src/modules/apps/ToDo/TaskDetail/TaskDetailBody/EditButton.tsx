import React from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import { Fonts } from '../../../../../shared/constants/AppEnums';

interface EditButtonProps {
  classes: any;
  action: (event: React.MouseEvent<HTMLElement>) => void;
  title: string;
}

const EditButton: React.FC<EditButtonProps> = ({ classes, action, title }) => {
  return (
    <Box
      px={4}
      py={2}
      component="span"
      bgcolor="red"
      color="primary.contrastText"
      fontWeight={Fonts.LIGHT}
      display="inline-block"
      className={clsx(classes.taskBtn, classes.pointer)}
      onClick={action}
    >
      {title}
    </Box>
  );
};

export default EditButton;

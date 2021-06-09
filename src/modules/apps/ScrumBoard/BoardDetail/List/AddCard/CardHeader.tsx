import React from 'react';
import Box from '@material-ui/core/Box';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import DeleteIcon from '@material-ui/icons/Delete';
import IntlMessages from '../../../../../../@crema/utility/IntlMessages';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Fonts } from '../../../../../../shared/constants/AppEnums';

const useStyles = makeStyles(() => ({
  iconRoot: {
    marginRight: 8,
    color: grey[600],
    cursor: 'pointer'
  },
  pointer: {
    cursor: 'pointer'
  }
}));

interface CardHeaderProps {
  onClickDeleteIcon: (event: React.MouseEvent<HTMLElement>) => void;
  onAddAttachments: (files: any[]) => void;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  onClickDeleteIcon,
  onAddAttachments
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      const files = acceptedFiles.map(file => {
        return {
          id: Math.floor(Math.random() * 10000),
          file,
          preview: URL.createObjectURL(file)
        };
      });
      onAddAttachments(files);
    }
  });

  const classes = useStyles();

  return (
    <Box
      pt={5}
      pb={3}
      px={{ xs: 3, lg: 5, xl: 7 }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box component="h5" px={3} fontWeight={Fonts.BOLD} fontSize={16}>
        <IntlMessages id="scrumboard.board" />
      </Box>
      <Box px={3} display="flex" alignItems="center">
        <Box {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <AttachFileIcon className={classes.iconRoot} />
        </Box>
        <Box onClick={onClickDeleteIcon}>
          <DeleteIcon className={classes.iconRoot} />
        </Box>
      </Box>
    </Box>
  );
};

export default CardHeader;

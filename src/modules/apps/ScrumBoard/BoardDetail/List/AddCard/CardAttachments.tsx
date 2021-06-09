import React from 'react';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../../../../@crema/utility/IntlMessages';
import moment from 'moment';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { Fonts } from '../../../../../../shared/constants/AppEnums';
import { AttachmentObj } from '../../../../../../types/models/apps/ScrumbBoard';

const useStyles = makeStyles(() => ({
  overflowHidden: {
    overflow: 'hidden'
  },
  febRoot: {
    width: '2.5rem',
    height: '2.5rem'
  }
}));

interface CardAttachmentsProps {
  attachments: AttachmentObj[];
  onDeleteAttachment: (id: number) => void;
}

const CardAttachments: React.FC<CardAttachmentsProps> = ({
  attachments,
  onDeleteAttachment
}) => {
  const classes = useStyles();
  return (
    <>
      {attachments && attachments.length > 0 ? (
        <>
          <Box mb={{ xs: 3, sm: 5 }}>
            <Box component="h4">
              <IntlMessages id="common.attachments" />
            </Box>
          </Box>

          {attachments.map(attachment => {
            const { file } = attachment;
            return (
              <Box key={attachment.id} display="flex" mb={3}>
                <Box
                  className={classes.overflowHidden}
                  height={120}
                  width={120}
                >
                  <img src={attachment.preview} alt="attachment" />
                </Box>

                <Box px={{ xs: 3, sm: 5 }} py={{ xs: 0, sm: 2 }}>
                  <Box color="primary.main" fontWeight={Fonts.LIGHT}>
                    {file.name}
                  </Box>
                  <Box my={1}>
                    <Box component="span" mr={1}>
                      {moment(file.lastModified).format('ll').split(',')[0]}
                    </Box>
                    <Box component="span" mr={1}>
                      <IntlMessages id="common.at" />
                    </Box>
                    <Box component="span">
                      {moment(file.lastModified).format('LT')}
                    </Box>
                  </Box>
                  <Fab color="secondary" className={classes.febRoot}>
                    <DeleteIcon
                      onClick={() => onDeleteAttachment(attachment.id)}
                    />
                  </Fab>
                </Box>
              </Box>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default CardAttachments;

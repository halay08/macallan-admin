import React from 'react';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import { useIntl } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import { Fonts } from '../../../../shared/constants/AppEnums';
import TextField from '@material-ui/core/TextField';
import { ContactObj } from '../../../../types/models/apps/Contact';

const useStyles = makeStyles(() => ({
  textareaAutosizeRoot: {
    width: '100%'
  }
}));

interface NotesProps {
  contact: ContactObj;
}

const Notes: React.FC<NotesProps> = ({ contact }) => {
  const { messages } = useIntl();

  const classes = useStyles();

  return (
    <Box pr={{ xs: 5, lg: 8, xl: 10 }} py={5}>
      <Box component="h6" m={2} fontWeight={Fonts.MEDIUM} fontSize={16}>
        <IntlMessages id="common.notes" />
      </Box>

      <TextField
        multiline
        className={classes.textareaAutosizeRoot}
        rows="4"
        placeholder={messages['common.notes'] as string}
        name="notes"
        value={contact.notes}
        variant="outlined"
        disabled
      />
    </Box>
  );
};

export default Notes;

import React, { useState } from 'react';
import { Form, Formik, useField } from 'formik';
import * as yup from 'yup';
import Scrollbar from '@crema/core/Scrollbar';
import { onComposeMail } from '../../../../redux/actions';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { useLocation } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import { useIntl } from 'react-intl';
import Box from '@material-ui/core/Box';
import { useAuthUser } from '../../../../@crema/utility/AppHooks';
import { InfoView } from '../../../../@crema';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import { grey, red } from '@material-ui/core/colors';
import { Fonts } from '../../../../shared/constants/AppEnums';
import WorkIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { CremaTheme } from '../../../../types/AppContextPropsType';
import { TransitionProps } from '@material-ui/core/transitions';

const useStyles = makeStyles((theme: CremaTheme) => ({
  dialogBox: {
    position: 'relative',
    '& .MuiDialog-paperWidthSm': {
      maxWidth: 600,
      width: '100%'
    },
    '& .MuiTypography-h6': {
      fontWeight: Fonts.LIGHT
    }
  },
  formRoot: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 20,
    [theme.breakpoints.up('xl')]: {}
  },
  fontBold: {
    fontWeight: Fonts.MEDIUM
  },
  pointer: {
    cursor: 'pointer'
  },
  textareaAutosizeRoot: {
    width: '100%',
    border: '0 none',
    fontWeight: Fonts.REGULAR,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary
  },
  btnRoot: {
    paddingLeft: 32,
    paddingRight: 32
  },
  scrollRoot: {
    height: 595
  }
}));
export const isValidEmail = (value: string) => {
  return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyTextField = (props: any) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

interface ComposeMailProps {
  isComposeMail: boolean;
  onCloseComposeMail: () => void;
}

const ComposeMail: React.FC<ComposeMailProps> = ({
  isComposeMail,
  onCloseComposeMail
}) => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const [isShowBcc, onShowBcc] = useState(false);

  const [isShowCC, onShowCC] = useState(false);

  const [isShowChip, onShowChip] = useState(false);

  const handleBlur = (to: string) => {
    if (to !== '') {
      onShowChip(true);
    }
  };

  const user = useAuthUser();

  const { messages } = useIntl();

  const classes = useStyles();
  const validationSchema = yup.object({
    to: yup
      .string()
      .email(messages['validation.emailFormat'] as string)
      .required(messages['validation.emailRequired'] as string),
    cc: yup.string().email(messages['validation.emailFormat'] as string),
    bcc: yup.string().email(messages['validation.emailFormat'] as string)
  });

  return (
    <Dialog
      open={isComposeMail}
      onClose={() => onCloseComposeMail()}
      aria-labelledby="simple-modal-title"
      TransitionComponent={Transition}
      aria-describedby="simple-modal-description"
      className={classes.dialogBox}
    >
      <Box
        py={6}
        px={8}
        display="flex"
        flexDirection="row"
        alignItems="center"
        borderBottom={`1px solid ${grey[300]}`}
      >
        <Box component="h5" mb={0} fontWeight={Fonts.LIGHT}>
          <IntlMessages id="mailApp.compose" />
        </Box>
      </Box>
      <Scrollbar className={classes.scrollRoot}>
        <Formik
          initialValues={{
            to: '',
            cc: '',
            bcc: '',
            subject: '',
            content: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            const mail = {
              id: Math.floor(Math.random()) * 1000,
              isChecked: false,
              isStarred: false,
              isReplied: false,
              label: {
                id: 211,
                name: 'Crema',
                alias: 'crema',
                color: red[500] as string,
                icon: <WorkIcon />
              },
              sentBy: user!.displayName ? user!.displayName : user!.email,
              isAttachment: false,
              isRead: true,
              folderValue: 122,
              sentAt: moment().format('llll'),
              senderMailId: user!.email,
              ...data,
              subject: data.subject === '' ? 'No Subject' : data.subject
            };
            dispatch(onComposeMail(mail, pathname));
            onCloseComposeMail();
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, values, handleChange }) => (
            <Form className={classes.formRoot} noValidate autoComplete="off">
              <Box px={8} flex={1}>
                <Box display="flex" alignItems="center">
                  {!isShowChip ? (
                    <MyTextField
                      fullWidth
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.fontBold}
                          >
                            To
                          </InputAdornment>
                        )
                      }}
                      name="to"
                      onBlur={() => handleBlur(values.to)}
                    />
                  ) : (
                    <Chip
                      label={values.to}
                      color={isValidEmail(values.to) ? 'default' : 'secondary'}
                      onDelete={() => onShowChip(false)}
                      variant="outlined"
                    />
                  )}

                  <Box
                    component="span"
                    ml={4}
                    className={classes.pointer}
                    onClick={() => onShowCC(!isShowCC)}
                  >
                    <IntlMessages id="common.cc" />
                  </Box>

                  <Box
                    component="span"
                    ml={4}
                    className={classes.pointer}
                    onClick={() => onShowBcc(!isShowBcc)}
                  >
                    <IntlMessages id="common.bcc" />
                  </Box>
                </Box>

                {isShowCC ? (
                  <Box width="1">
                    <MyTextField
                      placeholder={messages['common.cc']}
                      fullWidth
                      margin="normal"
                      name="cc"
                    />
                  </Box>
                ) : null}

                {isShowBcc ? (
                  <Box width="1">
                    <MyTextField
                      placeholder={messages['common.bcc']}
                      fullWidth
                      margin="normal"
                      name="bcc"
                    />
                  </Box>
                ) : null}
                <Box mb={3}>
                  <MyTextField
                    placeholder={messages['common.subject']}
                    fullWidth
                    margin="normal"
                    name="subject"
                  />
                </Box>

                <Box mb={3}>
                  <TextField
                    multiline
                    className={classes.textareaAutosizeRoot}
                    rows={15}
                    name="content"
                    placeholder={messages['common.writeContent'] as string}
                    value={values.content}
                    onChange={handleChange}
                  />
                </Box>
              </Box>

              <Box px={8} py={4} bgcolor="grey.300">
                <Button
                  className={classes.btnRoot}
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <IntlMessages id="common.send" />
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <InfoView />
      </Scrollbar>
    </Dialog>
  );
};

export default ComposeMail;

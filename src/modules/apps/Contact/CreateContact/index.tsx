import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Scrollbar } from '../../../../@crema';
import {
  onCreateContact,
  onUpdateSelectedContact
} from '../../../../redux/actions/ContactApp';
import Slide from '@material-ui/core/Slide';
import AddContactForm from './AddContactForm';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { makeStyles } from '@material-ui/core/styles/index';
import { ContactObj } from '../../../../types/models/apps/Contact';
import { TransitionProps } from '@material-ui/core/transitions';
import { useIntl } from 'react-intl';

const useStyles = makeStyles(() => ({
  dialogBox: {
    position: 'relative',
    '& .MuiDialog-paperWidthSm': {
      maxWidth: 600,
      width: '100%'
    },
    '& .MuiTypography-h6': {
      fontWeight: Fonts.LIGHT
    }
  }
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface CreateContactProps {
  isAddContact: boolean;
  handleAddContactClose: () => void;
  selectContact?: ContactObj | null;
  onUpdateContact?: (newContact: ContactObj) => void;
}

const CreateContact: React.FC<CreateContactProps> = ({
  isAddContact,
  handleAddContactClose,
  selectContact,
  onUpdateContact
}) => {
  const dispatch = useDispatch();

  const [userImage, setUserImage] = useState<string>(
    selectContact && selectContact.image
      ? selectContact.image
      : '/assets/images/placeholder.jpg'
  );

  const classes = useStyles();
  const { messages } = useIntl();
  const validationSchema = yup.object({
    name: yup.string().required(messages['validation.nameRequired'] as string),
    email: yup
      .string()
      .email(messages['validation.emailFormat'] as string)
      .required(messages['validation.emailRequired'] as string),
    contact: yup
      .string()
      .required(messages['validation.phoneNumberRequired'] as string)
  });

  return (
    <Dialog
      open={isAddContact}
      onClose={() => handleAddContactClose()}
      aria-labelledby="simple-modal-title"
      TransitionComponent={Transition}
      aria-describedby="simple-modal-description"
      className={classes.dialogBox}
    >
      <Scrollbar>
        <Formik
          validateOnChange={true}
          initialValues={{
            name: selectContact ? selectContact.name : '',
            email: selectContact ? selectContact.email : '',
            contact: selectContact ? selectContact.contact : '',
            birthday:
              selectContact && selectContact.birthday
                ? selectContact.birthday
                : null,
            website:
              selectContact && selectContact.website
                ? selectContact.website
                : '',
            company:
              selectContact && selectContact.company
                ? selectContact.company
                : '',
            address:
              selectContact && selectContact.address
                ? selectContact.address
                : '',
            facebookId:
              selectContact && selectContact.facebookId
                ? selectContact.facebookId
                : '',
            twitterId:
              selectContact && selectContact.twitterId
                ? selectContact.twitterId
                : '',
            notes:
              selectContact && selectContact.notes ? selectContact.notes : '',
            label:
              selectContact && selectContact.label ? selectContact.label : ''
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            if (selectContact) {
              const newContact = {
                id: selectContact.id,
                isStarred: selectContact.isStarred,
                isFrequent: selectContact.isFrequent,
                image: userImage,
                ...data
              };
              dispatch(onUpdateSelectedContact(newContact as ContactObj));
              onUpdateContact!(newContact as ContactObj);
            } else {
              const newContact = {
                id: Math.floor(Math.random() * 1000),
                isStarred: false,
                isFrequent: Math.random() > 0.5,
                image: userImage,
                ...data
              };
              dispatch(onCreateContact(newContact as ContactObj));
            }
            handleAddContactClose();
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ values, setFieldValue }) => (
            <AddContactForm
              setUserImage={setUserImage}
              userImage={userImage}
              values={values as ContactObj}
              setFieldValue={setFieldValue}
              handleAddContactClose={handleAddContactClose}
            />
          )}
        </Formik>
      </Scrollbar>
    </Dialog>
  );
};

export default CreateContact;

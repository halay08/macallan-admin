import React from 'react';
import Box from '@material-ui/core/Box';
import { KeyboardDatePicker } from '@material-ui/pickers';
import IntlMessages from '../../../../../../@crema/utility/IntlMessages';
import { Form, useField } from 'formik';
import GridContainer from '../../../../../../@crema/core/GridContainer';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import CardAttachments from './CardAttachments';
import CardCheckedList from './CardCheckedList';
import CardComments from './CardComments';
import Button from '@material-ui/core/Button';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Fonts } from '../../../../../../shared/constants/AppEnums';
import { AppState } from '../../../../../../redux/store';
import {
  AttachmentObj,
  BoardObj,
  CardListObj,
  CardObj,
  CheckedListObj,
  LabelObj,
  MemberObj
} from '../../../../../../types/models/apps/ScrumbBoard';
import { CremaTheme } from '../../../../../../types/AppContextPropsType';
import { AuthUser } from '../../../../../../types/models/AuthUser';

const useStyles = makeStyles((theme: CremaTheme) => ({
  root: {
    width: '100%'
  },
  myTextFieldRoot: {
    width: '100%',
    marginBottom: 20
  },
  fieldRoot: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary
  },
  btnRoot: {
    paddingLeft: 32,
    paddingRight: 32
  },
  dividerRoot: {
    marginBottom: 32,
    marginLeft: -32,
    marginRight: -32
  },
  marginBottom12: {
    marginBottom: 12
  }
}));

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

interface AddCardFormProps {
  board: BoardObj;
  list: CardListObj;
  checkedList: any;
  setCheckedList: (checkList: CheckedListObj[]) => void;
  comments: any[];
  values: any;
  setFieldValue: (name: string, value: any) => void;
  setComments: (comments: any[]) => void;
  authUser: AuthUser | null;
  attachments: AttachmentObj[];
  setAttachments: (attachments: AttachmentObj[]) => void;
  selectedLabels: LabelObj[];
  setSelectedLabels: (lables: LabelObj[]) => void;
  selectedMembers: MemberObj[];
  setMembersList: (menmbers: MemberObj[]) => void;
  selectedCard: CardObj | null;
  onCloseAddCard: () => void;
  isSubmitting: boolean;
}

const AddCardForm: React.FC<AddCardFormProps> = ({
  board,
  list,
  values,
  setFieldValue,
  checkedList,
  setCheckedList,
  comments,
  setComments,
  authUser,
  attachments,
  setAttachments,
  selectedLabels,
  setSelectedLabels,
  selectedMembers,
  setMembersList,
  selectedCard,
  onCloseAddCard,
  isSubmitting
}) => {
  const { messages } = useIntl();

  const {
    labelList,
    memberList
  }: { labelList: LabelObj[]; memberList: MemberObj[] } = useSelector<
    AppState,
    AppState['scrumboardApp']
  >(({ scrumboardApp }) => scrumboardApp);

  const onDeleteCheckedItem = (id: number) => {
    const updatedList = checkedList.filter(
      (item: CheckedListObj) => item.id !== id
    );
    setCheckedList(updatedList);
  };

  const onAddNewCheckedItem = () => {
    const item = {
      id: Math.floor(Math.random() * 1000),
      title: ''
    };
    const updatedList = checkedList.concat(item);
    setCheckedList(updatedList);
  };

  const onSetCheckedItemText = (title: string, id: number) => {
    const updatedList = checkedList.map((item: CheckedListObj) => {
      if (item.id === id) {
        item.title = title;
        return item;
      } else {
        return item;
      }
    });
    setCheckedList(updatedList);
  };

  const onAddNewComment = (comment: string) => {
    setComments(
      comments.concat({
        comment: comment,
        name: authUser!.displayName ? authUser!.displayName : 'User',
        image: authUser!.photoURL,
        date: moment().format('ll')
      })
    );
  };

  const onDeleteAttachment = (id: number) => {
    const updatedAttachments = attachments.filter(
      (attachment: AttachmentObj) => attachment.id !== id
    );
    setAttachments(updatedAttachments);
  };

  const classes = useStyles();

  return (
    <Form className={classes.root} noValidate autoComplete="off">
      <Divider />
      <Box
        pt={4}
        px={{ xs: 5, lg: 8, xl: 10 }}
        pb={5}
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ sm: 'center' }}
      >
        <Box
          mr={{ sm: 2 }}
          mb={{ xs: 3, sm: 0 }}
          fontWeight={Fonts.MEDIUM}
          fontSize={16}
        >
          {board.name} {'>'} {list.name}
        </Box>

        <Box ml={{ sm: 'auto' }}>
          <KeyboardDatePicker
            autoOk
            format="YYYY/MM/DD"
            inputVariant="outlined"
            label={<IntlMessages id="common.date" />}
            name="date"
            value={values.date}
            onChange={value => setFieldValue('date', value)}
          />
        </Box>
      </Box>

      <Box pb={5} px={{ xs: 5, lg: 8, xl: 10 }}>
        <MyTextField
          className={classes.myTextFieldRoot}
          variant="outlined"
          label={<IntlMessages id="common.title" />}
          name="title"
        />

        <MyTextField
          name="desc"
          multiline
          className={classes.fieldRoot}
          rows="6"
          variant="outlined"
          placeholder={messages['common.description']}
        />

        <GridContainer className={classes.marginBottom12}>
          <Grid item xs={12} md={6}>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={labelList}
              getOptionLabel={option => option.name}
              value={selectedLabels}
              onChange={(event, value) => setSelectedLabels(value)}
              filterSelectedOptions
              renderInput={params => (
                <TextField
                  {...params}
                  variant="outlined"
                  label={<IntlMessages id="common.label" />}
                  fullWidth
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={memberList}
              getOptionLabel={option => option.name}
              value={selectedMembers}
              onChange={(event, value) => setMembersList(value)}
              renderOption={option => (
                <React.Fragment>
                  {option.image ? (
                    <Avatar src={option.image} />
                  ) : (
                    <Avatar>{option.name.toUpperCase()}</Avatar>
                  )}
                  <Box ml={4}>{option.name}</Box>
                </React.Fragment>
              )}
              filterSelectedOptions
              renderInput={params => (
                <TextField
                  {...params}
                  variant="outlined"
                  label={<IntlMessages id="common.members" />}
                  fullWidth
                />
              )}
            />
          </Grid>
        </GridContainer>

        <CardAttachments
          attachments={attachments}
          onDeleteAttachment={onDeleteAttachment}
        />

        {selectedCard ? (
          <CardCheckedList
            onAddNewCheckedItem={onAddNewCheckedItem}
            checkedList={checkedList}
            onDeleteCheckedItem={onDeleteCheckedItem}
            onSetCheckedItemText={onSetCheckedItemText}
          />
        ) : null}

        <Divider className={classes.dividerRoot} />

        <CardComments comments={comments} onAddNewComment={onAddNewComment} />
      </Box>
      <Box px={8} py={4} bgcolor="grey.300">
        <Button
          className={classes.btnRoot}
          color="secondary"
          variant="contained"
          disabled={isSubmitting}
          type="submit"
        >
          <IntlMessages id="common.done" />
        </Button>
        <Button
          className={classes.btnRoot}
          color="secondary"
          onClick={onCloseAddCard}
        >
          <IntlMessages id="common.cancel" />
        </Button>
      </Box>
    </Form>
  );
};

export default AddCardForm;

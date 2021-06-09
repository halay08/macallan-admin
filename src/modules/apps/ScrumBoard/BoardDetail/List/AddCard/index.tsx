import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Scrollbar } from '../../../../../../@crema';
import {
  onAddNewCard,
  onDeleteSelectedCard,
  onEditCardDetails
} from '../../../../../../redux/actions';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import ConfirmationDialog from '../../../../../../@crema/core/ConfirmationDialog';
import { useAuthUser } from '../../../../../../@crema/utility/AppHooks';
import IntlMessages from '../../../../../../@crema/utility/IntlMessages';
import CardHeader from './CardHeader';
import AddCardForm from './AddCardForm';
import { makeStyles } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import { useIntl } from 'react-intl';
import {
  AttachmentObj,
  BoardObj,
  CardListObj,
  CardObj,
  CheckedListObj,
  LabelObj,
  MemberObj
} from '../../../../../../types/models/apps/ScrumbBoard';

const useStyles = makeStyles(() => ({
  dialogBox: {
    position: 'relative',
    '& .MuiDialog-paperWidthSm': {
      maxWidth: 900,
      width: '100%'
    }
  },
  scrollRoot: {
    height: 595
  }
}));
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AddCardProps {
  isAddCardOpen: boolean;
  onCloseAddCard: () => void;
  board: BoardObj;
  list: CardListObj;
  selectedCard: CardObj | null;
}

const AddCard: React.FC<AddCardProps> = ({
  isAddCardOpen,
  onCloseAddCard,
  board,
  list,
  selectedCard
}) => {
  const dispatch = useDispatch();

  const user = useAuthUser();

  const [checkedList, setCheckedList] = useState<CheckedListObj[]>(() =>
    selectedCard ? selectedCard.checkedList : []
  );

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);

  const [selectedMembers, setMembersList] = useState<MemberObj[]>(() =>
    selectedCard ? selectedCard.members : []
  );

  const [selectedLabels, setSelectedLabels] = useState<LabelObj[]>(() =>
    selectedCard ? selectedCard.label : []
  );

  const [comments, setComments] = useState<any[]>(() =>
    selectedCard ? selectedCard.comments : []
  );

  const [attachments, setAttachments] = useState<AttachmentObj[]>(() =>
    selectedCard ? selectedCard.attachments : []
  );

  const onAddAttachments = (files: any) => {
    setAttachments([...attachments, ...files]);
  };

  const onDeleteCard = () => {
    const boardId = board.id;
    const listId = list.id;
    const cardId = selectedCard!.id;
    dispatch(onDeleteSelectedCard(boardId, listId, cardId));
    setDeleteDialogOpen(false);
    onCloseAddCard();
  };

  const onClickDeleteIcon = () => {
    if (selectedCard) {
      setDeleteDialogOpen(true);
    } else {
      onCloseAddCard();
    }
  };

  const classes = useStyles();

  const { messages } = useIntl();

  const validationSchema = yup.object({
    title: yup.string().required(messages['validation.titleRequired'] as string)
  });

  return (
    <Dialog
      open={isAddCardOpen}
      onClose={() => onCloseAddCard()}
      aria-labelledby="simple-modal-title"
      TransitionComponent={Transition}
      aria-describedby="simple-modal-description"
      className={classes.dialogBox}
    >
      <Scrollbar className={classes.scrollRoot}>
        <Formik
          validateOnChange={true}
          initialValues={{
            title: selectedCard ? selectedCard.title : '',
            desc: selectedCard && selectedCard.desc ? selectedCard.desc : '',
            label: selectedCard && selectedCard.label ? selectedCard.label : [],
            members:
              selectedCard && selectedCard.members ? selectedCard.members : [],
            date: selectedCard && selectedCard.date ? selectedCard.date : null
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            if (selectedCard) {
              const editedCard = {
                ...selectedCard,
                comments: comments,
                ...data,
                attachments: attachments,
                members: selectedMembers,
                label: selectedLabels,
                checkedList: checkedList.filter(
                  (item: CheckedListObj) => item.title !== ''
                )
              };
              dispatch(onEditCardDetails(board, list, editedCard));
            } else {
              const newCard = {
                id: Math.floor(Math.random() * 1000),
                attachments: attachments,
                checkedList: [],
                comments: comments,
                ...data,
                label: selectedLabels,
                members: selectedMembers
              };
              dispatch(onAddNewCard(board, list, newCard));
            }
            onCloseAddCard();
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ values, isSubmitting, setFieldValue }) => (
            <>
              <CardHeader
                onAddAttachments={onAddAttachments}
                onClickDeleteIcon={onClickDeleteIcon}
              />

              <AddCardForm
                values={values}
                isSubmitting={isSubmitting}
                setFieldValue={setFieldValue}
                board={board}
                list={list}
                checkedList={checkedList}
                onCloseAddCard={onCloseAddCard}
                setCheckedList={setCheckedList}
                comments={comments}
                setComments={setComments}
                authUser={user}
                attachments={attachments}
                setAttachments={setAttachments}
                selectedLabels={selectedLabels}
                setSelectedLabels={setSelectedLabels}
                selectedMembers={selectedMembers}
                setMembersList={setMembersList}
                selectedCard={selectedCard}
              />
            </>
          )}
        </Formik>
      </Scrollbar>

      {isDeleteDialogOpen ? (
        <ConfirmationDialog
          open={isDeleteDialogOpen}
          onDeny={setDeleteDialogOpen}
          onConfirm={onDeleteCard}
          title={<IntlMessages id="scrumboard.deleteCard" />}
          dialogTitle={<IntlMessages id="common.deleteItem" />}
        />
      ) : null}
    </Dialog>
  );
};

export default AddCard;

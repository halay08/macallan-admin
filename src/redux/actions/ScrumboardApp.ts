import Api from '../../@crema/services/ApiConfig';
import { appIntl } from '../../@crema/utility/Utils';
import { Dispatch } from 'redux';
import { AppActions } from '../../types';
import { fetchError, fetchStart, fetchSuccess, showMessage } from './Common';
import {
  ADD_BOARD_LIST,
  ADD_LIST_CARD,
  ADD_NEW_BOARD,
  DELETE_BOARD,
  DELETE_LIST,
  DELETE_LIST_CARD,
  EDIT_BOARD_DETAIL,
  EDIT_LIST_CARD,
  GET_BOARD_DETAIL,
  GET_BOARDS,
  GET_MEMBER_LIST,
  GET_SCRUM_LABEL_LIST
} from '../../types/actions/Scrumboard.actions';
import {
  BoardObj,
  CardListObj,
  CardObj
} from '../../types/models/apps/ScrumbBoard';

export const onGetBoardList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/api/scrumboard/board/list')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_BOARDS, payload: data.data });
        } else {
          dispatch(
            fetchError(messages['message.somethingWentWrong'] as string)
          );
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onGetScrumLabelList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/api/scrumboard/label/list')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_SCRUM_LABEL_LIST, payload: data.data });
        } else {
          dispatch(
            fetchError(messages['message.somethingWentWrong'] as string)
          );
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onGetMemberList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/api/scrumboard/member/list')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_MEMBER_LIST, payload: data.data });
        } else {
          dispatch(
            fetchError(messages['message.somethingWentWrong'] as string)
          );
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onEditBoardDetail = (board: BoardObj) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.put('/api/scrumboard/edit/board', { board })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: EDIT_BOARD_DETAIL, payload: data.data });
          dispatch(showMessage(messages['scrumBoard.boardEdited'] as string));
        } else {
          dispatch(
            fetchError(messages['message.somethingWentWrong'] as string)
          );
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onGetBoardDetail = (id: number) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/api/scrumboard/board/', {
      params: {
        id: id
      }
    })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_BOARD_DETAIL, payload: data.data });
        } else {
          dispatch(
            fetchError(messages['message.somethingWentWrong'] as string)
          );
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onAddNewBoard = (board: BoardObj) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.post('/api/scrumboard/add/board', { board })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: ADD_NEW_BOARD, payload: data.data });
          dispatch(showMessage(messages['scrumBoard.boardAdded'] as string));
        } else {
          dispatch(
            fetchError(messages['message.somethingWentWrong'] as string)
          );
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onAddNewList = (boardId: number, list: CardListObj) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.post('/api/scrumboard/add/list', { boardId, list })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: ADD_BOARD_LIST, payload: data.data });
          dispatch(showMessage(messages['scrumBoard.listAdded'] as string));
        } else {
          dispatch(
            fetchError(messages['message.somethingWentWrong'] as string)
          );
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onEditBoardList = (boardId: number, list: CardListObj) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.put('/api/scrumboard/edit/list', { boardId, list })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch(showMessage(messages['scrumBoard.listEdited'] as string));
        } else {
          dispatch(
            fetchError(messages['message.somethingWentWrong'] as string)
          );
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onAddNewCard = (
  board: BoardObj,
  list: CardListObj,
  card: CardObj
) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.post('/api/scrumboard/add/card', { board, list, card })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: ADD_LIST_CARD, payload: data.data });
          dispatch(showMessage(messages['scrumBoard.cardAdded'] as string));
        } else {
          dispatch(
            fetchError(messages['message.somethingWentWrong'] as string)
          );
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onEditCardDetails = (
  board: BoardObj,
  list: CardListObj,
  card: CardObj
) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.put('/api/scrumboard/edit/card', { board, list, card })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: EDIT_LIST_CARD, payload: data.data });
          dispatch(showMessage(messages['scrumBoard.cardEdited'] as string));
        } else {
          dispatch(
            fetchError(messages['message.somethingWentWrong'] as string)
          );
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onDeleteSelectedCard = (
  boardId: number,
  listId: number,
  cardId: number
) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.post('/api/scrumboard/delete/card', { boardId, listId, cardId })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: DELETE_LIST_CARD, payload: data.data });
          dispatch(showMessage(messages['scrumBoard.cardDeleted'] as string));
        } else {
          dispatch(
            fetchError(messages['message.somethingWentWrong'] as string)
          );
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onDeleteSelectedBoard = (boardId: number) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.post('/api/scrumboard/delete/board', { boardId })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: DELETE_BOARD, payload: data.data });
        } else {
          dispatch(
            fetchError(messages['message.somethingWentWrong'] as string)
          );
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onDeleteSelectedList = (boardId: number, listId: number) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.post('/api/scrumboard/delete/list', { boardId, listId })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: DELETE_LIST, payload: data.data });
          dispatch(showMessage(messages['scrumBoard.listDeleted'] as string));
        } else {
          dispatch(
            fetchError(messages['message.somethingWentWrong'] as string)
          );
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onNullifyBoardDetail = () => {
  return {
    type: GET_BOARD_DETAIL,
    payload: null
  };
};

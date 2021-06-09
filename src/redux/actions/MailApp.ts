import Api from '../../@crema/services/ApiConfig';
import { mailListMessages } from '../../@crema/services/db/apps/mail/folderList';
import { appIntl } from '../../@crema/utility/Utils';
import { Dispatch } from 'redux';
import { AppActions } from '../../types';
import { fetchError, fetchStart, fetchSuccess, showMessage } from './Common';
import {
  CHANGE_READ_STATUS,
  COMPOSE_MAIL,
  GET_CONNECTION_LIST,
  GET_FOLDER_LIST,
  GET_LABEL_LIST,
  GET_MAIL_DETAIL,
  GET_MAIL_LIST,
  NULLIFY_MAIL,
  TOGGLE_MAIL_DRAWER,
  UPDATE_MAIL_FOLDER,
  UPDATE_MAIL_LABEL,
  UPDATE_STARRED_STATUS,
  UPDATED_MAIL_DETAIL
} from '../../types/actions/Mail.action';
import { MailObj } from '../../types/models/apps/Mail';

export const onGetMailList = (
  type: string,
  name: string,
  currentPage: number
) => {
  const { messages } = appIntl();
  const page = currentPage ? currentPage : null;
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/api/mailApp/folder/mail/List', {
      params: {
        type: type,
        name: name,
        page: page
      }
    })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_MAIL_LIST, payload: data.data });
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

export const onGetLabelList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/api/mailApp/labels/list')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_LABEL_LIST, payload: data.data });
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

export const onToggleMailDrawer = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch({ type: TOGGLE_MAIL_DRAWER });
  };
};

export const onGetFolderList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/api/mailApp/folders/list')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_FOLDER_LIST, payload: data.data });
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

export const onGetConnectionList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/api/mailApp/connection/list')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_CONNECTION_LIST, payload: data.data });
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

export const onUpdateMailLabels = (mailIds: number[], type: number) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.put('/api/mailApp/update/label', { mailIds, type })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: UPDATE_MAIL_LABEL, payload: data.data });
          dispatch(showMessage(messages['message.labelUpdatedTo'] as string));
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

export const onUpdateStarredStatus = (
  mailIds: number[],
  status: boolean,
  folderName: string
) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.put('/api/mailApp/update/starred', { mailIds, status })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({
            type: UPDATE_STARRED_STATUS,
            payload: { data: data.data, folderName: folderName }
          });
          dispatch(showMessage(messages['message.starredStatus'] as string));
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

export const onUpdateMailFolders = (mailIds: number[], type: number) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.put('/api/mailApp/update/folder', { mailIds, type })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: UPDATE_MAIL_FOLDER, payload: data.data });
          dispatch(showMessage(mailListMessages(type)));
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

export const onUpdateReadStatus = (mailIds: number[], status: boolean) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.put('/api/mailApp/update/read', { mailIds, status })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: CHANGE_READ_STATUS, payload: data.data });
          dispatch(showMessage(messages['message.readStatus'] as string));
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

export const onGetSelectedMail = (id: number) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get(`/api/mailApp/mail/`, {
      params: {
        id: id
      }
    })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_MAIL_DETAIL, payload: data.data });
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

export const onUpdateSelectedMail = (mail: MailObj) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.put('/api/mailApp/mail/', { mail })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: UPDATED_MAIL_DETAIL, payload: data.data });
          dispatch(showMessage(mailListMessages(mail.folderValue) as string));
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

export const onComposeMail = (mail: any, pathname: string) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.post('/api/mailApp/compose', { mail })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({
            type: COMPOSE_MAIL,
            payload: { data: data.data, pathname: pathname }
          });
          dispatch(showMessage(messages['mail.sentSuccessfully'] as string));
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

export const onNullifyMail = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch({
      type: NULLIFY_MAIL
    });
  };
};

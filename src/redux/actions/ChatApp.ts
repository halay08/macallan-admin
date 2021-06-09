import Api from '../../@crema/services/ApiConfig';
import { appIntl } from '../../@crema/utility/Utils';
import { Dispatch } from 'redux';
import { AppActions } from '../../types';
import { fetchError, fetchStart, fetchSuccess } from './Common';
import {
  ADD_NEW_MESSAGE,
  DELETE_MESSAGE,
  DELETE_USER_MESSAGES,
  EDIT_MESSAGE,
  GET_CONNECTIONS_LIST,
  GET_USER_MESSAGES,
  SELECT_USER
} from '../../types/actions/Chat.actions';
import { ConnectionObj, MessageDataObj } from '../../types/models/apps/Chat';

export const getConnectionList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/api/chatApp/connections')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_CONNECTIONS_LIST, payload: data.data });
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

export const getConnectionMessages = (id: number) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/api/chatApp/connection/messages', {
      params: {
        id
      }
    })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_USER_MESSAGES, payload: data.data });
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

export const onSendMessage = (channelId: number, message: MessageDataObj) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>, getState: any) => {
    Api.post('/api/chatApp/message', { channelId, message })
      .then(data => {
        console.log('data', data.data);
        if (data.status === 200) {
          dispatch(fetchSuccess());
          if (
            data.data.userMessages &&
            data.data.userMessages.messageData.length === 1 &&
            getState().chatApp.userMessages &&
            getState().chatApp.userMessages.messageData
          ) {
            console.log(
              'getState().chatApp.userMessages.messageData',
              getState().chatApp.userMessages.messageData
            );
            dispatch({
              type: ADD_NEW_MESSAGE,
              payload: {
                data: data.data /*{
                  ...data.data,
                  userMessages: {
                    ...data.userMessages,
                    messageData: getState().chatApp.userMessages.messageData.concat(
                      data.data.userMessages.messageData,
                    ),
                  },
                }*/
              }
            });
            console.log(getState().chatApp.userMessages);
          } else {
            dispatch({
              type: ADD_NEW_MESSAGE,
              payload: { data: data.data }
            });
          }
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

export const onEditMessage = (channelId: number, message: MessageDataObj) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    Api.put('/api/chatApp/message', { channelId, message })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({
            type: EDIT_MESSAGE,
            payload: { data: data.data }
          });
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

export const onDeleteMessage = (channelId: number, messageId: number) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    Api.post('/api/chatApp/delete/message', { channelId, messageId })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: DELETE_MESSAGE, payload: data.data });
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

export const onDeleteConversation = (channelId: number) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.post('/api/chatApp/delete/user/messages', { channelId })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: DELETE_USER_MESSAGES, payload: data.data });
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

export const onSelectUser = (user: ConnectionObj) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch({ type: SELECT_USER, payload: user });
  };
};

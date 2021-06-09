import Api from '../../@crema/services/ApiConfig';
import { Dispatch } from 'redux';
import { AppActions } from '../../types';
import { fetchError, fetchStart, fetchSuccess } from './Common';
import {
  CREATE_NEW_POST,
  GET_FEED_POSTS,
  GET_WALL_DATA,
  UPDATE_POST
} from '../../types/actions/Wall.actions';
import { appIntl } from '../../@crema/utility/Utils';
import { CommentObj, PostObj } from '../../types/models/apps/Wall';

export const onGetWallData = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/wall')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_WALL_DATA, payload: data.data });
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

export const onGetPostsList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/wall/posts')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_FEED_POSTS, payload: data.data });
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

export const onCreateNewPost = (post: PostObj) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.post('/wall/posts', { post })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: CREATE_NEW_POST, payload: data.data });
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

export const onUpdatePostStatus = (postId: number, status: boolean) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.put('/wall/posts', { postId, status })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({
            type: UPDATE_POST,
            payload: data.data
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

export const onAddNewComment = (postId: number, comment: CommentObj) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.post('/wall/posts/comments', { postId, comment })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: UPDATE_POST, payload: data.data });
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

import Api from '../../@crema/services/ApiConfig';
import { Dispatch } from 'redux';
import { AppActions } from '../../types';
import { fetchError, fetchStart, fetchSuccess } from './Common';
import { appIntl } from '../../@crema/utility/Utils';
import { GET_USER_LIST } from '../../types/actions/UserList.actions';

export const onGetUserList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/api/user/list')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_USER_LIST, payload: data.data });
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

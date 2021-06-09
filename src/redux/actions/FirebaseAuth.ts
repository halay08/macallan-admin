import { auth } from 'config';
import { UPDATE_AUTH_USER } from '../../types/actions/Auth.actions';
import { AuthType } from '../../shared/constants/AppEnums';
import { defaultUser } from '../../shared/constants/AppConst';
import { AppActions } from '../../types';
import { Dispatch } from 'redux';
import { AuthUser } from '../../types/models/AuthUser';
import { fetchError, fetchStart, fetchSuccess } from './Common';

const getUserObject = (authUser: any): AuthUser => {
  return {
    authType: AuthType.FIREBASE,
    role: defaultUser.role,
    uid: authUser.uid,
    displayName: authUser.displayName,
    email: authUser.email,
    photoURL: authUser.photoURL,
    token: authUser.refreshToken
  };
};

export const onSignInFirebaseUser = (email: string, password: string) => {
  return (dispatch: Dispatch<AppActions>) => {
    try {
      dispatch(fetchStart());
      auth
        .signInWithEmailAndPassword(email, password)
        .then(data => {
          dispatch(fetchSuccess());
          dispatch({
            type: UPDATE_AUTH_USER,
            payload: getUserObject(data)
          });
        })
        .catch(({ message }) => {
          dispatch(fetchError(message));
        });
    } catch ({ message }) {
      dispatch(fetchError(message as string));
    }
  };
};

export const onSignOutFirebaseUser = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    try {
      auth
        .signOut()
        .then(data => {
          dispatch(fetchSuccess());
          dispatch({ type: UPDATE_AUTH_USER, payload: null });
        })
        .catch(error => {
          dispatch(fetchError(error.message));
        });
    } catch ({ message }) {
      dispatch(fetchError(message as string));
    }
  };
};

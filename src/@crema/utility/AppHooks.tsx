import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { auth as firebaseAuth } from 'config';
import { AuthType } from '../../shared/constants/AppEnums';
import { defaultUser } from '../../shared/constants/AppConst';
import { AppState } from '../../redux/store';
import { UPDATE_AUTH_USER } from '../../types/actions/Auth.actions';
import { AuthUser } from '../../types/models/AuthUser';

export const useAuthToken = (): [boolean, AuthUser | null] => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { user } = useSelector<AppState, AppState['auth']>(({ auth }) => auth);

  useEffect(() => {
    const firebaseCheck = () =>
      new Promise(resolve => {
        firebaseAuth.onAuthStateChanged(authUser => {
          if (authUser) {
            dispatch({
              type: UPDATE_AUTH_USER,
              payload: {
                authType: AuthType.FIREBASE,
                uid: authUser.uid,
                displayName: authUser.displayName,
                email: authUser.email,
                role: defaultUser.role,
                photoURL: authUser.photoURL,
                token: authUser.refreshToken
              }
            });
          }
          resolve({});
        });
        return Promise.resolve();
      });

    const checkAuth = () => {
      firebaseCheck().then(() => {
        setLoading(false);
      });
    };
    checkAuth();
  }, [dispatch]);

  return [loading, user];
};

export const useAuthUser = (): AuthUser | null => {
  const { user } = useSelector<AppState, AppState['auth']>(({ auth }) => auth);
  if (user) {
    return user;
  }
  return null;
};

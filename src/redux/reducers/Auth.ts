import { AppActions } from '../../types';
import {
  SET_AUTH_TOKEN,
  SIGNOUT_AUTH_SUCCESS,
  UPDATE_AUTH_USER
} from '../../types/actions/Auth.actions';
import { AuthUser } from '../../types/models/AuthUser';

const INIT_STATE: { user: AuthUser | null; token: string | null } = {
  user: null,
  token: null
};

const Auth = (state = INIT_STATE, action: AppActions) => {
  switch (action.type) {
    case UPDATE_AUTH_USER: {
      return {
        ...state,
        user: action.payload
      };
    }
    case SIGNOUT_AUTH_SUCCESS: {
      return {
        ...state,
        user: null
      };
    }
    case SET_AUTH_TOKEN: {
      return {
        ...state,
        token: action.payload
      };
    }
    default:
      return state;
  }
};
export default Auth;

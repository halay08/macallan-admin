import Api from '../../@crema/services/ApiConfig';
import { fetchError, fetchStart, fetchSuccess } from './Common';
import { AppActions } from '../../types';
import { Dispatch } from 'redux';
import {
  GET_ACADEMY_DATA,
  GET_ANALYTICS_DATA,
  GET_CRM_DATA,
  GET_CRYPTO_DATA,
  GET_HEALTH_CARE_DATA,
  GET_METRICS_DATA,
  GET_WIDGETS_DATA
} from '../../types/actions/Dashboard.action';

export const onGetAcademyData = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/dashboard/academy')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_ACADEMY_DATA, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong, Please try again!'));
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};
export const onGetHCData = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/dashboard/health_care')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_HEALTH_CARE_DATA, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong, Please try again!'));
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onGetAnalyticsData = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/dashboard/analytics')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_ANALYTICS_DATA, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong, Please try again!'));
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onGetCrmData = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/dashboard/crm')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_CRM_DATA, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong, Please try again!'));
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onGetCryptoData = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/dashboard/crypto')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_CRYPTO_DATA, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong, Please try again!'));
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onGetMetricsData = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/dashboard/metrics')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_METRICS_DATA, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong, Please try again!'));
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onGetWidgetsData = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Api.get('/dashboard/widgets')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_WIDGETS_DATA, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong, Please try again!'));
        }
      })
      .catch(error => {
        dispatch(fetchError(error.message));
      });
  };
};

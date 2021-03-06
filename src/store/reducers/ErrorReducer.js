import produce from 'immer';
import {
  GLOBAL_ERROR_SET,
} from '../actionTypes/ErrorActionTypes';

const initialState = {
  globalError: {}
};

const errorReducer = (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case GLOBAL_ERROR_SET:
        draft.globalError = action.payload;
        break;
      default:
        break;
    }
  });

export default errorReducer;
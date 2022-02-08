import * as actions from '../actions/postActions';

export const initialState = {
  post: {},
  errors: false,
  loading: true,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POST:
      return { ...state, loading: true };
    case actions.GET_POST_OK:
      return { ...state, post: action.payload, loading: false, errors: false };
    case actions.GET_POST_ERROR:
      return { ...state, loading: false, errors: true };
    default:
      return state;
  }
}
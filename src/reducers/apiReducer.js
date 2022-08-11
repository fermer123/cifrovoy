const SET_API = 'SET_API';

const initialState = {
  items: [],
  isFetching: true,
};

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_API: {
      return {
        ...state,
        items: action.payload,
      };
    }
    default:
      return state;
  }
}
export const setApi = (resp) => ({ type: SET_API, payload: resp });

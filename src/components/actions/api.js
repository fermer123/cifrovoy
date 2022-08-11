import axios from 'axios';
import { setApi } from '../../reducers/apiReducer';

export const getApi = () => {
  return async (dispatch) => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch(setApi(resp.data));
  };
};

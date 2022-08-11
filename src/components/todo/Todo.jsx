import style from './Todo.module.scss';
import '../../css/style.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getApi } from '../actions/api';
import Elem from '../element/Elem';

const Todo = () => {
  const dispatch = useDispatch();
  const resp = useSelector((state) => state.api.items);

  useEffect(() => {
    dispatch(getApi());
  }, []);

  return (
    <div className='wrapper'>
      <div className={style.todo}>
        {resp.map(({ title, completed, id }) => (
          <Elem key={id} title={title} completed={completed} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Todo;

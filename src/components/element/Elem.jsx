import style from './Elem.module.scss';
import '../../css/style.scss';
import React from 'react';

const Elem = ({ title, completed, id }) => {
  return (
    <div className={style.elem}>
      <div className={style.id}>{id}</div>
      <div className={style.title}>{title}</div>
      <div className={style.completed}>
        {completed ? 'Завершено' : 'В работе'}
      </div>
    </div>
  );
};

export default Elem;

import React from 'react';
import './TodoTemplate.scss';
import { MdCheckBox } from 'react-icons/md';
const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">
        <h1>
          <MdCheckBox />할 일 목록
        </h1>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;

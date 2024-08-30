import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="todoListWrap">
      <div className="todoList borderRight">
        <span>할 일</span>
        {todos
          .filter((todo) => todo.position === 1)
          .map((todo) => (
            <TodoListItem
              todo={todo}
              key={todo.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))}
      </div>

      <div className="todoList borderRight">
        <span>진행중</span>
        {todos
          .filter((todo) => todo.position === 2)
          .map((todo) => (
            <TodoListItem
              todo={todo}
              key={todo.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))}
      </div>

      <div className="todoList">
        <span>완료</span>
        {todos
          .filter((todo) => todo.position === 3)
          .map((todo) => (
            <TodoListItem
              todo={todo}
              key={todo.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;

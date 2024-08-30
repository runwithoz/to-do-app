import { React, useState, useRef, useCallback, useEffect } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

import TodoTemplate from './components/TodoTemplate';
import TodoControlPanel from './components/TodoControlPanel';

function App() {
  /* 
    position 1: 할 일
    position 2: 진행중
    position 3: 완료
  */
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '강아지 밥 주기',
      checked: false,
      position: 1,
    },
    {
      id: 2,
      text: '분리수거 하기',
      checked: false,
      position: 2,
    },
    {
      id: 3,
      text: '일정관리 앱 만들어 보기',
      checked: false,
      position: 3,
    },
  ]);
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
        position: 1,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(() => {
    setTodos(todos.filter((todo) => todo.checked === false));
  }, [todos]);

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  const moveLeft = useCallback(() => {
    setTodos(
      todos.map((todo) =>
        todo.checked === true && todo.position > 1
          ? { ...todo, position: todo.position - 1 }
          : todo,
      ),
    );
  });

  const moveRight = useCallback(() => {
    setTodos(
      todos.map((todo) =>
        todo.checked === true && todo.position < 3
          ? { ...todo, position: todo.position + 1 }
          : todo,
      ),
    );
  });

  const onDeselect = useCallback(() => {
    setTodos(todos.map((todo) => ({ ...todo, checked: false })));
  }, [todos]);

  const onSelectAll = useCallback(() => {
    setTodos(todos.map((todo) => ({ ...todo, checked: true })));
  }, [todos]);

  const [isSelected, setIsSelected] = useState(true);
  useEffect(() => {
    setIsSelected(todos.some((todo) => todo.checked === true));
  }, [todos]); // This effect will run every time `todos` changes

  return (
    <TodoTemplate>
      <div className="wrapper">
        <TodoInsert onInsert={onInsert} />
        <TodoControlPanel
          onRemove={onRemove}
          moveLeft={moveLeft}
          moveRight={moveRight}
          onDeselect={onDeselect}
          onSelectAll={onSelectAll}
          isSelected={isSelected}
        />
      </div>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;

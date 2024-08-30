import React from 'react';
import './TodoControlPanel.scss';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';

const TodoControlPanel = ({
  onRemove,
  moveLeft,
  moveRight,
  onDeselect,
  onSelectAll,
  isSelected,
}) => {
  return (
    <div className="todoControlPanel">
      <button type="button" onClick={moveLeft}>
        <FaLongArrowAltLeft />
      </button>
      <button type="button" onClick={moveRight} className="mr-2rem">
        <FaLongArrowAltRight />
      </button>
      {isSelected ? (
        <button type="button" onClick={onDeselect}>
          선택해제
        </button>
      ) : (
        <button type="button" onClick={onSelectAll}>
          전체선택
        </button>
      )}
      <button type="button" onClick={onRemove} className="delete">
        삭제
      </button>
    </div>
  );
};

export default TodoControlPanel;

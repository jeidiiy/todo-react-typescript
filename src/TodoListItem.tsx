import React from 'react';
import './TodoListItem.css';

interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label
        className={todo.complete ? 'complete' : undefined}
        style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}
      >
        <input type="checkbox" checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  );
};

import React from 'react';
import './TodoListItem.css';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <li>
      <label
        className={todo.complete ? 'complete' : undefined}
        style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};

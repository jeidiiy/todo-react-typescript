type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: todo) => void;

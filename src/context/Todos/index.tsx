import React, { useState, useCallback, createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  id: string;
  description: string;
  concluded?: boolean;
  important?: boolean;
}

interface TodoContext {
  todos: Todo[];
  addTodo(todo: string): void;
  updateTodo(todo: Todo): void;
}

const TodoContext = createContext<TodoContext>({} as TodoContext);

export const TodoProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Todo[]>(() => {
    const todos = localStorage.getItem('@Todo:todos');
    if (todos) {
      return [...JSON.parse(todos)];
    }

    return [] as Todo[];
  });

  const updateLocalStorage = useCallback((newData: Todo[]): void => {
    localStorage.setItem('@Todo:todos', JSON.stringify(newData));
  }, []);

  const addTodo = useCallback(
    (todo: string) => {
      if (todo) {
        const newTodo: Todo = {
          id: uuidv4(),
          description: todo,
          concluded: false,
          important: false,
        };
        const newData = [...data, newTodo];
        setData(newData);
        updateLocalStorage(newData);
      }
      return false;
    },
    [data, updateLocalStorage],
  );

  const updateTodo = useCallback(
    todo => {
      const newData = [
        ...data.map(element => (element.id === todo.id ? todo : element)),
      ];
      setData(newData);
      updateLocalStorage(newData);
    },

    [data, updateLocalStorage],
  );

  return (
    <TodoContext.Provider value={{ todos: data, addTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = (): TodoContext => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useAuth precisa ser usando dentro de um AuthProvider.');
  }

  return context;
};

export default { TodoProvider, useTodos };

import React from 'react';
import { useTodos } from '../../context/Todos';

import { Container } from './styles';

import Todo from './Todo';
import TodoInput from './TodoInput';

const TodosList: React.FC = () => {
  const { todos } = useTodos();

  return (
    <Container>
      {todos.map(todo => (
        <Todo key={todo.id} data={todo} />
      ))}
      <TodoInput />
    </Container>
  );
};

export default TodosList;

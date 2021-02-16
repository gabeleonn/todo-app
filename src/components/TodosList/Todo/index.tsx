import React from 'react';

import { AiFillStar, AiOutlineStar, AiOutlineCheck } from 'react-icons/ai';

import { Todo as TodoType, useTodos } from '../../../context/Todos';

import { Container, CheckedIcon, StarIcon } from './styles';

interface TodoProps {
  data: TodoType;
}

const Todo: React.FC<TodoProps> = ({ data }) => {
  const { updateTodo } = useTodos();

  const handleConclusion = (): void => {
    updateTodo({ ...data, concluded: !data.concluded });
  };

  const handleImportancy = (): void => {
    updateTodo({ ...data, important: !data.important });
  };

  return (
    <Container>
      <CheckedIcon concluded={data.concluded} onClick={handleConclusion}>
        {data.concluded && <AiOutlineCheck />}
      </CheckedIcon>
      <p className={data.concluded ? 'concluded' : ''}>{data.description}</p>
      <StarIcon onClick={handleImportancy}>
        {data.important ? (
          <AiFillStar size="26" />
        ) : (
          <AiOutlineStar size="26" />
        )}
      </StarIcon>
    </Container>
  );
};

export default Todo;

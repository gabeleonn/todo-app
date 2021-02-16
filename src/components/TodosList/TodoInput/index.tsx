import React, { KeyboardEvent, useRef, useState } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import { Container } from './styles';
import { CheckedIcon } from '../Todo/styles';

import { useTodos } from '../../../context/Todos';

const TodoInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const { addTodo } = useTodos();

  const handleFocus = (): void => {
    setFocused(true);
  };

  const handleBlur = (): void => {
    setFocused(false);
  };

  const handleAdd = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <Container>
      {focused ? (
        <CheckedIcon concluded={false} />
      ) : (
        <>
          <AiOutlinePlus size="24" />
        </>
      )}

      <input
        type="text"
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        placeholder="Adicionar tarefa"
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleAdd}
      />
    </Container>
  );
};

export default TodoInput;

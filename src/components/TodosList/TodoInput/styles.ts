import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  margin-top: auto;

  display: flex;
  align-items: center;
  gap: 20px;
  height: 70px;

  background: #333;
  padding: 16px;
  border-radius: 4px;

  &:hover {
    background: ${() => lighten(0.1, '#333')};
    transition: all 0.2s;
    cursor: text;
  }

  svg {
    color: ${props => props.theme.color};
  }

  input {
    background: transparent;
    height: 100%;
    width: 100%;

    border: none;
    color: white;
    font-size: 16px;
  }
`;

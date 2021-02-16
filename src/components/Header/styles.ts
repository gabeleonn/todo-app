import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { HTMLAttributes } from 'react';

interface ThemeMenuProps extends HTMLAttributes<HTMLDivElement> {
  opened: boolean;
}

interface ColorProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${props => props.theme.color};
  }

  button {
    background: #333;
    color: ${props => props.theme.color};
    border: none;
    padding: 8px;
    border-radius: 5px;

    &:hover {
      background: ${() => lighten(0.2, '#333')};
    }
  }
`;

export const ThemeMenu = styled.div<ThemeMenuProps>`
  ${({ opened }) =>
    opened
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `};

  display: flex;
  justify-content: start;
  gap: 5px;

  position: absolute;
  right: 12%;

  background: #eee;
  padding: 8px 16px;
  border-radius: 5px;

  transition: all 0.2s;
  z-index: 100;
`;

export const Color = styled.span<ColorProps>`
  ${({ color }) =>
    !!color &&
    css`
      background: ${color};
    `};
  height: 15px;
  width: 15px;

  &:hover {
    cursor: pointer;
  }
`;

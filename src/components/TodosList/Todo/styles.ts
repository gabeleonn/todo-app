import styled, { css } from 'styled-components';

import { lighten } from 'polished';
import { HTMLAttributes } from 'react';

interface CheckedIconProps extends HTMLAttributes<HTMLDivElement> {
  concluded?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  background: #333;
  padding: 16px;
  border-radius: 4px;
  height: 70px;

  &:hover {
    background: ${() => lighten(0.1, '#333')};
    transition: all 0.2s;
    cursor: pointer;
    transform: scale(1.01);
  }

  .concluded {
    text-decoration: line-through;
  }
`;

export const CheckedIcon = styled.div<CheckedIconProps>`
  width: 30px;
  height: 30px;

  border-radius: 100px;
  border: 2px solid ${props => props.theme.color};
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #333;
  }

  ${({ concluded }) =>
    concluded &&
    css`
      background: ${props => props.theme.color};
    `}
`;

export const StarIcon = styled.div`
  margin-left: auto;
  color: ${props => props.theme.color};
`;

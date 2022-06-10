import styled, { css } from 'styled-components';

import type { ButtonProps } from './Button.types';

export const Button = styled.button<ButtonProps>`
  border: none;
  background: none;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    90% 100%,
    90% 90%,
    80% 90%,
    80% 100%,
    8% 100%,
    0 70%
  );
  position: relative;
  color: white;
  z-index: 10;
  text-transform: uppercase;
  font-weight: 700;

  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
  }

  &:after {
    background-color: ${({ theme }) => theme.palette.primary};
    left: -3px;
  }

  &:before {
    background-color: ${({ theme }) => theme.palette.secondary};
    left: 0;
  }

  ${({ theme, active }) =>
    active &&
    css`
      color: black;

      &:after {
        background-color: ${theme.palette.secondary};
      }
    `}
`;

import type { ReactElement } from 'react';
import React from 'react';

import { StyledButton } from './Button.styled';
import type { ButtonProps } from './Button.types';

export const Button = ({ children, ...rest }: ButtonProps): ReactElement => (
  <button {...rest} type="button">
    <>{children}_</>
  </button>
);

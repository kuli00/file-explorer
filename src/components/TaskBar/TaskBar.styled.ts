import {
  CloseOutline,
  ExpandOutline,
  EyeOffOutline,
} from '@styled-icons/evaicons-outline';
import {
  DoubleArrow,
  SubdirectoryArrowLeft,
} from '@styled-icons/material-sharp';
import BaseButton from 'Components/Button';
import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  width: 100vw;
  height: calc(${({ theme }) => theme.headerHeight} - 1px);
  border-bottom: 1px solid #0000003c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-app-region: drag;
  position: fixed;
  top: 0;
`;

export const Button = styled(BaseButton)`
  width: 50px;
  height: 30px;
  -webkit-app-region: no-drag;
`;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const FunctionButtons = styled(ButtonsContainer)`
  margin-left: 10px;
`;

export const SystemButtons = styled(ButtonsContainer)`
  margin-right: 10px;
`;

const iconStyle = css`
  width: 25px;
  height: 25px;
  color: white;
`;

export const BackIcon = styled(DoubleArrow)`
  ${iconStyle};
  transform: rotate(180deg);
`;

export const ForwardIcon = styled(DoubleArrow)`
  ${iconStyle}
`;

export const UpIcon = styled(SubdirectoryArrowLeft)`
  ${iconStyle};
  transform: rotate(-90deg) scaleX(-1);
`;

export const CloseIcon = styled(CloseOutline)`
  ${iconStyle};
`;
export const MaximizeIcon = styled(ExpandOutline)`
  ${iconStyle};
`;
export const MinimizeIcon = styled(EyeOffOutline)`
  ${iconStyle};
`;

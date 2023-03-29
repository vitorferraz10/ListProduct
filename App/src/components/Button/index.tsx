import { useState } from 'react';
import * as S from './styled'

type ButtonProps = {
  textContent: string
  isPressed?: boolean
  handleClick?: () => void
}

const Button = ({ textContent, isPressed, handleClick }: ButtonProps) => {
  return (
    <S.ButtonCustom isPressed={isPressed} onClick={handleClick}>
      {textContent}
    </S.ButtonCustom>
  );
};

export default Button
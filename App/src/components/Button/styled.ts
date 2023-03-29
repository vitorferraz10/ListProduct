import styled, { css } from 'styled-components'

export const ButtonCustom = styled.button<{isPressed?: boolean}>`
  background-color: #4caf50; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  margin: 0 auto;
  font-size: 16px;
  border-radius: 5px;
  width: 200px;

  cursor: pointer;
  text-transform: uppercase;

  &:hover{
    filter: brightness(0.8);
    transition: 0.4s;
  }

   ${({ isPressed }) => isPressed && css`
      filter: brightness(0.8);
   `}
`;
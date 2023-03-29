import styled from "styled-components";

export const FavButton = styled.button<{ isSelected: boolean }>`
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${({ isSelected }) => (!isSelected ? '#f5f5f5' : '#FF0000')};
  padding: 16px;
  position: relative;
  bottom: 470px;
  left: 230px;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
    transition: 0.4s;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;
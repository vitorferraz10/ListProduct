import styled from "styled-components";

export const ContainerList = styled.div`
  display: flex;
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    height: 100%;
  }
`;
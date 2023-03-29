import styled from "styled-components";

export const Card = styled.div`
  max-width: 300px;
  width: 100%;
  max-height: 500px;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  z-index: 1;
  padding: 20px;

 
`;

export const Image = styled.img`
width: 100%;
height: 50%;
`

export const TextProductDescription = styled.h3`
   font-size: 20px;
   text-align: start;
   font-weight: 700;
   margin-bottom: 12px;
   color: #222;
`

export const TextDiscount = styled.h4`
  font-size: 16px;
  text-align: start;
  font-weight: 700;
  margin-bottom: 6px;
  color: #a0a0a0;
   text-decoration: line-through;
`;

export const TextValueWithDiscount = styled.h4`
  font-size: 18px;
  text-align: start;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 0;
  color: #A50F34;
`;
export const TextInstallment = styled.h4`
  font-size: 14px;
  text-align: start;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 0;
  color: #a0a0a0;

  span {
    color: #000;
    font-weight: 700;
  }
`;

export const ButtonCard = styled.div`
   width: 100%;
   display: flex;

`
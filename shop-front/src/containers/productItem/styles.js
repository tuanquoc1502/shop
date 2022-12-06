import styled from "styled-components";

export const WrapperBox = styled.div`
  position: relative;
`;

export const WrapperImage = styled.div`
  width: 300px;
  height: 250px;
  background: #fafafa;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const IconDeleteProduct = styled.div`
  position: absolute;
  bottom: 30px;
  right: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

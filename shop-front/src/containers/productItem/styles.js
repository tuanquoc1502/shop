import styled from "styled-components";

export const WrapperBox = styled.div`
  position: relative;
`;

export const WrapperImage = styled.div`
  height: 300px;
  width: 350px;
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
  right: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

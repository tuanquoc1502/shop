import styled from '@emotion/styled';

export const WrapperHome = styled.div`
  margin-top: 50px;
`;

export const ProductList = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 22% 22% 22% 22%;
  gap: 30px;
`;

export const ProductItem = styled.div``;

export const PriceProduct = styled.div`
  color: #666;
  font-weight: 700;
  margin-top: 5px;
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 400px;
  background: #f6f6f6;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: contain;
`;

export const Description = styled.div`
  margin-top: 7px;
`;

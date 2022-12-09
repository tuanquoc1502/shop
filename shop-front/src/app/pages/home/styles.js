import styled from '@emotion/styled';

export const WrapperHome = styled.div`
  margin-top: 50px;
`;

export const ProductList = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 22% 22% 22% 22%;
  gap: 30px;

  @media only screen and (max-width: 730px) {
    grid-template-columns: 33% 33% 33%;
  }

  @media only screen and (max-width: 640px) {
    gap: 18px;
  }

  @media only screen and (max-width: 520px) {
    grid-template-columns: 45% 45%;
  }
`;

export const ProductItem = styled.div``;

export const PriceProduct = styled.div`
  color: #666;
  font-weight: 700;
  margin-top: 5px;

  @media only screen and (max-width: 785px) {
    font-size: 12px;
  }
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 340px;
  background: #f6f6f6;
  overflow: hidden;

  @media only screen and (max-width: 1400px) {
    height: 250px;
  }

  @media only screen and (max-width: 875px) {
    height: 180px;
  }

  @media only screen and (max-width: 785px) {
    height: 130px;
  }
`;

export const Image = styled.img`
  object-fit: contain;
`;

export const Description = styled.div`
  margin-top: 7px;

  @media only screen and (max-width: 785px) {
    font-size: 12px;
  }
`;

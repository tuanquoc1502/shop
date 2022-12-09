import styled from '@emotion/styled';

export const WrapperAdmin = styled.div`
  margin-top: 50px;

  .chakra-container {
    max-width: 1350px !important;
  }

  thead {
    tr {
      th {
        font-weight: 900 !important;
        font-size: 16px !important;
      }
    }
  }

  tbody {
    tr {
      td {
        font-size: 15px !important;
      }
    }
  }
`;

export const WrapperForm = styled.div`
  margin-top: 50px;

  .chakra-container {
    max-width: 1350px !important;
  }

  button {
    margin-top: 30px;
  }
`;

export const WrapperHeader = styled.div`
  display: flex;
  gap: 20px;
`;

export const LinkCreateProduct = styled.div`
  background: #3182ce;
  color: white;
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const BackHome = styled.div`
  background: #3182ce;
  color: white;
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const AmountProduct = styled.h1`
  display: flex;
  justify-content: flex-end;
  font-weight: 700;
  margin: 20px 50px 20px 0;
`;

export const WrapperListProduct = styled.div`
  margin-top: 50px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  gap: 10px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperImage = styled.div`
  width: 70px;
  height: 70px;
  overflow: hidden;
`;

export const InfoProduct = styled.div``;

export const WrapperBox = styled.div`
  margin-top: 30px;
`;

export const Image = styled.img`
  object-fit: contain;
`;

export const Description = styled.div``;

export const BoxImageUpload = styled.div`
  width: 250px;
  margin-top: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const PriceProduct = styled.div``;

export const WrapperIconEdit = styled.div`
  cursor: pointer;
  width: fit-content;
  padding: 3px;

  svg {
    font-size: 17px;
  }

  &:hover {
    svg {
      color: #3182ce;
    }
  }
`;

export const WrapperIconDelete = styled(WrapperIconEdit)``;

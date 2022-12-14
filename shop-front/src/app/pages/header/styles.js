import styled from '@emotion/styled';

export const WrapperHeader = styled.div`
  position: sticky;
  top: 0px;
  z-index: 100;
  background: white;
  border: 1px solid #adbccb42;
`;

export const WrapperColHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderColLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const WrapperLogo = styled.div`
  width: 35px;
`;

export const ImageLogo = styled.img``;

export const Name = styled.div`
  font-weight: 700;
`;

export const HeaderColRight = styled.div``;

export const ListMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-right: 150px;
`;

export const ItemMenu = styled.li`
  list-style: none;
  cursor: pointer;
  font-weight: 500;
`;

import styled from '@emotion/styled';

export const WrapperLayout = styled.div``;

export const BackgroundMain = styled.div`
  width: 100%;
  height: 690px;
  background-image: url('https://myphoto-q2.s3.ap-northeast-1.amazonaws.com/backgroundHeader.webp');

  background-size: auto;
  background-repeat: no-repeat;

  @media only screen and (max-width: 760px) {
    height: 300px;
  }

  @media only screen and (max-width: 360px) {
    height: 250px;
  }
`;

export const Body = styled.div`
  margin-bottom: 20px;
`;

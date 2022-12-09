import { Container } from '@chakra-ui/react';
import React from 'react';
import Header from '../header';
import { BackgroundMain, Body, WrapperLayout } from './styles';

const LayoutWrap = ({ children }) => {
  return (
    <WrapperLayout>
      <Header />

      <BackgroundMain />

      <Body>
        <Container maxW="container.xl">{children}</Container>
      </Body>
    </WrapperLayout>
  );
};

export default LayoutWrap;

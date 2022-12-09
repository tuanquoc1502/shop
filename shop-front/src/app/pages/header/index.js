import { Container } from '@chakra-ui/react';
import React from 'react';
import {
  HeaderColLeft,
  HeaderColRight,
  ImageLogo,
  ItemMenu,
  ListMenu,
  Name,
  WrapperColHeader,
  WrapperHeader,
  WrapperLogo,
} from './styles';
import Logo from '../../../assets/images/logo.png';

const LIST_MENU = ['Home', 'Category', 'Promo', 'About'];

const Header = () => {
  return (
    <WrapperHeader>
      <Container maxW="container.xl">
        <WrapperColHeader>
          <HeaderColLeft>
            <WrapperLogo>
              <ImageLogo src={Logo}></ImageLogo>
            </WrapperLogo>
            <Name>Endah n Reina</Name>
          </HeaderColLeft>

          <HeaderColRight>
            <ListMenu>
              {LIST_MENU.map((item, i) => (
                <ItemMenu key={i}>{item}</ItemMenu>
              ))}
            </ListMenu>
          </HeaderColRight>
        </WrapperColHeader>
      </Container>
    </WrapperHeader>
  );
};

export default Header;

import React, { useEffect } from 'react';
import {
  Description,
  Image,
  PriceProduct,
  ProductItem,
  ProductList,
  WrapperHome,
  WrapperImage,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getMainProduct } from '../../../redux/mainProduct/action';
import Loading from '../../components/loading';

const Home = () => {
  const dispatch = useDispatch();

  const { dataProduct, loading } = useSelector((state) => state.mainProduct);

  useEffect(() => {
    dispatch(getMainProduct());
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <WrapperHome>
      <ProductList>
        {dataProduct.map((item) => (
          <ProductItem key={item._id}>
            <WrapperImage>
              <Image src={item.image} alt="/" />
            </WrapperImage>
            <Description>{item.description}</Description>
            <PriceProduct>£{item.price}</PriceProduct>
          </ProductItem>
        ))}
      </ProductList>
    </WrapperHome>
  );
};

export default Home;

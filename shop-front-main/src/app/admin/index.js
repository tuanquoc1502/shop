import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { WrapperAdmin } from './styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postMainProduct } from '../../redux/mainProduct/action';

const Admin = () => {
  const [value, setValue] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });
  const [file, setFile] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = () => {
    navigate('/');
  };

  const postProduct = () => {
    const formData = new FormData();

    formData.append('name', value.name);
    formData.append('description', value.description);
    formData.append('price', value.price);
    formData.append('image', file[0]);

    dispatch(postMainProduct(formData, redirect));
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <Container maxW="container.xl">
      <WrapperAdmin>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={value.name}
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            value={value.description}
            name="description"
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            name="price"
            value={value.price}
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Image</FormLabel>
          <input
            type="file"
            name="image"
            onChange={(e) => setFile(e.target.files)}
          />
        </FormControl>
        <Button
          colorScheme="blue"
          variant="solid"
          onClick={() => postProduct()}
        >
          Create Product
        </Button>
      </WrapperAdmin>
    </Container>
  );
};

export default Admin;

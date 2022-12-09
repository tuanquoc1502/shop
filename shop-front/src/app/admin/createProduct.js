import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BoxImageUpload, WrapperForm } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  editMainProduct,
  getMainProductDetail,
  postMainProduct,
} from '../../redux/mainProduct/action';
import Loading from '../components/loading';

const CreateProduct = () => {
  const { dataProductDetail, loading } = useSelector(
    (state) => state.mainProduct
  );

  const [value, setValue] = useState({
    name: dataProductDetail?.name ?? '',
    description: dataProductDetail?.description ?? '',
    price: dataProductDetail?.price ?? '',
    image: dataProductDetail?.image ?? '',
  });
  const [file, setFile] = useState('');
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = () => {
    navigate('/admin/tuanquoc');
  };

  const postProduct = () => {
    const formData = new FormData();

    formData.append('name', value.name);
    formData.append('description', value.description);
    formData.append('price', value.price);
    formData.append('image', file[0]);
    if (id) {
      dispatch(editMainProduct(formData, id, redirect));
    } else {
      dispatch(postMainProduct(formData, redirect));
    }
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (id) {
      dispatch(getMainProductDetail(id));
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container maxW="container.xl">
      <WrapperForm>
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
          {file[0] && (
            <BoxImageUpload>
              <img src={URL.createObjectURL(file[0])} alt="/" />
            </BoxImageUpload>
          )}

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
          {id ? 'Edit Product' : 'Create Product'}
        </Button>
      </WrapperForm>
    </Container>
  );
};

export default CreateProduct;

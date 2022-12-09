import React, { useEffect } from 'react';
import {
  Container,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import {
  AmountProduct,
  BackHome,
  Image,
  LinkCreateProduct,
  WrapperAdmin,
  WrapperBox,
  WrapperHeader,
  WrapperIconDelete,
  WrapperIconEdit,
  WrapperImage,
} from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteMainProduct,
  getMainProduct,
} from '../../redux/mainProduct/action';
import Loading from '../components/loading';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { dataProduct, loading } = useSelector((state) => state.mainProduct);

  useEffect(() => {
    dispatch(getMainProduct());
  }, []);

  const handleDeleteProduct = (id) => {
    dispatch(deleteMainProduct(id));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <WrapperAdmin>
      <Container maxW="container.xl">
        <WrapperHeader>
          <Link to="/">
            <BackHome>Trang chủ</BackHome>
          </Link>

          <Link to="/admin/tuanquoc/create">
            <LinkCreateProduct>Tạo sản phẩm</LinkCreateProduct>
          </Link>
        </WrapperHeader>

        <AmountProduct>Tổng số sản phẩm: {dataProduct.length}</AmountProduct>

        <WrapperBox>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Images</Th>
                  <Th>Price ($)</Th>
                  <Th>Description</Th>
                  <Th>Edit</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              {dataProduct.map((item) => (
                <Tbody key={item._id}>
                  <Tr>
                    <Td>
                      <WrapperImage>
                        <Image src={`${item.image}`} />
                      </WrapperImage>
                    </Td>
                    <Td>{item.price}</Td>
                    <Td>{item.description}</Td>
                    <Td>
                      <WrapperIconEdit>
                        <EditIcon
                          onClick={() =>
                            navigate(`/admin/tuanquoc/edit/${item._id}`)
                          }
                        />
                      </WrapperIconEdit>
                    </Td>
                    <Td>
                      <WrapperIconDelete
                        onClick={() => handleDeleteProduct(item._id)}
                      >
                        <DeleteIcon color="red.400" />
                      </WrapperIconDelete>
                    </Td>
                  </Tr>
                </Tbody>
              ))}
            </Table>
          </TableContainer>
        </WrapperBox>
      </Container>
    </WrapperAdmin>
  );
};

export default Admin;

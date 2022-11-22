import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Delete,
  Description,
  Item,
  Name,
  Stt,
  WrapperContent,
  WrapperForm,
} from "../../styles";

const Products = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState();

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://35.78.76.41:5000/products")
      .then(function (res) {
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const postProduct = () => {
    axios
      .post("http://35.78.76.41:5000/products", {
        name,
        description,
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteProduct = (e, id) => {
    e.stopPropagation();

    axios
      .delete(`http://35.78.76.41:5000/products/${id}`)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <img
        src="https://images-product-q.s3.ap-northeast-1.amazonaws.com/tao-khung-anh-meo.png"
        alt="/test"
      />
      <WrapperForm>
        <div>
          Name <input onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          Description <input onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button onClick={postProduct}>Submit!!!</button>
      </WrapperForm>

      <WrapperContent>
        <div>{data.length}</div>
        {data.map((item, i) => (
          <Item key={i} onClick={() => navigate(`/detail/${item._id}`)}>
            <Stt>Stt: {item._id}</Stt>
            <Name>{item?.name}</Name>
            <Description>{item?.description}</Description>
            <Delete onClick={(e) => deleteProduct(e, item._id)}>X</Delete>
          </Item>
        ))}
      </WrapperContent>
    </div>
  );
};

export default Products;

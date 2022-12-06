import { Button, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "../productItem";
import { ButtonAdd, Wrapper, WrapperHome, WrapperProduct } from "./styles";
import { useNavigate } from "react-router-dom";
import { WrapperLoading } from "../loading/styles";
import Loading from "../loading";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.pre-develop.tech/products")
      .then(function (res) {
        setLoading(false);
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <ButtonAdd>
        <Stack direction="row" spacing={4}>
          <Button
            onClick={() => navigate("/add")}
            colorScheme="blue"
            variant="solid"
          >
            Create Product
          </Button>
          <Button colorScheme="blue" variant="outline">
            Setting
          </Button>
        </Stack>
      </ButtonAdd>
      <WrapperHome>
        <WrapperProduct>
          {data.length > 0 &&
            data.map((item, i) => (
              <div key={i}>
                <ProductItem item={item} />
              </div>
            ))}
        </WrapperProduct>
      </WrapperHome>
    </Wrapper>
  );
};

export default Home;

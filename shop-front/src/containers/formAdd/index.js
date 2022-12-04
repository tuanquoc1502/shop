import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Wrapper } from "./styles";

const FormAdd = () => {
  const [value, setValue] = useState({ name: "", description: "", price: 0 });
  const navigate = useNavigate();

  const postProduct = () => {
    axios
      .post("https://api.pre-develop.tech/products", value)
      .then(function (res) {
        console.log(res);
        navigate("/");
        toast.success("add successfully", { autoClose: 3000 });
      })
      .catch(function (error) {
        console.log(error);
        toast.success("add failure", { autoClose: 3000 });
      });
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" name="name" onChange={(e) => handleChange(e)} />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input
          type="text"
          name="description"
          onChange={(e) => handleChange(e)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <Input type="number" name="price" onChange={(e) => handleChange(e)} />
      </FormControl>
      <Button colorScheme="blue" variant="solid" onClick={() => postProduct()}>
        Add
      </Button>
    </Wrapper>
  );
};

export default FormAdd;

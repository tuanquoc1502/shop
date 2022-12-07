import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../loading";
import { Wrapper } from "./styles";

const FormAdd = () => {
  const [value, setValue] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  const postProduct = () => {
    const formData = new FormData();

    formData.append("name", value.name);
    formData.append("description", value.description);
    formData.append("price", value.price);
    formData.append("image", file[0]);

    if (id) {
      axios
        .path(`https://api.pre-develop.tech/products/${id}`, formData)
        .then(function (res) {
          console.log(res);
          navigate("/");
          toast.success("add successfully", { autoClose: 3000 });
        })
        .catch(function (error) {
          console.log(error);
          toast.error("add failure", { autoClose: 3000 });
        });
    } else {
      axios
        .post("https://api.pre-develop.tech/products", formData)
        .then(function (res) {
          console.log(res);
          navigate("/");
          toast.success("add successfully", { autoClose: 3000 });
        })
        .catch(function (error) {
          console.log(error);
          toast.error("add failure", { autoClose: 3000 });
        });
    }
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios
        .get(`https://api.pre-develop.tech/products/${id}`)
        .then(function (res) {
          console.log("quoc", res);
          setLoading(false);
          setValue({
            name: res.data.name,
            description: res.data.description,
            price: res.data.price,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
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
      <Button colorScheme="blue" variant="solid" onClick={() => postProduct()}>
        {id ? "Update Product" : "Create Product"}
      </Button>
    </Wrapper>
  );
};

export default FormAdd;

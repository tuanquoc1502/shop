import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { WrapperForm } from "../../styles";

const Detail = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`http://35.78.76.41:5000/products/${id}`)
      .then(function (res) {
        setName(res.data.name);
        setDescription(res.data.description);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const updateProduct = () => {
    axios
      .patch(`http://35.78.76.41:5000/products/${id}`, { name, description })
      .then((response) => {
        console.log("success");
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <WrapperForm>
      <div>
        Name
        <input value={name ?? ""} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        Description
        <input
          value={description ?? ""}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button onClick={updateProduct}>Submit!!!</button>
    </WrapperForm>
  );
};

export default Detail;

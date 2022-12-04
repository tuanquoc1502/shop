import React, { useEffect } from "react";
import { Badge, Box, Image, Toast } from "@chakra-ui/react";
import { CloseIcon, StarIcon } from "@chakra-ui/icons";
import { IconDeleteProduct, WrapperBox } from "./styles";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductItem = ({ item }) => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  const deleteProduct = (e, id) => {
    e.stopPropagation();

    axios
      .delete(`https://api.pre-develop.tech/products/${id}`)
      .then(function (res) {
        console.log(res);
        toast.success("delete successfully", { autoClose: 3000 });
      })
      .catch(function (error) {
        console.log(error);
        toast.success("delete failure", { autoClose: 3000 });
      });
  };

  return (
    <WrapperBox>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={property.imageUrl} alt={property.imageAlt} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {item.description}
          </Box>

          <Box>
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
        <IconDeleteProduct onClick={(e) => deleteProduct(e, item._id)}>
          <CloseIcon color="whiteAlpha.900" />
        </IconDeleteProduct>
      </Box>
    </WrapperBox>
  );
};

export default ProductItem;

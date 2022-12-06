import { Spinner } from "@chakra-ui/react";
import React from "react";
import { WrapperLoading } from "./styles";

const Loading = () => {
  return (
    <WrapperLoading>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </WrapperLoading>
  );
};

export default Loading;

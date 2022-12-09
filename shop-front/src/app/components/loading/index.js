import React from 'react';
import { Spinner } from '@chakra-ui/react';
import { WrapperLoading } from './styles';

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

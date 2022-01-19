import { Flex } from "@chakra-ui/react";
import React from "react";

const HSeparator = (props) => {
  const { variant, children, ...rest } = props;
  return <Flex h='1px' w='100%' bg='#F6AB3E' {...rest}></Flex>;
};

const VSeparator = (props) => {
  const { variant, children, ...rest } = props;
  return <Flex w='1px' bg='#F6AB3E' {...rest}></Flex>;
};

export { HSeparator, VSeparator };

import { Box } from "@chakra-ui/react";
import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import React from "react";
import { HomeHeader } from "components/head/head";
const Layout = (props) => {
  return (
    <Box overflowX='hidden' maxW='100%' bg='#02021E'>
      <Navbar />
      <HomeHeader/>

      {props.children}

      <Footer />
    </Box>
  );
};

export default Layout;

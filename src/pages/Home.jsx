import React, { useRef } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  Flex,
  Box,
  Image,
  Text,
  FormControl,
  Input,
  Icon,
  Grid,
  Button,
  Tag,
  Link,
} from "@chakra-ui/react";

// Custom Components
import Card from "components/card/Card";
import CardBody from "components/card/CardBody";
import ProductList from "components/products/ProductList";
import Countdown from "components/countdown/Countdown";
import { featuredProducts } from "variables/products";
import { latestProducts } from "variables/products";

// Icons
import {
  LeftButtonEffect,
  RightButtonEffect,
  SimmmpleLogoBundle,
  SearchIcon,
} from "components/icons/Icons";
import { MdKeyboardArrowRight } from "react-icons/md";

// Images
import homeBg from "assets/img/homepage/home-background.png";
import onHomeBg from "assets/img/homepage/on-home-background.png";
// import bundleBg from "assets/img/homepage/bundle-background.png";
import bundleBg from "assets/img/bundles/bf-background.png";
import googleLogo from "assets/img/homepage/google.png";
import msnLogo from "assets/img/homepage/msn.png";
import microsoftLogo from "assets/img/homepage/microsoft.png";
import zohoLogo from "assets/img/homepage/zoho.png";
import georgiatechLogo from "assets/img/homepage/georgiatech.png";
import deloitteLogo from "assets/img/homepage/deloitte.png";
import figmaLogo from "assets/img/homepage/figma2.png";
import vscodeLogo from "assets/img/homepage/vscode2.png";
import mailLogo from "assets/img/homepage/mail2.png";
import simmmpleButtonLogo from "assets/img/homepage/simmmple-button.png";
import articleImage1 from "assets/img/homepage/Article-1.png";
import articleImage2 from "assets/img/homepage/Article-2.png";
import articleImage3 from "assets/img/homepage/Article-3.png";

import Layout from "components/layout/Layout";
import { Helmet } from "react-helmet";
const Home = () => {
  const leftEffect = useRef();
  const rightEffect = useRef();
  const inputValue = useRef("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.current.value === "") {
      history.push("/search/  ");
    } else {
      const urlParameter = inputValue.current.value.split(" ").join("-");
      history.push(`/search/${urlParameter}`);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title itemprop='name'>Free and Premium Stunning UI Kits, Templates, Design Tools and Themes ready-to-use in HTML, CSS, JS, React, Bootstrap, NextJS, Figma & Sketch @ Simmmple</title>
      </Helmet>
      <Flex direction='column' bg='#14182C' maxW='100%' overflowX='hidden'>
        {/* Hero */}
        <Flex
          minH={{ base: "800px", md: "870px" }}
          bgSize='cover'
          bgPosition={{ base: "-46px 0px", md: "center" }}
          position='relative'>
          <Box
            position='absolute'
            right={{ xl: "-250px", "2xl": "-150px", "3xl": "0px" }}
            mt='70px'
            display={{ base: "none", lg: "none", xl: "block" }}>
          </Box>
          <Flex
            direction='column'
            w='1170px'
            maxW='100%'
            mx='auto'
            mt={{ base: "180px", md: "210px" }}
            px={{ base: "26px", xl: "0px" }}>
            <Flex direction='column' maxW='528px' mb='54px'>
              <Text
                fontSize='xs'
                color='#fff'
                fontWeight='bold'
                mb='16px'
                letterSpacing='2px'>
                BUILDING BETTER, BUILDING FASTER
              </Text>
              <Text
                fontSize={{ base: "27px", "2sm": "29px", md: "44px" }}
                color='#fff'
                fontWeight='500'
                letterSpacing='-1px'
                lineHeight={{ base: "40px", md: "56px" }}
                mb={{ base: "26px", md: "36px" }}>
                Premium Digital Solutions for developers, designers, agencies &
                startups
              </Text>
              <Text
                fontWeight='normal'
                fontSize='16px'
                lineHeight='28px'
                color='#fff'
                maxW='438px'>
                Join over{" "}
                <Text as='span' fontWeight='bold'>
                  10,000+ developers, designers & startups
                </Text>{" "}
                that use our digital solutions to quickly design and build
                responsive mobile-first websites and apps.
              </Text>
            </Flex>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <Flex
                  justify='space-between'
                  bg='transparent'
                  border='1.6px solid #d4d4d4'
                  borderRadius='70px'
                  w='470px'
                  maxW='100%'
                  h='70px'
                  p='22px 22px'
                  align='center'>
                  <Input
                    ref={inputValue}
                    placeholder='eg. Venus Design System'
                    boxShadow='none'
                    color='#d4d4d4'
                    border='none'
                    _focus={{ border: "none" }}
                    _placeholder={{ color: "#d4d4d4" }}
                  />
                  <Button
                    type='submit'
                    boxShadow='none'
                    bg='transparent'
                    _hover='none'
                    _active='none'
                    p='0px'>
                    <SearchIcon w='18px' h='18px' color='#d4d4d4' />
                  </Button>
                </Flex>
              </FormControl>
            </form>
          </Flex>
        </Flex>

        {/* Categories */}
        {/* Featured */}
        <Flex

        bg='rgba(255, 255, 255, 0)'
        backdropFilter='blur(42px)'
         py='100px' overflowX='hidden' px='20px'>
          <Flex direction='column' w='1170px' mx='auto'>
            <Flex justify='space-between' align='center' w='100%' mb='72px'>
              <Flex direction='column'>
                <Text
                  fontSize='xs'
                  color='#F6AB3E'
                  fontWeight='bold'
                  mb='16px'
                  letterSpacing='2px'>
                  OUR DIGITAL PRODUCTS
                </Text>
                <Text
                  fontSize='34px'
                  lineHeight='44px'
                  letterSpacing='-1px'
                  color='white'
                  fontWeight='500'>
                  Featured products
                </Text>
              </Flex>

              <NavLink to='/templates/all-templates'>
                 <Button
                        color='white'
                        bg='none'
                        border='1px solid white'
                        _hover={{
                          bg: "none",
                          opacity: "0.8",
                        }}
                        _active={{
                          bg: "none",
                          opacity: "0.8",
                        }}
                        fontWeight='500'
                        fontSize='sm'
                        lineHeight='14px'
                        h='56px'
                        w='190px'>
                    Explore all Products
                </Button>
              </NavLink>
            </Flex>
            <ProductList products={featuredProducts} />
            <NavLink to='/templates/all-templates'>
              <Button
           color='white'
           bg='none'
           border='1px solid white'
           _hover={{
            bg: "none",
            opacity: "0.8",
          }}
          _active={{
            bg: "none",
            opacity: "0.8",
          }}
          fontWeight='500'
          fontSize='sm'
          lineHeight='14px'
          h='56px'
          w='190px'
                display={{ base: "flex", md: "none" }}
                mt='50px'
                mx='auto'>
                  Explore all Products
              </Button>
            </NavLink>
          </Flex>
        </Flex>

        {/* Bundles */}
        <Flex
          justify='center'
          align='center'
          bgImage={bundleBg}
          h={{ md: "760px" }}
          py={{ base: "80px", md: "0px" }}
          px={{ base: "20px", md: "0px" }}
          bgSize='cover'
          bgPosition={{ base: "-620px 0px", md: "center" }}
          maxW='100%'>
          <Flex
            direction='column'
            justify='center'
            align='center'
            textAlign='center'
            maxW='100%'>
            <SimmmpleLogoBundle
              w={{ base: "162px", md: "182px" }}
              h='50px'
              mb='48px'
            />
            <Text
              fontSize={{ base: "34px", md: "64px" }}
              lineHeight={{ base: "58px", md: "72px" }}
              color='#fff'
              fontWeight='bold'
              mb='25px'>
              Winter Promotion 80%
            </Text>
            <Text
              color='#fff'
              fontSize={{ base: "16px", md: "20px" }}
              lineHeight={{ base: "30px", md: "40px" }}
              maxW={{ md: "70%" }}
              mb='50px'>
              <Text as='span' fontWeight='bold'>
                Save 80% OFF now{" "}
              </Text>
              to all Premium Coded & Design Products & Tools with
              the Exclusive Winter Promotion Digital Bundle!
            </Text>
            <Box>
              <Countdown date='20 January 2022' />
            </Box>
            <Flex align='center' mt='54px'>
              <LeftButtonEffect
                ref={leftEffect}
                color='#fff'
                w='35px'
                h='115px'
                transition='all .5s ease'
              />
              {/* <NavLink to='/bundles'> */}
              <NavLink to='/bundle'>
                <Button
                  bg='linear-gradient(108.54deg, #FF416C 6.56%, #FF4B2B 95.2%)'
                  variant='solid'
                  w='190px'
                  h='56px'
                  onMouseEnter={() => {
                    leftEffect.current.style.transform = "translateX(-5px)";
                    rightEffect.current.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={() => {
                    leftEffect.current.style.transform = "translateX(5px)";
                    rightEffect.current.style.transform = "translateX(-5px)";
                  }}>
                  <Text color='white' fontSize='sm'>
                    Save 80% now!
                  </Text>
                </Button>
              </NavLink>
              <RightButtonEffect
                ref={rightEffect}
                color='#fff'
                w='35px'
                h='115px'
                transition='all .5s ease'
              />
            </Flex>
          </Flex>
        </Flex>

        {/* Latest */}
        <Flex bg='#14182C' py='100px' px='20px'>
          <Flex direction='column' w='1170px' mx='auto'>
            <Flex justify='space-between' align='center' w='100%' mb='72px'>
              <Flex direction='column'>
                <Text
                  fontSize='xs'
                  color='#F6AB3E'
                  fontWeight='bold'
                  mb='16px'
                  letterSpacing='2px'>
                  OUR DIGITAL PRODUCTS
                </Text>
                <Text
                  fontSize='34px'
                  lineHeight='44px'
                  letterSpacing='-1px'
                  color='white'
                  fontWeight='500'>
                  Latest products
                </Text>
              </Flex>
              <NavLink to='/templates/all-templates'>
              <Button
                        color='white'
                        bg='none'
                        border='1px solid white'
                        _hover={{
                          bg: "none",
                          opacity: "0.8",
                        }}
                        _active={{
                          bg: "none",
                          opacity: "0.8",
                        }}
                        fontWeight='500'
                        fontSize='sm'
                        lineHeight='14px'
                        h='56px'
                        w='190px'>
                    Explore all Products
                </Button>
              </NavLink>
            </Flex>
            <ProductList products={latestProducts} />
            <NavLink to='/templates/all-templates'>
            <Button
           color='white'
           bg='none'
           border='1px solid white'
           _hover={{
            bg: "none",
            opacity: "0.8",
          }}
          _active={{
            bg: "none",
            opacity: "0.8",
          }}
          fontWeight='500'
          fontSize='sm'
          lineHeight='14px'
          h='56px'
          w='190px'
                display={{ base: "flex", md: "none" }}
                mt='50px'
                mx='auto'>
                  Explore all Products
              </Button>
            </NavLink>
          </Flex>
        </Flex>

        {/* Resources */}
        <Flex direction='column' >
          <Flex
            direction='column'
            pb='125px'
            >
         </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Home;

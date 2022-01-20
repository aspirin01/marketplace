import React, { useEffect, useRef, useState } from "react";
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
import trophy from "assets/img/bundles/trophy.png";
import stars from "assets/img/bundles/bundles-stars.png";
import developers from "assets/img/bundles/developers.png";
import medal from "assets/img/bundles/medal.png";
import simmmpleFolder from "assets/img/bundles/simmmple-folder.png";
import { HSeparator } from "components/separator/Separator";
import venus from "assets/img/bundles/venus.png";
import venusresponsive from "assets/img/bundles/venusresponsive.png";
import vdb from "assets/img/bundles/vdb.png";
import vdbresponsive from "assets/img/bundles/vdbresponsive.png";
// Custom Components
import Card from "components/card/Card";
import CardBody from "components/card/CardBody";
import ProductList from "components/products/ProductList";
import Countdown from "components/countdown/Countdown";
import { featuredProducts } from "variables/products";
import { latestProducts } from "variables/products";
import purity from "assets/img/bundles/purity.png";
import purityresponsive from "assets/img/bundles/purityresponsive.png";
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

  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  const md = {
    image: width < 1100,
  };
  const base = {
    image: width < 450,
  };
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
      <Flex direction='column' bg='#02021E' maxW='100%' overflowX='hidden'>
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
        <HSeparator
          w='774px'
          maxW={{ base: "350px", md: "unset" }}
          mb='100px'
          mx={{ base: "auto" }}
        />
        {/* Categories */}
        <Flex
          mb='118px'
          direction='column'
          mx='auto'
          w='1170px'
          maxW='100%'
          px={{ base: "20px", xl: "auto" }}>
        <Flex
          py='100px'
          pt={{ base: "0px", lg: "30px" }}
          direction='column'
          w='1170px'
          maxW='100%'
          mx='auto'>
          <Flex direction='column' align='center' w='100%' mb='72px' mx='auto'>
            <Text
              fontSize='xs'
              color='#F6AB3E'
              fontWeight='bold'
              mb='16px'
              letterSpacing='2px'
              textAlign='center'>
              WINTER PROMOTION BUNDLE BENEFITS
            </Text>
            <Text
              fontSize='34px'
              lineHeight='44px'
              letterSpacing='-1px'
              color='white'
              fontWeight='500'
              mb='20px'
              mx='auto'
              textAlign='center'>
              So... what’s it all about?
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#C5C9EB'
              fontWeight='400'
              mx='auto'
              textAlign='center'
              px={{ base: "30px", md: "0px" }}>
              It's about building better products faster than ever before.
            </Text>
          </Flex>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap='20px'
            w='100%'
            px={{ base: "20px", xl: "0px" }}>
            <Card
              bg='linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)'
              h='320px'
              me='20px'>
              <CardBody h='100%' py='12px' justify='space-between' px='20px'>
                <Flex
                  flexDirection='column'
                  align='center'
                  justify='center'
                  mx='auto'>
                  <Image src={simmmpleFolder} w='100px' h='100px' mb='auto' />
                  <Text
                    textAlign='center'
                    fontWeight='700'
                    mb='10px'
                    fontSize='38px'
                    color='white'>
                    4,000+
                  </Text>
                  <Text
                    textAlign='center'
                    fontSize='md'
                    lineHeight='28px'
                    color='#C5C9EB'
                    fontWeight='400'>
                    Coded & Designed Components and Elements
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card
              bg='linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)'
              h='320px'
              me='20px'>
              <CardBody h='100%' py='12px' justify='space-between' px='20px'>
                <Flex
                  flexDirection='column'
                  align='center'
                  justify='center'
                  mx='auto'>
                  <Flex mb='auto' flexDirection='column'>
                    <Image src={trophy} w='100px' h='100px' />
                    <Image
                      src={stars}
                      w='96px'
                      h='21.6px'
                      boxShadow='0px 15px 41px -4px #7090B099'
                      borderRadius='30px'
                      transform='translate(0px, -10px)'
                    />
                  </Flex>
                  <Text
                    textAlign='center'
                    fontWeight='700'
                    mb='10px'
                    fontSize='38px'
                    color='white'>
                    4.9/5
                  </Text>
                  <Text
                    textAlign='center'
                    fontSize='md'
                    lineHeight='28px'
                    color='#C5C9EB'
                    fontWeight='400'>
                    Reviews from developers & designers all over the world
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card
              bg='linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)'
              h='320px'
              me='20px'>
              <CardBody h='100%' py='12px' justify='space-between' px='20px'>
                <Flex
                  flexDirection='column'
                  align='center'
                  justify='center'
                  mx='auto'>
                  <Image src={developers} w='100px' h='100px' mb='auto' />
                  <Text
                    textAlign='center'
                    fontWeight='700'
                    mb='10px'
                    fontSize='38px'
                    color='white'>
                    10,000+
                  </Text>
                  <Text
                    textAlign='center'
                    fontSize='md'
                    lineHeight='28px'
                    color='#C5C9EB'
                    fontWeight='400'>
                    Developers & Designers that use our digital products
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card
              bg='linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)'
              h='320px'>
              <CardBody h='100%' py='12px' px='18px'>
                <Flex
                  flexDirection='column'
                  align='center'
                  justify='center'
                  mx='auto'>
                  <Image src={medal} w='100px' h='129px' />
                  <Text
                    mt='auto'
                    textAlign='center'
                    fontWeight='700'
                    mb='10px'
                    fontSize='38px'
                    color='white'>
                    Lifetime
                  </Text>
                  <Text
                    textAlign='center'
                    fontSize='md'
                    lineHeight='28px'
                    color='#C5C9EB'
                    fontWeight='400'>
                    We offer Lifetime License for all products of this bundle
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          </Grid>
        </Flex>
        <HSeparator
          w='774px'
          maxW={{ base: "350px", md: "unset" }}
          mb='100px'
          mx={{ base: "auto" }}
        />
        <Flex mb={{ base: "380px", lg: "460px", xl: "100px" }}>
            <Flex
              w={{ base: "90%", "2sm": "92%", md: "730px", xl: "100%" }}
              mx={{ base: "auto", xl: "0px" }}
              h={{ md: "534px", xl: "550px" }}
              position='relative'
              borderRadius='30px'>
              <Image
                src={base.image ? venus : md.image ? venusresponsive : venus}
                w={{
                  base: "335px",
                  "2sm": "385px",
                  md: "600px",
                  lg: "800px",
                  xl: "575px",
                }}
                h={{
                  base: "340px",
                  "2sm": "390px",
                  md: "300px",
                  lg: "400px",
                  xl: "586px",
                }}
                maxW='unset !important'
                borderRadius='18px'
                position='absolute'
                left={{ base: "50%", md: "50%", lg: "-35px", xl: "0" }}
                top={{ base: "-315px", md: "-280px", lg: "-360px", xl: "50%" }}
                transform={{
                  base: "translate(-50%, 0px)",
                  md: "translate(-50%,0px)",
                  lg: "translate(0px, 0%);",
                  xl: "translate(0px, -50%);",
                }}
                zIndex='2'
              />
              <Flex
                w='100%'
                h='100%'
                position='relative'
                justifyContent={{ md: "center", xl: "flex-end" }}
                pe={{ md: "0px", xl: "40px" }}
                overflow='hidden'
                p={{ base: "15px", md: "0px" }}
                pt={{ md: "80px", lg: "45px" }}
                borderRadius='30px'>
                <Image
                  position='absolute'
                  transform='translate(-50%, -50%);'
                  w={{ base: "220%", xl: "110%" }}
                  h={{ base: "220%", xl: "110%" }}
                  left='50%'
                  top='50%'
                  bg=''
                  filter='blur(40px)'
                  zIndex='1'
                />
                <Flex
                  w={{ md: "70%", lg: "88%", xl: "456px" }}
                  maxW='100%'
                  flexDirection='column'
                  zIndex='2'
                  pt={{
                    base: "40px",
                    "2sm": "80px",
                    md: "0px",
                    lg: "40px",
                    xl: "0px",
                  }}>
                  <Text
                    fontWeight='bold'
                    textAlign={{ base: "center", lg: "start" }}
                    fontSize={{ base: "30px", md: "36px", xl: "50px" }}
                    letterSpacing='-0.5px'
                    lineHeight={{ base: "36px", md: "54px", lg: "64px" }}
                    mb='20px'
                    color='white'>
                    Venus Design System PRO
                  </Text>
                  <Text
                    textAlign={{ base: "center", lg: "start" }}
                    mx={{ base: "auto", lg: "0px" }}
                    fontSize={{ base: "md", md: "md" }}
                    lineHeight='28px'
                    color='white'
                    w='430px'
                    maxW='100%'
                    mb='40px'>
                    An easy-to-use Design Tool with the most common 2000+ UI/UX
                    components states that allows you to design quickly with
                    world-class standards out-of-the-box.
                  </Text>
                  <Flex
                    w='100%'
                    justifyContent={{ base: "center", md: "space-between" }}
                    flexDirection={{ base: "column", md: "row" }}
                    align='center'
                    px={{ base: "", md: "40px", lg: "0px" }}
                    pe={{ base: "", md: "40px", lg: "160px", xl: "0px" }}
                    mb='54px'>
                    <Flex
                      flexDirection='column'
                      mb={{ base: "20px", md: "0px" }}>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        250+
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Global Styles
                      </Text>
                    </Flex>
                    <Flex
                      flexDirection='column'
                      mb={{ base: "20px", md: "0px" }}>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        2000+
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Components States
                      </Text>
                    </Flex>
                    <Flex flexDirection='column'>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        1400+
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Material Design Icons
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    w='100%'
                    align='center'
                    justify={{ base: "center", lg: "flex-start" }}
                    flexDirection={{ base: "column", md: "row" }}>
                    <Link href='https://www.figma.com/file/WGfCeWMB5HMT65TVIfPOFw/Venus---Design-System-PRO-2021-(Live-Preview)?node-id=414%3A146'>
                      <Button
                        bg='linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)'
                        _hover={{
                          bg: "linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)",
                        }}
                        _active={{
                          bg: "linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)",
                        }}
                        color='white'
                        fontWeight='500'
                        fontSize='sm'
                        me={{ base: "0px", md: "20px" }}
                        mb={{ base: "10px", md: "0px" }}
                        lineHeight='14px'
                        h='56px'
                        w='190px'>
                        Live Preview
                      </Button>
                    </Link>
                    <NavLink to='/product/venus-design-system-pro'>
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
                        More Details
                      </Button>
                    </NavLink>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex mb={{ base: "380px", lg: "460px", xl: "100px" }}>
            <Flex
              w={{ base: "90%", "2sm": "92%", md: "730px", xl: "100%" }}
              mx={{ base: "auto", xl: "0px" }}
              h={{ md: "534px", xl: "550px" }}
              position='relative'
              borderRadius='30px'>
              <Image
                src={base.image ? vdb : md.image ? vdbresponsive : vdb}
                w={{
                  base: "335px",
                  "2sm": "385px",
                  md: "600px",
                  lg: "800px",
                  xl: "575px",
                }}
                h={{
                  base: "340px",
                  "2sm": "390px",
                  md: "300px",
                  lg: "400px",
                  xl: "586px",
                }}
                maxW='unset !important'
                borderRadius='18px'
                position='absolute'
                right={{ base: "50%", md: "50%", lg: "-35px", xl: "-10px" }}
                top={{ base: "-315px", md: "-280px", lg: "-360px", xl: "50%" }}
                transform={{
                  base: "translate(50%, 0px)",
                  md: "translate(50%,0px)",
                  lg: "translate(0px, 0%);",
                  xl: "translate(0px, -50%);",
                }}
                zIndex='2'
              />
              <Flex
                w='100%'
                h='100%'
                position='relative'
                justifyContent={{ base: "center", xl: "flex-start" }}
                overflow='hidden'
                p={{ base: "15px", md: "0px" }}
                ps={{ md: "0px", xl: "70px" }}
                pt={{ md: "80px", lg: "45px" }}
                borderRadius='30px'
                bg=''>
                <Flex
                  w={{ md: "70%", lg: "88%", xl: "456px" }}
                  maxW='100%'
                  flexDirection='column'
                  zIndex='2'
                  pt={{
                    base: "40px",
                    "2sm": "80px",
                    md: "0px",
                    lg: "40px",
                    xl: "0px",
                  }}>
                  <Text
                    fontWeight='bold'
                    textAlign={{ base: "center", lg: "start" }}
                    fontSize={{ base: "30px", md: "36px", xl: "50px" }}
                    letterSpacing='-0.5px'
                    lineHeight={{ base: "36px", md: "54px", lg: "64px" }}
                    mb='20px'
                    color='white'>
                    Venus Dashboard Builder PRO
                  </Text>
                  <Text
                    textAlign={{ base: "center", lg: "start" }}
                    mx={{ base: "auto", lg: "0px" }}
                    fontSize={{ base: "md", md: "md" }}
                    lineHeight='28px'
                    color='white'
                    w='450px'
                    maxW='100%'
                    mb='40px'>
                    Create awesome dashboards with less effort directly in
                    Figma! The first Dashboard Builder for Figma with more than
                    400+ widgets/cards that allows you to design dashboards
                    quickly.
                  </Text>
                  <Flex
                    w='100%'
                    justifyContent={{ base: "center", md: "space-between" }}
                    flexDirection={{ base: "column", md: "row" }}
                    align='center'
                    px={{ base: "", md: "40px", lg: "0px" }}
                    pe={{ base: "", md: "40px", lg: "160px", xl: "0px" }}
                    mb='54px'>
                    <Flex
                      flexDirection='column'
                      mb={{ base: "20px", md: "0px" }}>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        90+
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Global Styles
                      </Text>
                    </Flex>
                    <Flex
                      flexDirection='column'
                      mb={{ base: "20px", md: "0px" }}>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        400+
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Widgets/Cards
                      </Text>
                    </Flex>
                    <Flex flexDirection='column'>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        30+
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Screen Examples
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    w='100%'
                    align='center'
                    justify={{ base: "center", lg: "flex-start" }}
                    flexDirection={{ base: "column", md: "row" }}>
                    <Link href='https://www.figma.com/file/lFbkFkxt7CWerPOoGr1JlG/(Preview)-PRO-Version---Venus-Dashboard-Builder?node-id=102%3A1556'>
                      <Button
                        bg='linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)'
                        _hover={{
                          bg: "linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)",
                        }}
                        _active={{
                          bg: "linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)",
                        }}
                        color='white'
                        fontWeight='500'
                        fontSize='sm'
                        me={{ base: "0px", md: "20px" }}
                        mb={{ base: "10px", md: "0px" }}
                        lineHeight='14px'
                        h='56px'
                        w='190px'>
                        Live Preview
                      </Button>
                    </Link>
                    <NavLink to='/product/venus-db-pro'>
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
                        More Details
                      </Button>
                    </NavLink>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex mb={{ base: "380px", lg: "460px", xl: "100px" }}>
            <Flex
              w={{ base: "90%", "2sm": "92%", md: "730px", xl: "100%" }}
              mx={{ base: "auto", xl: "0px" }}
              h={{ md: "534px", xl: "550px" }}
              position='relative'
              borderRadius='30px'>
              <Image
                src={base.image ? purity : md.image ? purityresponsive : purity}
                w={{
                  base: "335px",
                  "2sm": "385px",
                  md: "600px",
                  lg: "800px",
                  xl: "575px",
                }}
                h={{
                  base: "340px",
                  "2sm": "390px",
                  md: "300px",
                  lg: "400px",
                  xl: "586px",
                }}
                maxW='unset !important'
                borderRadius='18px'
                position='absolute'
                left={{ base: "50%", md: "50%", lg: "-35px", xl: "0" }}
                top={{ base: "-315px", md: "-280px", lg: "-360px", xl: "50%" }}
                transform={{
                  base: "translate(-50%, 0px)",
                  md: "translate(-50%,0px)",
                  lg: "translate(0px, 0%);",
                  xl: "translate(0px, -50%);",
                }}
                zIndex='2'
              />
              <Flex
                w='100%'
                h='100%'
                position='relative'
                justifyContent={{ base: "center", xl: "flex-end" }}
                overflow='hidden'
                p={{ base: "15px", md: "0px" }}
                pe={{ md: "0px", xl: "40px" }}
                pt={{ md: "60px", lg: "45px" }}
                borderRadius='30px'
                bg=''>
                <Flex
                  w={{ md: "70%", lg: "88%", xl: "456px" }}
                  maxW='100%'
                  flexDirection='column'
                  zIndex='2'
                  pt={{
                    base: "40px",
                    "2sm": "80px",
                    md: "0px",
                    lg: "40px",
                    xl: "0px",
                  }}>
                  <Text
                    fontWeight='bold'
                    textAlign={{ base: "center", lg: "start" }}
                    fontSize={{ base: "30px", md: "36px", xl: "46px" }}
                    letterSpacing='-0.5px'
                    lineHeight={{ base: "36px", md: "54px", lg: "64px" }}
                    mb='20px'
                    color='white'>
                    Purity UI - Chakra UI Admin Dashboard
                  </Text>
                  <Text
                    textAlign={{ base: "center", lg: "start" }}
                    mx={{ base: "auto", lg: "0px" }}
                    fontSize={{ base: "md", md: "md" }}
                    lineHeight='28px'
                    color='white'
                    w='430px'
                    maxW='100%'
                    mb='40px'>
                    Most trendiest, complex and innovative Dashboard made by
                    Creative Tim & Simmmple. Check our latest Premium ReactJS
                    Dashboard based on Chakra UI.
                  </Text>
                  <Flex
                    w='100%'
                    justifyContent={{ base: "center", md: "space-between" }}
                    flexDirection={{ base: "column", md: "row" }}
                    align='center'
                    px={{ base: "", md: "40px", lg: "0px" }}
                    pe={{ base: "", md: "40px", lg: "160px", xl: "0px" }}
                    mb='54px'>
                    <Flex
                      flexDirection='column'
                      mb={{ base: "20px", md: "0px" }}>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        React
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Technology
                      </Text>
                    </Flex>
                    <Flex
                      flexDirection='column'
                      mb={{ base: "20px", md: "0px" }}>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        300+
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Individual Elements
                      </Text>
                    </Flex>
                    <Flex flexDirection='column'>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        Full
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Documentation
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    w='100%'
                    align='center'
                    justify={{ base: "center", lg: "flex-start" }}
                    flexDirection={{ base: "column", md: "row" }}>
                    <Link href='https://demos.creative-tim.com/purity-ui-dashboard-pro/?ref=simmmple'>
                      <Button
                        bg='linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)'
                        _hover={{
                          bg: "linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)",
                        }}
                        _active={{
                          bg: "linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)",
                        }}
                        color='white'
                        fontWeight='500'
                        fontSize='sm'
                        me={{ base: "0px", md: "20px" }}
                        mb={{ base: "10px", md: "0px" }}
                        lineHeight='14px'
                        h='56px'
                        w='190px'>
                        Live Preview
                      </Button>
                    </Link>
                    <NavLink to='/product/purity-dashboard-pro'>
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
                        More Details
                      </Button>
                    </NavLink>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          </Flex>
          <HSeparator
          w='774px'
          maxW={{ base: "350px", md: "unset" }}
          mb='100px'
          mx={{ base: "auto" }}
        />
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

        {/* Latest */}
        <Flex bg='#02021E' py='100px' px='20px'>
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

import React from "react";

import Atropos from "atropos/react/atropos-react.esm";
import "atropos/atropos.css";
import "./head.css"
import heading from 'assets/img/head/uInvented.svg';
import bg from 'assets/img/head/atropos-bg.svg';
import bg1 from 'assets/img/head/atropos-forest-back.svg';
import bg2 from 'assets/img/head/atropos-forest-front.svg';
import bg3 from 'assets/img/head/atropos-forest-mid.svg';
import bg4 from 'assets/img/head/atropos-mountains.svg';

import { Link } from "react-router-dom";
import styled from 'styled-components';
export const HomeHeader = () => {
    const Wrap = styled.div`
  svg {
    width: 40px;
    height: 40px;
  }
`;
  return (
    <div className="container">
    <Atropos
      className="atropos-banner"
      highlight={false}
      onEnter={() => console.log("enter")}
    >
      <img
        className="atropos-banner-spacer"
        src={bg}
        alt=""
      />
      <img
        data-atropos-offset="-4.5"
        src={bg}
        alt=""
      />
      <img
        data-atropos-offset="-2.5"
        src={bg4}
        alt=""
      />
      <img
        data-atropos-offset="0"
        src={bg1}
        alt=""
      />
      <img
        data-atropos-offset="2"
        src={bg3}
        alt=""
      />
      <img
        data-atropos-offset="4"
        src={bg2}
        alt=""
      />
      <div style={{
      padding: "2em 6em"

      }}>
          <Wrap>
      <img
        data-atropos-offset="5"
        src={heading}
        alt=""
      />
      </Wrap>
      </div>
    </Atropos>
  </div>
  );
};
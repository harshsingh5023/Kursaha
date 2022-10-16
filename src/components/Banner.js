import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import EmailCompanion from "../assets/email.svg";

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0b0e15;
`;
const Bar = styled.div`
  margin: 18px;
  margin-bottom: 0;
  display: flex;
  width: 1366px;
  justify-content: space-between;
`;
const BarBtn = styled.button`
  color: #ffffff;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #0070e7;
  font-size: 22px;
  font-weight: 600;
  line-height: 27px;
  cursor: pointer;
  padding: ${(props) => (props.variant === "large" ? "15px 30px" : "0 20px")};

  &: hover {
    transition: all 0.15s ease;
    scale: 1.05;
    opacity: 0.8;
  }
`;
const Heading = styled.h1`
  font-size: 72px;
  font-weight: 700;
  width: 815px;
  line-height: 87.14px;
  margin: 0;
`;

const Banner = () => {
  return (
    <Wrapper>
      <Bar>
        <img src={Logo} alt="" width="135.19px" height="61px" />
        <BarBtn>Talk to us</BarBtn>
      </Bar>
      <Heading>Grow Your Business with Email Automation</Heading>
      <div>
        <img src={EmailCompanion} alt="" />
      </div>
      <BarBtn variant="large">Get Started</BarBtn>
    </Wrapper>
  );
};

export default Banner;

import React from "react";
import styled from "styled-components";
import { FiLogIn } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const NavBar = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0;
  margin-left: auto;
  height: 43px;
  // max-height: 43px;
  background: #171a21;
  // width: 1440px;
  float: right;
`;
const NavButton = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 17px;
  background: none;
  color: #e0ecff;
  padding: 30px;
  curson: pointer;

  &: hover {
    transition: all 0.1s ease;
    opacity: 0.7;
    scale: 1.15;
  }
`;

const Line = styled.div`
  border: 2px solid #363a44;
  height: 17px;
`;

const style = { fontSize: "180%", "margin-right": "6px", color: "#E0ECFF" };
const Header = () => {
  return (
    <div style={{ width: "1440px", background: "#171a21" }}>
      <NavBar>
        <NavButton href="/">
          <BsGithub style={style} />
          <span>Github</span>
        </NavButton>
        <NavButton href="/">
          <CgFileDocument style={style} />
          <span>Docs</span>
        </NavButton>
        <Line></Line>
        <NavButton href="/">
          <FiLogIn style={style} />
          <span>Sign In</span>
        </NavButton>
      </NavBar>
    </div>
  );
};

export default Header;

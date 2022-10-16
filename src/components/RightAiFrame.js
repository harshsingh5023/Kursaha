import React from "react";
import styled from "styled-components";
import Asset from "../assets/Asset 5 1.png";

const Wrap = styled.div`
  width: 55%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightAiFrame = () => {
  return (
    <Wrap>
      <img src={Asset} alt="" />
    </Wrap>
  );
};

export default RightAiFrame;

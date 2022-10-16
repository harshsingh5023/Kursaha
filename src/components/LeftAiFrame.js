import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 40%;
  padding: 30px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const AiHeading = styled.div`
  font-size: 64px;
  font-weight: 700;
  line-height: 77px;
  margin-left: 23px;

  span {
    color: #0070e7;
  }
`;
const Frameworks = styled.div`
  padding-left: 10px;
  padding-top: 0px;
  margin: 33px 10px;
  border-left: 2px solid #e0ecff;
`;

const FHeading = styled.h4`
  margin: 0;
  font-size: 24px;
  line-height: 15px;
`;
const FDesc = styled.p`
  margin-bottom: 0;
  color: #e0ecff;
  width: 510px;
  font-size: 24px;
  font-weight: 300;
`;

const data = [
  {
    title: "Personalisation",
    desc: "The advanced intelligent system assists in reaching out to customers and increasing comversion funnel.",
  },
  {
    title: "Efficiency",
    desc: "Our data models help improve the content. Real-time delivery insights are monitored using AI and provide meaningful actions.",
  },
  {
    title: "Automation",
    desc: "Send email at scale using code written in your preferred programming language, such as Python, Java, or Curl.",
  },
];

const LeftAiFrame = () => {
  return (
    <Wrap>
      <AiHeading>
        AI <span>Framework</span>
      </AiHeading>

      {data.map((item) => {
        return (
          <Frameworks>
            <FHeading>{item.title}</FHeading>

            <FDesc>{item.desc}</FDesc>
          </Frameworks>
        );
      })}
    </Wrap>
  );
};

export default LeftAiFrame;

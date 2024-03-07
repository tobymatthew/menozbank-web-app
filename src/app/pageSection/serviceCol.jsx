import React from "react";
import { GridimgContainer,ServiceColumn,ServiceTextContainer } from "@/styles/sections";
import { Button, ButtonSmall } from "@/styles/buttons";
import { H2, P, Space,Span } from "@/styles/typography";
const ServiceCol = () => {
  const width = "597";
  const height = "597";

  const text = {
    span: `Published August 2023`,
    header: "Independent service quality survey results",
    p1: "Personal current accounts",
    p2: "As part of a regulatory requirement, independent surveys were conducted to ask customers of the largest personal current account providers in Great Britain and Northern Ireland if they would recommend their provider to friends and family. The results represent the view of customers who took part in the survey",
    subHeader1: "Great Britain",
    subHeader2: "Northern Ireland",
  };
  return (
    <ServiceColumn>
      <ServiceTextContainer>

        <Span>{text.span}</Span>
        <H2>{text.header}</H2>
        <Space></Space>
        <P>{text.p1}</P>
        <Space></Space>
        <P>{text.p2}</P>
      </ServiceTextContainer>

      <GridimgContainer>
        <div>
          <H2>{text.subHeader1}</H2>
          <img
            src="/overall-service-quality.png"
            alt="my image"
            width={width}
            height={height}
          />
        </div>

        <div>
          <H2>{text.subHeader2}</H2>
          <img
            src="/overall-service-quality.png"
            alt="my image"
            width={width}
            height={height}
          />
        </div>
      </GridimgContainer>
    </ServiceColumn>
  );
};

export default ServiceCol;

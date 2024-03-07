import React from "react";
import {
  ListFeaturesColumnContainer,
  FeatureListMargin,
  ListImage
} from "@/styles/sections";
import { Button, ButtonSmall } from "@/styles/buttons";
import { H2, P, Space,mainText } from "@/styles/typography";
const ListFeaturesCol2 = () => {
  const mgBottom = "4rem";
  const details = [
    {
      img: "Credit.avif",
      H2: "Credit with a dash of Monzo magic",
      p1: "Use Monzo Flex to get more time to pay for pretty much anything. It’s 0% interest when you pay in full on your next payment date or in 3 monthly payments. For more wiggle room it’s 29% APR representative (variable) when you pay in up to 24 monthly payments.",
      p2: "Representative example: 29% APR representative (variable), with an assumed credit limit of £1,200 and an annual interest rate of 29% (variable).",
      p3: "Eligibility criteria and Ts&Cs apply. 18+ year olds only. Missed payments can negatively impact credit scores and you may lose the interest-free rate on existing plans.",
      button: "Explore Monzo Flex",
      width: 360,
      height: 586,
      bg: "#112231",
      color: "white",
    },
    {
      img: "Borrowing.avif",
      H2: "Save",
      p1: "We offer overdrafts up to £2,000 and loans up to £25,000. Checking if you're eligible won't leave a mark on your credit score, there are no lengthy forms to fill in, and no charges for paying us back early.",
      p2: "Our representative APR is 14.8% for loans more than £10,000, up to £25,000. For loans up to £10,000 it's 28.0%.",
      p3: "How does our overdraft compare? Our representative APR is 39.0%. You can use the APR to compare the cost of different credit products.",
      button: "Borrowing with Monzo",
      width: 400,
      height: 728,
      bg: "#FFFFFF",
      direction: "reverse",
    },
  ];

  const details2 = [
    {
      img: "fraud-lock-icons.png",
      H2: "Protect yourself from fraud",
      p1: "Don’t make payments or share your data if something seems unusual or unexpected - stop and challenge.",
      p2: "Take a look at some common scams and learn how they work so you can keep your money safe. Fraudsters are clever and use sophisticated tactics, so knowing what to look out for can help stop them.",
      button: "Protect yourself from fraud",
      width: 500,
      height: 334,
      bg: "#FFD7F0 ",
      mg:mgBottom
    },

    {
      img: "illus_safe@2x.png",
      H2: "Keep your money safe",
      p1: "Cutting-edge technology, FSCS protection and 24/7 support if you need us urgently. Just a few of the reasons over 8 million customers trust us to keep their money safe.",
      button: "Find out more",
      width: 450,
      height: 371,
      bg: "#BBF6E2",
      direction: "reverse",
    },
  ];

  return (
    <div>
      {details.map((detail, index) => (
        <ListFeaturesColumnContainer
          key={index}
          bg={detail.bg}
          direction={detail.direction}
          
        >
          <FeatureListMargin>
            <ListImage
              src={detail.img}
              alt="image"
              width={detail.width}
              height={detail.height}
            />
          </FeatureListMargin>

          <FeatureListMargin direction={detail.direction}>
            <H2 color={detail.color}>{detail.H2}</H2>
            <Space></Space>
            <mainText color={detail.color}>{detail.p1}</mainText>
            <Space></Space>
            <Button>{detail.button}</Button>
            <Space></Space>
            <mainText color={detail.color}>{detail.p2}</mainText>
            <Space></Space>
            <mainText color={detail.color}>{detail.p3}</mainText>
          </FeatureListMargin>
        </ListFeaturesColumnContainer>
      ))}

      {details2.map((detail, index) => (
        <ListFeaturesColumnContainer
          key={index}
          bg={detail.bg}
          direction={detail.direction}
          mg={detail.mg}
        >
          <FeatureListMargin>
            <ListImage
              src={detail.img}
              alt="image"
              width={detail.width}
              height={detail.height}
            />
          </FeatureListMargin>

          <FeatureListMargin direction={detail.direction}>
            <H2>{detail.H2}</H2>
            <Space></Space>
            <mainText>{detail.p1} </mainText>
            <Space></Space>
            {detail.button && <P>{detail.p2}</P>}
            {detail.button && <Space></Space>}
            {detail.button && <Button>{detail.button}</Button>}
          </FeatureListMargin>
        </ListFeaturesColumnContainer>
      ))}
    </div>
  );
};

export default ListFeaturesCol2;

import React from "react";
import { H2, P, Space } from "@/styles/typography";
import { RatingColumn, FlexContainer, SpaceRight } from "@/styles/sections";
const RatingCol = () => {
  const text = {
    h2: "Join more than 8 million people with a Monzo bank account",

    button: "Open a Monzo account",
  };

  const width = 83;
  const width2 = 46;

  return (
    <RatingColumn>
      <Space></Space>

      <Space>
        <FlexContainer>
          <SpaceRight>
            <img src="/cass-logo.png" alt="my image" width={width} />
          </SpaceRight>
          <SpaceRight>
            <img src="/direct-debit.png" alt="my image" width={width} />
          </SpaceRight>
          <SpaceRight>
            <img src="/fscs.png" alt="my image" width={width2} />
          </SpaceRight>
        </FlexContainer>
      </Space>

      <Space>
        <H2>{text.h2}</H2>
      </Space>

      <FlexContainer>
        <img
          src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
          alt="my image"
          width="150"
        />
        <img src="/google-play-badge.png" alt="my image" width="191" />
      </FlexContainer>
    </RatingColumn>
  );
};

export default RatingCol;

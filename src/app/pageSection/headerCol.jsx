import React from "react";
import { Header,HeaderImage } from "@/styles/sections";
import { Button } from "@/styles/buttons";
import { H1, H2, P, Space } from "@/styles/typography";
import HomeNav from "@/components/homeNav";
import Image from "next/image";

import myImage from "/public/BBA_Winner_White_300dpi_Best_banking_app.png";

const HeaderCol = () => {
  const text = {
    header: "Banking made easy",
    subheader1: "Spend, save and manage your money, all in one place.",
    subheader2: "Open a full UK bank account from your phone, for free.",
    subheader3: "UK residents only. Ts&Cs apply.",

    button: "Open a Monzo account",
  };

  return (
    <Header>
       
      <div>
       
        <Space>
          <H1>{text.header}</H1>
        </Space>
        <P color="white">{text.subheader1}</P>
        <Space>
          <P color="white">{text.subheader2}</P>
        </Space>

       <Space><Button color="white">{text.button}</Button></Space>
        <Space>
          <P color="white">{text.subheader3}</P>
        </Space>
        <img
          src="/BBA_Winner_White_300dpi_Best_banking_app.png"
          alt="my image"
          width="243"
        />
      </div>
      <div>
        <HeaderImage src="/Home_Hero.png" alt="my image"/>
      </div>
      {/* <div>Item 3</div>   */}
    </Header>
  );
};

export default HeaderCol;

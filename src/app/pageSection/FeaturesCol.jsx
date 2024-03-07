import React from "react";
import { FeaturesColumn,FeaturesColumnContainer,FeatureImage } from "@/styles/sections";
import { P } from "@/styles/typography";
import { Button,ButtonSmall } from "@/styles/buttons";
const FeaturesCol = () => {
  const width = 300;
  const size= "1rem";
  // const height = 300;

  const text = {
   
    text1: `Apply for a full UK current account in 15 minutes`,
    text2: "Organise your money however you like with Pots",
    text3: "See your money in a whole new light with Trends",

    button: "Open a Monzo account",
  };

  return (

    <FeaturesColumnContainer>
    <FeaturesColumn col="3">
      <div>
        <FeatureImage
          src="/Account_Snippet.png"
          alt="my image"
          width={width}
          
        />
        <P size={size} text="center">{text.text1}</P>
      </div>
      <div>
        <FeatureImage
          src="/Pots_Snippet.png"
          alt="my image"
          width={width}
         
        />
         <P size={size} text="center">{text.text2}</P>
      </div>

      <div>
        <FeatureImage src="/Trends_Snippet.png" alt="my image" width={width} />
        <P size={size} text="center">{text.text3}</P>
      </div>
     
    </FeaturesColumn>
    <ButtonSmall color="white">{text.button}</ButtonSmall>
    </FeaturesColumnContainer>
  );
};

export default FeaturesCol;

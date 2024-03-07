import React from "react";

import { ListFeaturesColumnContainer,FeatureListMargin,ListImage } from "@/styles/sections";
import { Button, ButtonSmall } from "@/styles/buttons";
import { H2, P, Space,mainText } from "@/styles/typography";
const ListFeaturesCol = () => {
  const mgBottom="1.5rem";
  const details = [
    {
      img: "Save.avif",
      H2: "Save",
      p1: "Earn up to 4.60% (AER/Gross fixed) interest on your savings. That’s on a 12-month Fixed Pot with a £500 minimum deposit to open. (Fixed means the money will be locked away for 12 months while you earn interest on it.)",
      p2: "We offer Easy Access Savings too, which let you get your money the next working day!",
      button: "Open a Monzo account",
      width: 500,
      height:624,
      bg: "#BBF6E2",
    },
    {
      img: "Spend.avif",
      H2: "Save",
      p1: "Get instant notifications the second you pay. Set budgets for things like groceries and going out, and get warnings if you’re spending too fast (if you want them).",
        
      button: null,
      width: 375,
      height:561,
      bg: "#FFFFFF",
      direction: "reverse",
    },
    {
      img: "Manage.avif",
      H2: "Manage",
      p1: "Pay Direct Debits through Monzo and we’ll tell you if they’re higher for the upcoming month. So no nasty surprises.",
      button: null,
      width: 380,
      height:598,
      bg: "#FFD7F0",
      mg:mgBottom,
    },
    {
        img: "Premium.avif",
        H2: "Online banking that makes a statement",
        p1: "Turn heads with our white metal card, made from steel. Enjoy peace of mind with phone and travel insurance, interest and much more.",
        p2: "Monzo Premium is £15 per month • 6 month minimum • Must be aged 18-69 • Ts&Cs apply",
        button: "Explore Monzo Premium",
        width: 500,
        height:711,
        bg: `linear-gradient(135deg,#ffe0f4,#f2fffe,#e8fbff)`,
        direction: "reverse",
        mg:mgBottom,
      },

      {
        img: "Plus.avif",
        H2: "Put money in your hands",
        p1: "Full financial visibility, with your other bank accounts and credit cards all in one place. Get interest on your money, personalised budgeting and much more.",
        p2: "Monzo Plus is £5 per month • 3 month minimum • Must be aged 18+ • Ts&Cs apply",
        button: "Explore Monzo Plus",
        width: 500,
        height:711,
        bg: `linear-gradient(135deg,#d0fff4,#f5fffd,#dffff7);`,
        
      },

      {
        img: "Travelling.avif",
        H2: "Using Monzo abroad",
        p1: "Use Monzo anywhere in the world that accepts Mastercard. We don't charge any fees for paying abroad and we pass Mastercard's exchange ratedirectly onto you, without sneaky fees or extra charges.",
        button: "Explore Monzo Premium",
        width: 370,
        height:682,
        bg: "#FFFFFF",
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

          <FeatureListMargin direction={detail.direction} >
            <H2>{detail.H2}</H2>
            <Space></Space>
            <mainText>{detail.p1}</mainText>
            <Space></Space>
            {detail.button &&  <P>{detail.p2}</P>}
            {detail.button &&  <Space></Space>}
            {detail.button && <Button>{detail.button}</Button>}
          </FeatureListMargin>
        </ListFeaturesColumnContainer>
      ))}
    </div>
  );
};

export default ListFeaturesCol;

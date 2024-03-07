'use client'

import React, {useContext} from "react";
import {
  BalanceContainer,
  RecentContainer,
  RecentSpanContainer,
  FlexBalance,
  SavingSpanContainer,
  RecentBeneficiaryContainer,
  RecentBeneficiarySpanContainer,
  RecentBeneficiarySpanContainer1,
} from "@/styles/walletStyle";
import Link from "next/link";
// import "@/app/globals.css"
import { StyledMaterialIcon,IconContainer,BalanceIcon,BalanceIconP } from '@/styles/icons';
import { P } from "@/styles/typography";

import { NumberContext } from "../provider";

function BalanceCol() {
  const { number } = useContext(NumberContext);

  const details = [
    {
      text1: "O",
      text2: "Oneal",
    },

    {
      text1: "J",
      text2: "James",
    },

    {
      text1: "A",
      text2: "Adam",
    },
    {
      text1: "M",
      text2: "Mercy",
    },
  ];

  const size = "1rem";

  const sizeSmall = "0.75rem";

  return (
    <BalanceContainer>
      <FlexBalance>
        <P size={size} color="white">
          Instant Access
        </P>
        <SavingSpanContainer>
          <P size={sizeSmall} color="white">
            Instant savings{" "}
          </P>
        </SavingSpanContainer>
        <P color="white">£{number}</P>
        <IconContainer>
        <Link href="/card">
        <BalanceIcon>
        
        <StyledMaterialIcon className="material-symbols-outlined">credit_card</StyledMaterialIcon>
        <BalanceIconP> <P size={sizeSmall} color="white"> Card{" "} </P></BalanceIconP>
        
        </BalanceIcon>
        </Link>

        <Link href="/transfer">
        <BalanceIcon>
          
        <StyledMaterialIcon className="material-symbols-outlined">ios_share</StyledMaterialIcon>
       <BalanceIconP> <P size={sizeSmall} color="white"> Send{" "} </P> </BalanceIconP>
        </BalanceIcon>
        </Link>
        </IconContainer>
      </FlexBalance>

      <RecentContainer>
        <h4>Most Recent Transfers</h4>
        <RecentSpanContainer>
          {details.map((detail, index) => (
            <RecentBeneficiaryContainer>
              <RecentBeneficiarySpanContainer>
                {detail.text1}
              </RecentBeneficiarySpanContainer>
              <span>{detail.text2}</span>
            </RecentBeneficiaryContainer>
          ))}
        </RecentSpanContainer>
      </RecentContainer>
    </BalanceContainer>
  );
}

export default BalanceCol;

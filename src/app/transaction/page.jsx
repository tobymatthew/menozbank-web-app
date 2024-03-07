import React from "react";

import {
  BeneficiariesContainer,
  TransactionContainerName,
  TransactionName,
  TransactionContainer,
  BeneficiarySpanContainer,
  BeneficiarySpanContainer2,
  TransactionSpanContainer,
  TransactionSpanContainer2
} from "@/styles/walletStyle";
import { Content } from '@/styles/nav';
import { H2,Back,BackContainer } from "@/styles/typography";
import { Transactiondetails } from "../data";
import Nav from "@/components/nav";
import Link from "next/link";
import {
  StyledMaterialIcon,
  SidebarLinkContainer,
  SidebarLinkContainerIcon,
} from "@/styles/icons";


function Transaction() {
  const color="black";
  return (
    <Content>
      <Nav/>
    <BeneficiariesContainer>
    <Link href='/home' passHref>
        <BackContainer>
          <StyledMaterialIcon
            color={color}
            className="material-symbols-outlined"
          >
            arrow_back
          </StyledMaterialIcon>

          <Back>back</Back>

        </BackContainer>
        </Link>
     <H2>Transactions </H2>
      <TransactionContainer>
      {Transactiondetails.map((detail, index) => (
        <TransactionContainerName>
         
            <TransactionName>
              <span>
              
              <BeneficiarySpanContainer2>{detail.name}</BeneficiarySpanContainer2>
              </span>
              <TransactionSpanContainer>{detail.status}</TransactionSpanContainer>
              <BeneficiarySpanContainer2>£{detail.amount}</BeneficiarySpanContainer2>
              <TransactionSpanContainer2>{detail.date}</TransactionSpanContainer2>


            </TransactionName>
       
        </TransactionContainerName>
           ))}
      </TransactionContainer>
    </BeneficiariesContainer>
    </Content>
  );
}

export default Transaction;

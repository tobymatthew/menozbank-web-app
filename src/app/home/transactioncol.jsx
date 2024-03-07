import React from "react";

import {
  BeneficiariesContainer,
  TransactionContainerName,
  TransactionName,
  TransactionContainer,
  BeneficiarySpanContainer,
  BeneficiarySpanContainer2,
  TransactionSpanContainer,
  TransactionSpanContainer2,
  TransactionColsContainer
} from "@/styles/walletStyle";
import { Content } from '@/styles/nav';
import { H2,Back } from "@/styles/typography";
import { homeTransactionList } from "../data";

function transactioncol() {
  return (
    <TransactionColsContainer>
    <h3>Transactions </h3>
    <TransactionContainer>
    {homeTransactionList.map((detail, index) => (
      <TransactionContainerName>
       
          <TransactionName>

            
            
            <BeneficiarySpanContainer2>{detail.name}</BeneficiarySpanContainer2>
            
            <TransactionSpanContainer>{detail.status}</TransactionSpanContainer>
            <BeneficiarySpanContainer2>${detail.amount}</BeneficiarySpanContainer2>
            <TransactionSpanContainer2>{detail.date}</TransactionSpanContainer2>


          </TransactionName>
     
      </TransactionContainerName>
         ))}
    </TransactionContainer>
    </TransactionColsContainer>
  )
}

export default transactioncol
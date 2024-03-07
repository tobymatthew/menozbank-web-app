import React from "react";

import {
  BeneficiariesContainer,
  BeneficiaryContainerName,
  BeneficiaryName,
  BeneficiaryContainer,
  BeneficiarySpanContainer,
  BeneficiarySpanContainer2
} from "@/styles/walletStyle";
import Nav from "@/components/nav";
import { Content } from '@/styles/nav';
import { H2, Back,BackContainer } from "@/styles/typography";
import { Beneficiarydetails } from "../data";
import Link from "next/link";
import {
  StyledMaterialIcon,
  SidebarLinkContainer,
  SidebarLinkContainerIcon,
} from "@/styles/icons";

function Beneficiaries() {
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
     <H2> Beneficiaries </H2>
      <BeneficiaryContainer>
        <BeneficiaryContainerName>
          {Beneficiarydetails.map((detail, index) => (
            <BeneficiaryName>
              <BeneficiarySpanContainer>{detail.text1}</BeneficiarySpanContainer>
              <BeneficiarySpanContainer2>{detail.text2}</BeneficiarySpanContainer2>
            </BeneficiaryName>
          ))}
        </BeneficiaryContainerName>
      </BeneficiaryContainer>
    </BeneficiariesContainer>
    </Content>
  );
}

export default Beneficiaries;

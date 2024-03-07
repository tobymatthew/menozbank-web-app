"use client";
import Beneficiaries from "@/app/beneficiaries/page";
import styled, { css } from "styled-components";

const sizes = {
  mobileS: 320, // for small mobile devices
  mobileM: 375, // for medium mobile devices
  mobileL: 480, // for large mobile devices
  tablet: 760, // for tablets
  laptop: 1024, // for laptops
  laptopL: 1440, // for large laptops
  desktop: 2560, // for desktops
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
const generateGridStyles = (props) => css`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col || 2}, 1fr);
  gap: ${(props) => props.gap || "1rem"};

  ${media.tablet`grid-template-columns: repeat(2, 1fr);`};
  ${media.mobileL`grid-template-columns: repeat(1, 1fr);`};

  // ${media.tablet`gap:0;`};

  // ${media.laptop`repeat(${(props) => props.col || 2}, 1fr);`};
`;

export const BalanceContainer = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  gap: 2rem;
  margin-top: 3rem;

  ${media.tablet`display:flex;
  flex-direction:column;
  
  `};

  // ${media.mobileL`grid-template-columns: repeat(1, 1fr);`};
`;

export const FlexBalance = styled.div`
  background-color: #FF4F40;
  border-radius: 1.5rem;
  grid-column: 1;
  padding: 1.5rem;
  box-shadow: #000000 0px 0px 0px 0px;
  ${media.tablet`grid-column:none;
     display:flex;
     flex-direction:column;
     justify-content:center;
     text-align:center;

  `};
`;

export const RecentContainer = styled.div`
  background-color: #ffffff;
  border-radius: 1.5rem;
  grid-column: 2;
  padding: 1.5rem;
  box-shadow: #000000 0px 0px 0px 0px;
  ${media.tablet`grid-column:none`};
`;

export const RecentSpanContainer = styled.div`
  display: flex;
  flex: wrap;
  background-color: #f9fbff;
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  justify-content: space-evenly;
  margin-top: 1rem;
  ${media.tablet`
  flex-direction:column;
  align-items:center;
   `};
`;

export const SavingSpanContainer = styled.span`
  display: inline-block;
  background-color: #B3413B;
  border-radius: 1rem;
  margin: 0.5rem 0 1rem;
  padding: 0.5rem 0.75rem;
`;

export const RecentBeneficiaryContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 0.75rem;
  align-items: center;
  flex-direction: column;
  padding: 0.8rem 3.9rem;
  ${media.tablet`
    align-items:space-between;
    ${media.tablet`width:50%`};
    margin-top:1rem;

   `};
`;

export const RecentBeneficiarySpanContainer = styled.span`
  display: inline-block;
  border-radius: 100%;
  background-color: #f9fbff;
  padding: 0.5rem 0.7rem;
  margin-bottom: 0.9rem;
  font-size: 0.9rem;
  font-weight: 450;
`;

export const AccountContainer = styled.div`
  margin-top: 4rem;
`;

export const AccountCard = styled.div`
  background-color: #fff;
  border-radius: 0.75rem;
  padding: 2.0rem 0.8rem;
  box-shadow: #000000 0px 0px 0px 0px;
  width: 15%;
  margin-right: 3rem;

  ${media.tablet`width:35%;
  margin-bottom:1rem;
  margin-right:2rem;
font-size:1rem;
`};
`;

export const AccountCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  ${media.tablet`padding-bottom:2rem;
     justify-content:center;
  `};
`;

export const AccountCardSpan = styled.span`
  display: block;
  font-size:1rem;
  ${media.tablet`width:100%;
  font-size:0.7rem;
  `};
`;

export const BeneficiariesContainer = styled.div`
  margin-top: 4rem;
`;

export const BeneficiaryContainer = styled.div`
  margin-top: 1.2rem;
  background-color: #ffffff;
  border-radius: 0.2rem;
  padding: 1.5rem 2rem;
    
  ${media.tablet`
  height:100vh;
font-size:0.9rem;
overflow-y:scroll;
`};
`;

export const BeneficiaryContainerName = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  align-items: flex-start;
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

export const BeneficiaryName = styled.div`
  //  display:flex;
  //  flex:wrap;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  padding: 0 1rem;
  margin-bottom: 2.5rem;
`;

export const BeneficiarySpanContainer = styled.span`
  display: inline-block;
  border-radius: 100%;
  background-color: #eeeeee;
  padding: 0.5rem 0.7rem;
  font-size: 0.9rem;
  font-weight: 450;
  color: #ff8200;
  margin-right: 1rem;
`;

export const BeneficiarySpanContainer2 = styled.span`
  display: inline-block;
`;

export const TransactionSpanContainer = styled.span`
  display: inline-block;
  color: #84d488;
  font-size: 1rem;
`;

export const TransactionSpanContainer2 = styled.span`
  display: inline-block;
  color: #d3d3d3;
  font-size: 1rem;
`;

export const TransactionContainerName = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.8rem;
  padding-top: 1.5rem;
  border-bottom: 0.1rem solid #eeeeee;

`;

export const TransactionContainer = styled.div`
  margin-top: 1.5rem;
  background-color: #ffffff;
  border-radius: 0.6rem;
  
  ${media.tablet`

font-size:0.6rem;

`};
  `;

export const TransactionName = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  justify-content: space-around;
  padding: 0 1rem;
`;

export const AddAccountContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  background-color: #ffffff;
  border-radius: 0.6rem;
  padding: 2rem;
  justify-content: center;
  width: 50%;

  ${media.tablet`width:100%;
  font-size:1rem;
  `};
`;
  
export const TransactionColsContainer=styled.div`
    margin-top:3rem;
`;

export const EditContainer=styled.div`
background-color: #F5F7F8;
height:100vh;
display:flex;
justify-content:center;
padding:3rem 0;

`;


export const EditFormContainer = styled.div`
  padding:4rem;
`;

export const EditForm= styled.form`
display:flex;
flex-direction:column;
background-color: #ffffff;
border-radius: 0.6rem;
padding: 3rem;

${media.tablet`width:100%;
font-size:1rem;
`};
`;

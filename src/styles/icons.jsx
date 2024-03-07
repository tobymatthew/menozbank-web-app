"use client";
import styled, { css } from "styled-components";



;

export const  StyledMaterialIcon = styled.span`
  color: ${(props) => props.color || "#FFFFFF"};
  display:block;
  &:hover {
    color: ${(props) => props.hovercolor || "none"}
  }
`;

export const IconContainer= styled.div`
  display:flex;
  margin-top:2rem;
  justify-content:space-evenly
`

export const  BalanceIcon = styled.div`
  display:flex;
  background-color: #B3413B;
  border-radius: 1rem;
  margin-right: 0.5rem;
  padding: 0.3rem 0.7rem;
`;
export const  BalanceIconP = styled.div`
   margin-top: 0.5rem;
   margin-left: 0.2rem;
`;

export const  AccountIcon = styled.div`
   margin-bottom: 0.5rem;
`;


export const  SidebarLinkContainer = styled.div`
   display:flex;
   padding: 0.5rem 0.8rem 0 1rem;
   margin-top:1.4rem;
   &:hover {
    color: #fff;
    background-color:#B3413B;
  }
  
   `;


export const SidebarLinkContainerIcon= styled.div`
    margin-right: 0.5rem;
`;
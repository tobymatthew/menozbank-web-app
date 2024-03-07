"use client";

import React, { useContext } from "react";
import { Sidebar, SidebarLink, Span,IconImage } from "@/styles/nav";
import Link from "next/link";
import {
  StyledMaterialIcon,
  SidebarLinkContainer,
  SidebarLinkContainerIcon,
  
} from "@/styles/icons";

import { NumberContext } from "@/app/provider";
function SideNav() {
  const { isOpen, toggleSidebar } = useContext(NumberContext);

  const details = [
    {
      id: 1,
      text1: "Home",

      icon: "home",

      href:"/home"
    },

    {
      id: 2,
      text1: "Beneficiaries",

      icon: "account_balance",
      href:"/beneficiaries"
    },

    {
      id: 3,
      text1: "Transaction",

      icon: "history",
      href:"/transaction"
    },

    {
      id: 4,
      text1: "Transfer",
      icon: "send",
      href:"/transfer"
    },
    {
      id: 5,
      text1: "Bill Payment",
      icon: "description",
      href:"/bill"
    },

    {
      id: 6,
      text1: "Card",
      icon: "credit_card",
      href:"/card"
    },

    {
      id: 7,
      text1: "Transport",
      icon: "connecting_airports",
      href:"/transport"
    },

    {
      id: 8,
      text1: "Shopping",
      icon: "shopping_bag",
      href:"/home"
    },

    {
      id: 9,
      text1: "Logout",
      icon: "logout",
      href:"/logout"
    },
  ];

  const color = "#B3413B";
  const hovercolor="#fff"
  return (
    <>
      {isOpen && (
        <Sidebar isOpen={isOpen}>
          <Span>
            <IconImage src="/monzo-logo-on-dark.svg" alt="my image" width="180" />
          </Span>
          {details.map((detail, index) => (
            <Link href={detail.href} passHref>
              <SidebarLinkContainer>
                <SidebarLinkContainerIcon>
                  <StyledMaterialIcon
                    color={color}
                    hovercolor={hovercolor}
                    className="material-symbols-outlined"
                  >
                    {detail.icon}
                  </StyledMaterialIcon>
                </SidebarLinkContainerIcon>

                <SidebarLink>{detail.text1}</SidebarLink>
              </SidebarLinkContainer>
            </Link>
          ))}
        </Sidebar>
      )}
    </>
  );
}

export default SideNav;

"use client";

import React from "react";

import {
  AccountContainer,
  AccountCard,
  AccountCardSpan,
  AccountCardContainer,
} from "@/styles/walletStyle";
import { Allerta } from "next/font/google";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { StyledMaterialIcon, AccountIcon } from "@/styles/icons";

function Account() {
  const router = useRouter();

  const details = [
    {
      id: 1,
      text1: "Transaction",
      text2: "History",
      height: "none",
      routes: "/transaction",
      icon: "history",
    },

    {
      id: 2,
      text1: "Add",
      text2: "Bank",
      height: "none",
      routes: "/add-account",
      icon: "account_balance",
    },

    {
      id: 3,
      text1: "Beneficiaries",
      height: "height",
      routes: "/beneficiaries",
      icon: "loyalty",
    },

    {
      id: 4,
      text1: "Send",
      height: "height",
      routes: "/transfer",
      icon: "send",
    },
  ];

  const onClick = (detail) => {
    return router.push(detail.routes);
  };
  //B3413B
  const color = "#FF4F40";

  return (
    <AccountContainer>
      <h4>Account</h4>
      <AccountCardContainer>
        {details.map((detail, index) => (
          <AccountCard height={detail.height}>
            <Link href={detail.routes} passHref>
              <AccountIcon>
                <StyledMaterialIcon
                  color={color}
                  className="material-symbols-outlined"
                >
                  {detail.icon}
                </StyledMaterialIcon>
              </AccountIcon>
              <AccountCardSpan>{detail.text1}</AccountCardSpan>
              <AccountCardSpan>{detail.text2}</AccountCardSpan>
            </Link>
          </AccountCard>
        ))}
      </AccountCardContainer>
    </AccountContainer>
  );
}

export default Account;

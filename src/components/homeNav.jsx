"use client";

import React from "react";
import {
  LogoContainer,
  ButtonNavContainer,
  MainNavContainer,
  ButtonNaSpan
} from "@/styles/nav";
import Link from "next/link";
function HomeNav() {
  return (
    <MainNavContainer>
      <LogoContainer>
        <img src="/monzo-logo-on-dark.svg" alt="my image" width="180" />
      </LogoContainer>
      <ButtonNavContainer>
        
          <Link href="/login" passHref>
     
            Sign In
           
          </Link>
        
      </ButtonNavContainer>
    </MainNavContainer>
  );
}

export default HomeNav;

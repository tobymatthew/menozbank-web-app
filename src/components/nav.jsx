'use client'

import React, {useContext} from "react";
import { Navs,IconSpan } from '@/styles/nav'
import { HamburgerButton,HamburgerContainer,H1,HamburgerButtonContainer } from "@/styles/buttons";
import { NumberContext } from "@/app/provider";
function Nav() {
  const { username,isOpen, toggleSidebar } = useContext(NumberContext);


  const firstLetter =typeof window !== "undefined" ? username.charAt(0):null;

  return (
    <Navs>


      <HamburgerContainer>
      <HamburgerButtonContainer>
      <HamburgerButton onClick={toggleSidebar}>
        <div />
        <div />
        <div />
      </HamburgerButton>
      </HamburgerButtonContainer>
    <H1>
     <span>Hello,</span>
     <span>{username}</span>
    </H1>
    </HamburgerContainer>

    <div>
      <IconSpan>{firstLetter}</IconSpan>
    </div>

    </Navs>
  )
}

export default Nav
"use client";
import React, {useContext,useState,useEffect} from "react";
import { Content } from "@/styles/nav";
import Nav from "@/components/nav";
import BalanceCol from "./balanceCol";
import Account from "./Account";
import Transactioncol from "./transactioncol";
import { NumberContext } from "../provider";

const Home = () => {
  const { isOpen, toggleSidebar,setIsOpen } = useContext(NumberContext);
  return (
    <Content isOpen={isOpen}>
      <Nav />
      <div>
        <BalanceCol />
        <Transactioncol/>
        <Account />
      </div>
    </Content>
  );
};

export default Home;

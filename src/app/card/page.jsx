"use client";

import React, { useContext, useState, useEffect } from "react";

import { NumberContext } from "../provider";
import { TransactionInput, TransactionButton } from "@/styles/form";
import { Button } from "@/styles/buttons";
import { Content } from "@/styles/nav";
import { useRouter } from "next/navigation";
import {
  BeneficiariesContainer,
  AddAccountContainer,
  FormContainer,
} from "@/styles/walletStyle";
import { H3, Back,BackContainer } from "@/styles/typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "@/components/nav";
import Link from "next/link";
import {
  StyledMaterialIcon,
  SidebarLinkContainer,
  SidebarLinkContainerIcon,
} from "@/styles/icons";
const Card = () => {
   
  const { username, setUsername, amount, setAmount, number, setNumber } =
  useContext(NumberContext);
const [user, setUser] = useState("");
const [password, setPassword] = useState("");
const [acct, setacct] = useState("");
const [cvc, setCvc] = useState("");
const [showPassword, setShowPassword] = useState(false);
const [loading, setLoading] = useState(false);

const router = useRouter();

const handleLogin = (e) => {
  e.preventDefault();
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  
      return toast.success("Card Added", {
        autoClose: 2000,
      });
   
  }, 3000);
  // Add your own login logic here
};

const handleChange = (event) => {
  setAmount(event.target.value);
};

useEffect(() => {
  return () => {
    // Clean up timer on component unmount
    clearTimeout(handleLogin);
  };
}, []);
 const color='black';
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
      <AddAccountContainer>
        <FormContainer onSubmit={handleLogin}>
          <H3>Card details</H3>
          <TransactionInput
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Name on card"
            required
          />

          <TransactionInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Card number"
            required
          />

          <TransactionInput
            type="number"
            value={acct}
            onChange={(e) => setacct(e.target.value)}
            placeholder="Expiry date"
            required
          />

          <TransactionInput
            type="number"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            placeholder="CVC"
            required
          />

          <TransactionButton type="submit">
            {" "}
            {loading ? "Loading..." : "Add card"}
          </TransactionButton>
        </FormContainer>
      </AddAccountContainer>
    </BeneficiariesContainer>
    <ToastContainer autoClose={2000} />
  </Content>
);
}

export default Card;

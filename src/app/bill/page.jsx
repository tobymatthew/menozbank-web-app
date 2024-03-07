"use client";

import React, { useContext, useState, useEffect } from "react";

import { NumberContext } from "../provider";
import { TransactionInput, TransactionButton,Select} from "@/styles/form";
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
const Bill= () => {
 
  const { username, setUsername, amount, setAmount, number, setNumber } =
  useContext(NumberContext);
const [user, setUser] = useState("");
const [password, setPassword] = useState("");
const [acct, setacct] = useState("");
const [amounts, setAmounts] = useState("");
const [showPassword, setShowPassword] = useState(false);
const [loading, setLoading] = useState(false);

const router = useRouter();

const handleLogin = (e) => {
  e.preventDefault();
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    if (number >= amount) {
      // const recentAmount = number - amount;
      // setNumber(recentAmount);
      return toast.error("Payment Failed, Please contact support", {
        autoClose: 5000,
      });
    } else {
      return toast.error("insufficient funds", {
        autoClose: 5000,
      });
     
    }
  }, 3000);
  // Add your own login logic here
};

const handleChange = (event) => {
  setAmount(event.target.value);
};


const flavors = ['Cable Tv', 'Electric', 'Insurance', 'Taxes','Internet','Water'];

const [selectedFlavor, setSelectedFlavor] = useState('');

const handleSelectChange = (event) => {
  setSelectedFlavor(event.target.value);
};

useEffect(() => {
  return () => {
    // Clean up timer on component unmount
    clearTimeout(handleLogin);
  };
}, []);

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
      <AddAccountContainer>
        <FormContainer onSubmit={handleLogin}>
          <H3>Bill Payment</H3>
          <Select value={selectedFlavor} onChange={handleSelectChange} required>
        <option value="" hidden>
          Select Category
        </option>
        {flavors.map((flavor) => (
          <option key={flavor} value={flavor}>
            {flavor}
          </option>
        ))}
      </Select>

          <TransactionInput
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Biller"
            required
          />


         <TransactionInput
            type="number"
            value={amounts}
            onChange={(e) => setAmounts(e.target.value)}
            placeholder="Amount"
            required
          />
          <TransactionInput
            type="text"
            value={acct}
            onChange={(e) => setacct(e.target.value)}
            placeholder="Narration"
            
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

export default Bill;

"use client";

import React, { useContext, useState, useEffect } from "react";

import { NumberContext } from "../provider";
import { TransactionInput, TransactionButton } from "@/styles/form";
import { Button } from "@/styles/buttons";
import { Content } from "@/styles/nav";
import { useRouter } from "next/navigation";
import Nav from "@/components/nav";
import {
  BeneficiariesContainer,
  AddAccountContainer,
  FormContainer,
} from "@/styles/walletStyle";
import { H3, Back } from "@/styles/typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//////////////////////////main function /////////////////////////////////////////////
function AddAccount() {
  const text = {
    header: "Welcome to Monzo Internet Banking",
    subheader1: "Sign in with your Internet Banking details.",

    button: "Open a Monzo account",
  };

  const [user, setUser ] = useState("");
  const [password, setPassword] = useState("");
  const [acct, setacct] = useState("");
  const [rtNumber, setrtNumber] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const notify = () => toast("Wow so easy!");

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      return toast.success("Account added successfully", {
        autoClose: 2000,
      });
    }, 3000);
    // Add your own login logic here
  };

  useEffect(() => {
    return () => {
      // Clean up timer on component unmount
      clearTimeout(handleLogin);
    };
  }, []);

  return (
    <Content>
      <Nav />
      <BeneficiariesContainer>
        <Back>back</Back>
        <AddAccountContainer>
         
          <FormContainer onSubmit={handleLogin}>
          <H3>Add Account</H3>
            <TransactionInput
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Username"
              required
            />

            <TransactionInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />

            <TransactionInput
              type="text"
              value={acct}
              onChange={(e) => setacct(e.target.value)}
              placeholder="Account number"
              required
            />

            <TransactionInput
              type="text"
              value={rtNumber}
              onChange={(e) => setrtNumber(e.target.value)}
              placeholder="Routing number"
              required
            />

            <TransactionButton type="submit">
              {" "}
              {loading ? "Loading..." : "Add"}
            </TransactionButton>
          </FormContainer>
        </AddAccountContainer>
      </BeneficiariesContainer>
      <ToastContainer autoClose={2000} />
    </Content>
  );
}

export default AddAccount;

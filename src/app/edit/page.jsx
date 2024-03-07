'use client'

import React, { useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NumberContext } from "../provider";
import {

  EditContainer,
  EditFormContainer,
  EditForm
} from "@/styles/walletStyle";

import { TransactionInput, TransactionButton } from "@/styles/form";

const Edit = () => {
    const { number, setNumber } = useContext(NumberContext);
     const [user, setUser] = useState("");
     const [loading, setLoading] = useState(false);
    const handleLogin = (e) => {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        
        setLoading(false);
          return toast.success("Edited Succesful", {
            autoClose: 1000,
          });
       
      }, 1000);
      // Add your own login logic here
    };
    const handleChange = (e) => {
      setNumber(e.target.value);
    };
  
    return (
      <EditContainer>
        <EditFormContainer>
        <EditForm onSubmit={handleLogin}>
        <TransactionInput type="number" value={number} onChange={handleChange} />

        <TransactionButton type="submit"> {loading ? "Loading..." : "Edit"}</TransactionButton>
        </EditForm>
        </EditFormContainer>
        <ToastContainer autoClose={2000} />
      </EditContainer>
    );
}

export default Edit;

"use client";
import styled, { css } from "styled-components";

const primary = "#091723";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const Input = styled.input`
  padding: 1rem;
  width: 80%;
  color: #ffffff;
  border: 1px solid #808080;
  border-radius: 7px;
  font-size: 1rem;
  background-color: ${primary};
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  margin: 10px 0;
  padding: 10px;
`;

export const TransactionInput = styled.input`
  padding: 0.8rem;
  color: #000000;
  border:none;
  border-bottom: 1px solid #808080;
  border-radius: 3px;
  font-size: 1rem;
  background-color: #ffffff;
  margin-bottom: 1.5rem;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const TransactionButton = styled.button`
  width:100%;
  background-color:#B3413B;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.13em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem 1rem;
`;

export const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 0.5rem;
  margin-bottom:1rem;

  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
'use client'
import styled from 'styled-components';

// const primaryRed="#ff4b44";
 const primary='#016B83';

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.13em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width:80%;

  @media (max-width: 600px) {
    width: 100%;
  }


`;

export const ButtonSmall=styled.button`
padding: 15px 20px;
background-color: ${primary};
color: white;
border: none;
border-radius: 5px;
font-size: 1.13em;
cursor: pointer;
transition: all 0.2s ease-in-out;
width:25%;
justify-item: center;
margin:5rem 25rem;

@media (max-width: 600px) {
  width: 100%;
}


`;

export const HamburgerContainer = styled.div`
    display:flex;
    justify-items: space-between;
`;


export const HamburgerButtonContainer = styled.div`
    margin-right: 1rem;
`;


export const HamburgerButton = styled.button`
 
  top: 10px;
  left: 3px;
  display: none; /* The button is hidden by default */
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
 
 

  div {
    width: 2rem;
    height: 0.25rem;
    background: #333;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  
    }

  /* The button is displayed on smaller screens */
  @media (max-width: 768px) {
    display: flex;
    
  }
`;



 export const H1= styled.div`
    margin-top: 0.2rem;  
    font-size:1.5rem; 
 `;
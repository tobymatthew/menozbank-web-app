'use client'
import React, {createContext,useState,useEffect} from "react";

export const NumberContext = createContext({});
const Provider = ({children}) => {
    const [number, setNumber] = useState(() => {
        // Try to read the number from local storage
        const storedNumber =typeof window !== "undefined" ?window.localStorage.getItem('number'):false;
        return storedNumber !== null ? Number(storedNumber) : 100000;
      });

      const [amount, setAmount] = useState(() => {
        // Try to read the number from local storage
        const storedAmount = typeof window !== "undefined" ?window.localStorage.getItem('amount'):false;
        return storedAmount !== null ? Number(storedAmount) : number;
      });

      const [username, setUsername] =  useState(() => {
        // Try to read the number from local storage
        const storedUsername = typeof window !== "undefined" ?window.localStorage.getItem('username'):false;
        return storedUsername !== null ? storedUsername : "Lucas";
      });

      const [isOpen, setIsOpen] = useState(true);

      const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };


      useEffect(() => {
        typeof window !== "undefined" ?window.localStorage.setItem('number', number):false;
        typeof window !== "undefined" ?window.localStorage.setItem('amount', amount):false;
      }, [number, amount]);

    return (
            <NumberContext.Provider value={{ number, setNumber,username,setUsername,toggleSidebar,isOpen,amount,setAmount,setIsOpen}}>
      {children}
    </NumberContext.Provider>
    );
}

export default Provider;


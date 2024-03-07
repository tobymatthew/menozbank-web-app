"use client";

import React, {useContext,useState,useEffect} from "react";
import { Layout as Layouts } from '@/styles/nav';
import SideNav from '@/components/sideNav';
import { NumberContext } from "../provider";

const Layout = ({children}) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const { isOpen, toggleSidebar,setIsOpen } = useContext(NumberContext);
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
    
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
      }, [setScreenSize]);

      useEffect(() => {
        if (screenSize <= 760) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
      }, [screenSize,]);
    return (
        <Layouts isOpen={isOpen}>
       {isOpen && ( <SideNav/>)}
        {children} 
        </Layouts>
    );
}

export default Layout;

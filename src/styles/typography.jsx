'use client'
import styled, { css } from "styled-components";

const primaryRed="#ff4b44";
const opensans='Open Sans';
const h2Black='#091723';
const white ="#ffffff";

const sizes = {
   mobileS: 320, // for small mobile devices
   mobileM: 375, // for medium mobile devices
   mobileL: 480, // for large mobile devices
   tablet: 760, // for tablets
   laptop: 1024, // for laptops
   laptopL: 1440, // for large laptops
   desktop: 2560, // for desktops
 };

const media = Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
     @media (max-width: ${sizes[label]}px) {
       ${css(...args)};
     }
   `;
   return acc;
 }, {});

export const H1  = styled.h1`
color:${props => (props.color === "white" ? white : primaryRed)};
   font-family:${opensans};
   font-size: 2rem; /* 32px/16px = 2rem */
   font-weight: 700;

`;
export const H2  = styled.h2`
   color:${props => (props.color === "white" ? white : h2Black)};
   font-family:${opensans};
   font-size:1.5rem; /* 24px/16px = 1.5rem */

`;
export const P  = styled.p`
   color:${props => (props.color === "white" ? white : h2Black)};
   font-family:${opensans};
   font-size: ${(props) => props.size || "1.25rem"}; /* 20px/16px = 1.25rem */ 
   text-align:${props => (props.text === "center" ? "center" : "none")};
`;
export const Space  = styled.div`
   margin-bottom: 2rem;
`;

export const Span=styled.div`
   background-color:#f2f8f3;
   font-weight:600;
   border-radius:0.25rem;
   display: inline-block;
   padding: 0.25rem 0.75rem;
   margin-bottom: 0.4rem;
`;


export const H4  = styled.h4`
   color:${props => (props.color === "white" ? white : h2Black)};
   font-family:${opensans};
   font-size:1.5rem; /* 24px/16px = 1.5rem */

`;

export const H3= styled.h2`
   text-align:center;
   margin-bottom:1.5rem;
`;

export const Back= styled.p`
   font-size:1.1rem;
   margin-bottom:1.5rem;
   color:#091723;
   margin-left:0.3rem;
`;

export const BackContainer = styled.div`
  display:flex;
`;

export const mainText = styled.p`
   color:#fff;
   font-family:${opensans};
   font-size: ${(props) => props.size || "1.25rem"}; /* 20px/16px = 1.25rem */ 
   text-align:${props => (props.text === "center" ? "center" : "none")};

   ${media.tablet`font-size:1rem;`};
  ${media.mobileM`font-size:0.8rem;`};
`;

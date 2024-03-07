"use client"
import styled, { css } from "styled-components";
//#004E60
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
export const Layout = styled.div`
  display: ${props => (props.isOpen ? 'grid' : 'block')}; 
  grid-template-columns:  ${props => (props.isOpen ? '12.5rem auto' : 'none')};
  height: 100vh;
   ${media.tablet`
   grid-template-columns:  ${props => (props.isOpen ? '9rem auto' : 'none')};
 
  `};
 
`;

export const Sidebar = styled.div`
  grid-column:${props => (props.isOpen ? '1' : 'none')}; 
  background-color: #FFF;
  overflow: hidden;
  padding: 1.25rem 0 10px;
  display:flex;
  flex-direction: column;
  align-items: center;
  align-items: space-between;
  height: 100vh;
  position:sticky;
  top: 0;
  left: 0;
  /* The sidebar is displayed by default */
  display: block;

  /* Add responsiveness */
  // @media (max-width: 1024px) {
  //   width: 150px;
  // }
  // @media (max-width: 768px) {
  //   width: 100px;
  //   /* The sidebar is hidden on smaller screens */
  //   display: ${props => (props.isOpen ? 'block' : 'none')};
  // }

  ${media.tablet`
  display: ${props => (props.isOpen ? 'block' : 'none')};
 
  `};
 
`;

export const SidebarLink = styled.a`
  // padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 0.9rem;
  color: #000;
  display: block;

  &:hover {
    color: #fff;
  }

`;

export const Content = styled.div`
  grid-column:2;
  padding: 2rem 2.5rem;
  background-color: #F5F7F8;
  width: 100%;
  height: 100%;
  overflow-y:scroll;

  ${media.tablet`display:flex;
  flex-direction:column;
  // padding:${props => (props.isOpen ? '0' : '2rem 2.5rem') }
  // height: 200vh;
  `};

  ${media.mobileM`
   padding:${props => (props.isOpen ? '0' : '2rem 2.5rem') }
  // height: 200vh;
  `};
  
`;

export const Span= styled.span`
   display: inline-block;
   margin-bottom: 1rem;
   background-color:#FF4F40;
`;

export const Navs= styled.div`
    display:flex;
    justify-content: space-between;
`;

export const MainNavContainer= styled.div`
    display:flex;
    justify-content: space-between;
    padding : 0.8rem 0.8rem;
    background-color:#091723;
`;

export const LogoContainer= styled.div`
   padding:1rem;
   width:15%;
`;

export const ButtonNavContainer= styled.div`
padding:1rem;
color:white;
`;



export const ButtonNaSpan= styled.span`
display: block;
padding:1rem;
background-color:#004e60;
border-radius:6px;

`;

export const IconSpan= styled.span`
display: block;
padding:1rem;
background-color:#B3413B;
border-radius:50%;
color:#fff;

`;

export const IconImage= styled.img`
${media.tablet`
width:100%;
`
}
`;
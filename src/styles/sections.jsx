"use client";
import styled, { css } from "styled-components";

const sizes = {
  mobileS: 320, // for small mobile devices
  mobileM: 375, // for medium mobile devices
  mobileL: 480, // for large mobile devices
  tablet: 760, // for tablets
  laptop: 1024, // for laptops
  laptopL: 1440, // for large laptops
  desktop: 2560, // for desktops
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
const generateGridStyles = (props) => css`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col || 2}, 1fr);
  gap: ${(props) => props.gap || "1rem"};

  ${media.tablet`grid-template-columns: repeat(2, 1fr);`};
  ${media.mobileL`grid-template-columns: repeat(1, 1fr);`};

  // ${media.tablet`gap:0;`};

  // ${media.laptop`repeat(${(props) => props.col || 2}, 1fr);`};
`;
const sectionContainer = (props) => css`
  padding: 1.2rem;
  align-items: center;
  // justify-items: center;
`;
export const Header = styled.div`
  ${generateGridStyles};
  ${sectionContainer};
  background-color: #091723;
  height: 100vh;

  ${media.tablet`padding:1.2rem 2.5rem;`};
  ${media.mobileM`padding:2.0rem 2.9rem;`};
`;

export const HeaderImage = styled.img`
  width: 630px;
  height: 530px;

  ${media.tablet`height:100%;`};
  ${media.tablet`width:100%;`};
  ${media.mobileM`width:83%;`};
`;

export const FeatureImage = styled.img`
  margin-bottom:1rem;

  // ${media.tablet`height:100%;`};
  ${media.tablet`width:100%;`};
  ${media.mobileM`width:83%;`};
`;

export const ListImage = styled.img`
  

 
  ${media.tablet`display:none;`};
  ${media.mobileM`display:none;`};
`;

export const RatingColumn = styled.div`
  ${sectionContainer};
  display:flex;
  flex-direction:column;
  justifiy-content:center;
  height:50vh;  
  padding:50px 50px;

  background-color: #F2F8F3;
`;

export const FlexContainer = styled.div`
  display: flex;
  `;
  
  export const SpaceRight = styled.div`
  margin-right: 1rem;
  `;

  export const SpaceBottom = styled.div`
  margin-bottom: 4rem;
  `;

  export const FeaturesColumnContainer = styled.div`
   padding:5.2rem 7rem;
  `;

  export const FeaturesColumn = styled.div`
  ${generateGridStyles};
  `;

  export const ListFeaturesColumnContainer = styled.div`
    display:flex;
    flex-direction:${props => (props.direction === "reverse" ? "row-reverse" : "row")};
    background:${props=>(props.bg)};
    align-items: center;
    padding:2rem 2rem 0 2rem;
    border-radius: 1.9rem;
    margin:0 0.35rem;
    margin-bottom:${props => (props.mg)};

    ${media.tablet`display:block;
    border-radius:0;
    padding-bottom:1rem;
    margin:0;
    margin-bottom:0.5rem;
    `};
    ${media.mobileM`display:block;
    border-radius: none;
    `};
  `;

  export const FeatureListMargin= styled.div`
   margin-right:${props => (props.direction === "reverse" ? "7.125rem" : "7.125rem")}
  `;

  export const GridimgContainer=styled.div`
   ${generateGridStyles};
  `;

  export const ServiceColumn=styled.div`
  padding:2rem;
   `;

   export const ServiceTextContainer= styled.div`
       margin-bottom:2rem;
   `;

   export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SpaceSpan=styled.span`
  margin-bottom:0.5rem;
  display:inline-block;
`;

export const LoginLayout=styled.div`
   background-color:#091723;
`;
export const LoginLayoutSpan=styled.span`
  display:inline-block;
  margin-left:1rem;
  margin-top:1rem;
`;
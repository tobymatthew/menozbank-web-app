import React from 'react'
import { H1} from "@/styles/typography";
import { LoginLayout,LoginLayoutSpan } from "@/styles/sections";
const Layout = ({children}) => {
  return (
    <LoginLayout>
      <LoginLayoutSpan><H1 color="white" >Monzo</H1> </LoginLayoutSpan>
      {children}
    </LoginLayout>
  )
}

export default Layout
import * as React from "react"
import "../styles.css"
import { Slice } from "gatsby"
import CustomCookieConsent from './CustomCookieConsent';


const Layout = ({ children }) => {
  return (
    <>
          

      <Slice alias="header" />
      {children}
      <Slice alias="footer" />
      <CustomCookieConsent />
    </>
  )
}

export default Layout

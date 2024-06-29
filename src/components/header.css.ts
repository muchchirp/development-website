
import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const desktopHeaderNavWrapper = style({
  position: "fixed",
  top: 24,
  left: 0,
  right: 0,
  zIndex: 900,
  backgroundColor: 'white',
  
  display: "none",
  "@media": {
    [media.small]: {
      display: "block",
      paddingTop: theme.space[0],
    },
  },
})

const mobileHeaderNavWrapperBase = style({
  display: "block",
  position: "sticky",
  top: 0,
  zIndex: 2,
  paddingTop: theme.space[3],
  "@media": {
    [media.small]: {
      display: "none",
    },
  },
})

export const mobileHeaderNavWrapper = styleVariants({
  open: [
    mobileHeaderNavWrapperBase,
    {
      background: theme.colors.primary,
    },
  ],
  closed: [mobileHeaderNavWrapperBase],
})

export const mobileNavSVGColorWrapper = styleVariants({
  primary: [{ color: theme.colors.primary }],
  reversed: [{ color: theme.colors.background }],
})

export const mobileNavOverlay = style({
  position: "absolute",
  width: "100vw",
  height: "100vh",
  paddingTop: theme.space[4],
  background: theme.colors.primary,
  zIndex: 2,
  "@media": {
    [media.small]: {
      display: "none",
    },
  },
})

export const mobileNavLink = style({
  display: "block",
  color: theme.colors.background,
  fontSize: theme.fontSizes[4],
  paddingTop: theme.space[2],
  paddingBottom: theme.space[2],
  paddingLeft: theme.space[4],
  paddingRight: theme.space[4],
})

// New styles for the IP detection bar
export const ipBar = style({
  backgroundColor: 'black',
  padding: '5px',
  textAlign: 'center',
  zIndex: 1000,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  fontSize: '12px', // Set font size to 12px
  color: 'white', // Ensure default text color is white

})

export const ipBarProtected = style({
  color: 'lightgreen !important',
  fontWeight: 'bold' // Make the text bold

})

export const ipBarUnprotected = style({
  color: 'pink !important',
  fontWeight: 'bold' // Make the text bold

})

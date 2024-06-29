import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"



export const giftContainer = style({
  display: 'flex',
  justifyContent: 'space-around',
  background: '#f5f5f5',
  // add more styles here
});

export const giftStep = style({
  background: '#ffffff',
  padding: theme.space[3],
  margin: theme.space[3],
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  textAlign: 'center',
  // add more styles here
});


// specific maxWidths are to support design and
// current length of content in the Header and Text
export const whatHeroHeader = style({
  maxWidth: "1108px",
})

export const whatHeroText = style({
  fontSize: theme.fontSizes[3],
  marginBottom: theme.space[5],
  maxWidth: "798px",
  "@media": {
    [media.small]: {
      fontSize: theme.fontSizes[4],
    },
  },
})

export const whatHeroImage = style({
  width: "100%",
})

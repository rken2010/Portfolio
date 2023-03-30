import { extendTheme } from '@chakra-ui/react'


const colors = {
    primary: {
      SoftOrange: "hsl(35, 77%, 62%)",
      SoftRed: "hsl(5, 85%, 63%)"
    },
    neutral:{
      OffWhite: "hsl(36, 100%, 99%)",
      GrayishBlue: "hsl(233, 8%, 79%)",
      DarkGrayishBlue: "hsl(236, 13%, 42%)",
      VeryDarkBlue: "hsl(240, 100%, 5%)"
    }
  }

  const fonts = {
      body: "system-ui, sans-serif",
      heading: "Inter",
      mono: 'Inter',
    }


export const theme = extendTheme({colors, fonts})


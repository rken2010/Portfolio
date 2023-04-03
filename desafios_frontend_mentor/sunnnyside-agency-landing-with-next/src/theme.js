import { extendTheme } from '@chakra-ui/react'


const colors = {
    primary: {
      100: "hsl(7, 99%, 70%)",
      200: "hsl(51, 100%, 49%)",
      300: "hsl(167, 40%, 24%)",
      400: "hsl(198, 62%, 26%)",
      500: "hsl(168, 34%, 41%)"
    },
    neutral:{
      100: "hsl(212, 27%, 19%)",
      200: "hsl(213, 9%, 39%)",
      300: "hsl(232, 10%, 55%)",
      400: "hsl(210, 4%, 67%)",
      500: "hsl(0, 0%, 100%)"
    }
  }

  const fonts = {
      body: "system-ui, sans-serif",
      heading: "Fraunces",
      mono: 'Barlow',
    }


export const theme = extendTheme({colors, fonts})
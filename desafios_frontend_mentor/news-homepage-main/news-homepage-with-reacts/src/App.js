import Header from './components/Header/Header';
import { ChakraProvider, Container, Stack } from '@chakra-ui/react'
import Popular from './components/Popular/Popular';
import {popular, news, trending } from "./content"
import News from './components/News/News';
import Trending from './components/Trending/Trending';
import { theme } from './theme';



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container
        maxW={{base:"90%", md:"80%"}}
      >
      <Stack
        spacing={15}
      >
      <Header />
      <Stack
        direction={{base:"column", md:"row"}}
      >
      <Popular popular={ popular }/>
      <News news={ news } />
      </Stack>
      <Trending trending={trending}/>
      </Stack>
      </Container>
    </ChakraProvider>
  );
}

export default App;

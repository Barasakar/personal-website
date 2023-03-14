import './App.css';
import { Box, Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';
function App() {

  return (
  <Container>
    <Navbar />
     <Box display="flex" alignItems="center" justifyContent="space-between">
      Box with Flex props
    </Box>
  </Container>
 
  )
}

export default App;

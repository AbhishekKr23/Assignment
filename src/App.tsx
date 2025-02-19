import { ChakraProvider, Container, VStack, Heading, Divider } from '@chakra-ui/react';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import RichTextEditor from './components/RichTextEditor';

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8}>
          <Heading>React Assignment</Heading>
          
          <Counter />
          <Divider />
          
          <UserForm />
          <Divider />
          
          <RichTextEditor />
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
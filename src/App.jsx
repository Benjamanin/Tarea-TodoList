import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider, Container, Title } from '@mantine/core';
import TodoForm from './Components/TodoForm';

function App() {
  return (
    <MantineProvider>
      <Container>
        <Title order={1}>Todo List</Title>
        <TodoForm/>
      </Container>
    </MantineProvider>
  );
}

export default App;
import './App.css';
import Container from '@material-ui/core/Container';
import EventsCards from './EventsCards';

function App() {
  return (
    <Container className="App">
      <h1 className="title">가즈아!</h1>
      <EventsCards />
    </Container>
  );
}

export default App;

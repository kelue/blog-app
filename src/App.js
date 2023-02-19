import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:id' element={< Blog />} />
      </Routes>
    </Container>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import BlogPost from './pages/BlogPost';

const App = () => (
    <Container fluid='xl'>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:id' element={< Blog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/blogpost' element={<BlogPost />} />
      </Routes>
    </Container>
  );

export default App;

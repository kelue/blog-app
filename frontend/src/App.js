import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import BlogPost from './pages/BlogPost';

import useToken from './components/common/useToken'



const App = () => {

  const { token, removeToken, setToken } = useToken();

return (
    <Container fluid='xl' token={removeToken}>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:id' element={< Blog />} />
          <Route path='/register' element={<SignUp />} />

          {!token && token!=="" &&token!== undefined ?  
          <Route path='/login' element={<Login setToken={setToken} />} />
          :(
                <Route exact path="/blogpost" element={<BlogPost token={token} setToken={setToken}/>}></Route>
          )}
          
      </Routes>
    </Container>
  );
}
export default App;

import { BrowserRouter} from 'react-router-dom';
import './css/App.css';
import './css/reset.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FindMyId from './pages/FindMyId';
import Repassword from './pages/RePassword';


function App() {
  return (   
    <>
    <BrowserRouter>
      <Header></Header>
      <Repassword></Repassword>
      <FindMyId></FindMyId>
      <Login></Login>
      <Signup></Signup>
      
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;

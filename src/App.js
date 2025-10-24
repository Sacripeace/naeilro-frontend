import { BrowserRouter} from 'react-router-dom';
import './css/App.css';
import './css/reset.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';

function App() {
  return (   
    <>
    <BrowserRouter>
      <Header></Header>
      <Login></Login>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;

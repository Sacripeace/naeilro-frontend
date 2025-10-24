import { BrowserRouter} from 'react-router-dom';
import './css/App.css';
import './css/reset.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;

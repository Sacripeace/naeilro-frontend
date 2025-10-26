import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './css/App.css';
import './css/reset.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Academy from './pages/Academy.js';
import Login from './pages/Login.js';
import TeacherRegister from './pages/TeacherRegister.js';

function App() {
  return (   
    <>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/academy/:uid" element={<Academy />} />
        <Route path="/teacher-register" element={<TeacherRegister />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;

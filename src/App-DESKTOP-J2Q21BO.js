import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './css/App.css';
import './css/reset.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Academy from './pages/Academy';
import TeacherRegister from './pages/TeacherRegister';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import AcademyRegister from './pages/AcademyRegister';
import FindMyId from './pages/FindMyId';
import Repassword from './pages/RePassword';
import Signup from './pages/Signup';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true;


function App() {
  return (   
    <>
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop></ScrollToTop>
        <Header></Header>
          <Routes>
            <Route path="/academy/:aUid" element={<Academy />} />
            <Route path="/teacher-register" element={<TeacherRegister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/findmyid" element={<FindMyId />} />
            <Route path="/repassword" element={<Repassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/' element={<Homepage />} />
            <Route path="/academy-register" element={<AcademyRegister />} />
          </Routes>
        <Footer></Footer>
      </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;

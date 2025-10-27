import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './css/App.css';
import './css/reset.css';
import Header from './components/Header';
import Footer from './components/Footer';
<<<<<<< HEAD
=======

>>>>>>> 930a6c9 (1.1.0_251027_final)
import Academy from './pages/Academy';
import TeacherRegister from './pages/TeacherRegister';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import AcademyRegister from './pages/AcademyRegister';
<<<<<<< HEAD
=======
import FindMyId from './pages/FindMyId';
import Repassword from './pages/RePassword';
import Signup from './pages/Signup';



>>>>>>> 930a6c9 (1.1.0_251027_final)


function App() {
  return (   
    <>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/academy/:uid" element={<Academy />} />
        <Route path="/teacher-register" element={<TeacherRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findmyid" element={<FindMyId />} />
        <Route path="/repassword" element={<Repassword />} />
        <Route path="/signup" element={<Signup />} />

        <Route path='/homepage' element={<Homepage />} />
        <Route path="/academy-register" element={<AcademyRegister />} />

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;

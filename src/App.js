import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './css/App.css';
import './css/reset.css';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (   
    <>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/academy/:uid" element={<Academy />} />
        <Route path="/teacher-register" element={<TeacherRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path="/academy-register" element={<AcademyRegister />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;

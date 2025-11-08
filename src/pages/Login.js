import { useContext, useState } from "react";
import "../css/login_Style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const { login } = useContext(AuthContext);

  const [form, setForm] = useState ({
    adminId: "",
    password: "",
  });

  const [error] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]:value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/login", form, { 
        withCredentials: true 
      });
      login();
      alert("로그인 성공하셨습니다.");
      navigate('/');
    } catch (error) {
      alert("아이디와 비밀번호를 확인해 주세요.")
    }
  };

  return (
    <main>
      <div className="page-container">
        <div className="form-layout">
          <div className="form-box">
            <div className="form-title">로그인</div>

            <form onSubmit={handleLogin}>
            <div className="form-group">
              <div className="input-label">아이디</div>
              <input 
                type="text" 
                className="input-field" 
                name="adminId" 
                placeholder="아이디를 입력하세요." 
                value={form.adminId}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <div className="input-label">암호</div>
              <input 
                type="password" 
                className="input-field" 
                name="password" 
                placeholder="비밀번호를 입력하세요." 
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-footer">
              <div className="signup-footer-box">
                <div className="signup-text\">관리자 아이디가 없으신가요?</div>
                <Link to="/signup" className="signup-link">회원가입 </Link>
        
              </div>
              <button type="submit" className="btn-primary">
                확인
              </button>
            </div>

            {error && (
              <div className="error-message" style={{ color: "red", marginTop: "10px"}}>
                {error}
              </div>
            )}

            </form>

            
          </div>

          <div className="slogan-section">
            <div className="slogan_logo_01">
              <img 
                className="logo-img" 
                src="./images/naillo_logo.png" 
                alt="내일로 로고" 
              />
            </div>

            <div className="slogan-text">
              "배움을 통해 내일로 나아가는 플랫폼"
            </div>
            <div className="slogan-text">
              Learn today, Lead Tomorrow.
            </div>



          </div>

        </div>
      </div>
    </main>
  );
}

export default Login;
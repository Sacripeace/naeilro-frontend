import { useState } from "react";
import "../css/login_Style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const [form, setForm] = useState ({
    adminId: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]:value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", form);

      if (response.status === 200) {
        alert("로그인 되었습니다.");
        navigate("/");
      } else {
        setError("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
    } catch (err) {
      if (err.response?.status === 401) {
      setError("아이디 또는 비밀번호가 일치하지 않습니다.");
    } else if (err.response?.status === 400) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
    } else {
      setError("서버 오류가 발생했습니다.");
    }
    }
  };

  return (
    <main>
      <div className="page-container">
        <div className="form-layout">
          {/* 왼쪽: 로그인 영역 */}
          <div className="form-box">
            <div className="form-title">관리자 로그인</div>

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
              <Link to="/findmyid" className="link-find-id">
                아이디찾기
              </Link>
              <button type="submit" className="btn-primary">
                확인
              </button>
            </div>

            {/* 에러 메시지 */}
            {error && (
              <div className="error-message" style={{ color: "red", marginTop: "10px"}}>
                {error}
              </div>
            )}

            </form>


            {/* 회원가입 링크 */}
            <div className="signup-footer">
              <div className="signup-footer-box">
                <div className="signup-text\">관리자 아이디가 없으신가요?</div>
                <Link to="/signup" className="signup-link">회원가입 </Link>
                <div className="signup-text\">➔</div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 슬로건 / 로고 영역 */}
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
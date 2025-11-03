import { useState } from "react";
import "../css/login_Style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(){
    const navigate = useNavigate();

    const [form, setForm] = useState({
        adminId: "",
        password: "",
        confirmPassword: "",
        academyName: "",
        phoneNumber: "",
        email: ""
    });

    const [error, setError] = useState("");

    // 정규식 검사
    const validateId = (id) => /^[a-zA-Z0-9]{5,20}$/.test(id);
    const validatePassword = (pw) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+=-]).{8,}$/.test(pw);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 유효성 검사
        if (!validateId(form.adminId)) {
            setError("아이디는 5~20자의 영문자 또는 숫자여야 합니다.");
            return;
        }

        if (!validatePassword(form.password)) {
            setError("비밀번호는 영문자, 숫자, 특수문자를 포함해 8자 이상이어야 합니다.");
            return;
        }

        if (form.password !== form.confirmPassword) {
            setError("비밀번호가 일치하지 않습니다.");
            return;
        }

        if (!form.academyName) {
            setError("사업자명을 기재해주세요.");
            return;
        }

        if (!form.phoneNumber) {
            setError("전화번호를 입력하세요.");
            return;
        }

        if (!form.email) {
            setError("이메일을 등록하세요.");
            return;
        }

        setError("");

        // 서버로 전송할 데이터
        const requestData = {
            adminId: form.adminId,
            password: form.password,
            academyName: form.academyName,
            phoneNumber: form.phoneNumber,
            email: form.email,
        };

        try {
            await axios.post(
                "http://localhost:8080/signup",
                requestData
            );
            alert("회원가입 성공!");
            setForm({
                adminId: "",
                password: "",
                confirmPassword: "",
                academyName: "",
                phoneNumber: "",
                email: ""
            });

            navigate("/login");
        } catch (error) {
  if (!error.response) {
    setError("서버에 연결할 수 없습니다.");
    return;
        }

        const { status, data } = error.response;

        if (status === 409) {
          setError("이미 존재하는 아이디입니다.");
          return;
        }

        let msg = "회원가입 실패";
        if (typeof data === "string") {
          msg = data;
        } else if (data && typeof data === "object") {
          msg = data.message || data.error || msg;
        }
        setError(msg);
        }
    };

    return(
        <main>

            <div className="page-container">
                <div className="form-layout">
                    <form onSubmit={handleSubmit}>
                    <div className="form-box">
                        <div className="form-title">회원가입</div>
                        <div className="form-group">



{/* DB와 IntelliJ, React 연동 확인 코드 */}
{/* DB와 IntelliJ, React 연동 확인 코드 */}
{/* DB와 IntelliJ, React 연동 확인 코드 */}
{/* DB와 IntelliJ, React 연동 확인 코드 */}
{/* DB와 IntelliJ, React 연동 확인 코드 */}





                            <div className="input-label">관리자 아이디</div>
                            <input 
                                type="text" 
                                className="input-field" 
                                name="adminId" 
                                placeholder="아이디는 5~20자의 영문자 또는 숫자여야 합니다."
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
                                placeholder="영문자, 숫자, 특수문자를 포함해 8자 이상이어야 합니다."
                                value={form.password}
                                onChange={handleChange}
                                />
                            </div>

                        <div className="form-group">
                            <div className="input-label">암호확인</div>
                            <input 
                                type="password" 
                                className="input-field" 
                                name="confirmPassword" 
                                placeholder="비밀번호를 다시한번 더 입력하세요."
                                value={form.confirmPassword}
                                onChange={handleChange}
                                />
                        </div>


                        <div className="form-group">
                            <div className="input-label">사업자명</div>
                            <input 
                                type="text" 
                                className="input-field" 
                                name="academyName" 
                                placeholder="성함을 입력하세요."
                                value={form.academyName}
                                onChange={handleChange}
                                />
                            </div>

                        <div className="form-group">
                            <div className="input-label">전화번호</div>
                            <input 
                                type="text" 
                                className="input-field" 
                                name="phoneNumber" 
                                placeholder="전화번호를 입력하세요."
                                value={form.phoneNumber}
                                onChange={handleChange}
                                />
                            </div>

                        <div className="form-group">
                            <div className="input-label">이메일주소</div>
                            <input 
                                type="text" 
                                className="input-field" 
                                name="email" 
                                placeholder="이메일주소를 입력하세요."
                                value={form.email}
                                onChange={handleChange}
                                />
                        </div>
                        
                           <button type="submit" className="btn-primary">확인</button>

        {/* 에러 메시지 */}
              {error && (
                <div className="error-message" style={{ color: "red", marginTop: "10px" }}>
                  {error}
                </div>
              )}
                </div>
                </form>

                    <div className="slogan-section">
                        <div className="slogan_logo_01">
                            <img className="logo-img" src="./images/naillo_logo.png" alt="" />
                            
                        </div>
                    
                        <div className="slogan-text">“배움을 통해 내일로 나아가는 플랫폼”</div>
                        <div className="slogan-text"> Learn today, Lead Tomorrow. </div>
                    
                    </div>
                </div>  
            </div>
        </main>
    );
}

export default Signup;
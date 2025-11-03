import { Link } from "react-router-dom";
import "../css/login_Style.css";
import React, { useState } from "react";
import axios from "axios";

function Repassword(){
    const [form, setForm] = useState({
        adminId: "",
        password: "",
        confirmPassword: "",
        academyName:"",
        phoneNumber:"",
        email:"",
    });

    const [error, setError] = useState("");

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // 폼 제출 (비밀번호 재설정)
    const handleSubmit = async (e) => {
        e.preventDefault();
    
    // 비밀번호 확인 일치 검사
    if (form.password !== form.confirmPassword) {
        setError("비밀번호가 일치하지 않습니다.");
        return;
    }

    try {
        const response = await axios.post("/api/reset-password", form);

        if (response.status === 200) {
            alert("비밀번호가 수정되었습니다."); //팝업알림
            window.location.href = "/login"; //로그인 페이지로 이동
        } else {
            setError("입력하신 정보가 일치하지 않습니다.");
        }
        } catch (err) {
            setError("서버 오류가 발생했습니다.");
        }
    };

        
    

    return(
        <main>
            <div className="page-container">
                <div className="form-layout">
                    <div className="form-box">
                        <div className="find-title-wrapper">
                            <Link to="/findmyid" className="link-findmyid">관리자 ID 찾기</Link>
                            <div className="link-repassword-title">비밀번호 재설정</div>
                        </div>
                        




{/* DB와 IntelliJ, React 연동 확인 코드 */}
{/* DB와 IntelliJ, React 연동 확인 코드 */}
{/* DB와 IntelliJ, React 연동 확인 코드 */}
{/* DB와 IntelliJ, React 연동 확인 코드 */}





                        {/* form시작 */}
                        <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="input-label">관리자 아이디</div>
                            <input 
                                className="input-field"
                                type="text"
                                name="adminId"
                                placeholder="아이디를 입력하세요."
                                value={form.adminId}
                                onChange={handleChange}
                                / >
                        </div>


                        <div className="form-group">
                            <div className="input-label">암호</div>
                            <input
                                className="input-field"
                                type="password"
                                name="password"
                                placeholder="비밀번호를 입력하세요."
                                value={form.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <div className="input-label">암호확인</div>
                            <input
                                className="input-field"
                                type="password"
                                name="confirmPassword"
                                placeholder="비밀번호를 다시 한번 입력하세요."
                                value={form.confirmPassword}
                                onChange={handleChange}
                                />
                        </div>


                        <div className="form-group">
                            <div className="input-label">사업자명</div>
                            <input
                                className="input-field"
                                type="text"
                                name="academyName"
                                placeholder="등록한 업체명을 입력하세요."
                                value={form.academyName}
                                onChange={handleChange}
                                />
                        </div>

                        <div className="form-group">
                            <div className="input-label">전화번호</div>
                            <input
                                className="input-field"
                                type="text"
                                name="phoneNumber"
                                placeholder="등록하신 전화번호를 입력하세요."
                                value={form.phoneNumber}
                                onChange={handleChange}
                                />
                        </div>

                        <div className="form-group">
                            <div className="input-label">이메일주소</div>
                            <input 
                                className="input-field"
                                type="text"
                                name="email"
                                placeholder="등록하신 이메일 주소를 입력하세요."
                                value={form.email}
                                onChange={handleChange}
                                />
                        </div>

                        {error && (
                            <div className="error-message" style={{ color: "red" }}>
                                {error}
                                </div>
                        )}



                        
                           <button type="submit" className="btn-primary">비밀번호 재설정</button>

                        <div className="form-group">
                            <div className="error-message">최초 가입시 등록한 정보와 다르게 입력하시면<br />
                            비밀번호는 재등록 불가합니다. 정확하게 기입해주세요.
                            </div>
                        </div>
                        </form>
                </div>

                    <div className="slogan-section">
                        <div className="slogan_logo_01">
                            <img className="logo-img" src="./images/naillo_logo.png" alt=""/>
                            
                        </div>
                    
                        <div className="slogan-text">“배움을 통해 내일로 나아가는 플랫폼”</div>
                        <div className="slogan-text"> Learn today, Lead Tomorrow. </div>
                    
                    </div>
                </div>  
            </div>


        </main>
    );
}

export default Repassword;
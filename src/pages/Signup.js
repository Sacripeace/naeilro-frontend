import { useState } from "react";
import "../css/login_Style.css";

function Signup(){

    const [form, setForm] = useState({
        admin_id: "",
        password: "",
        confirmPassword: "",
        business_name: "",
        phone:"",
        email:""

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

    if (!validateId(form.admin_id)) {
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

    if (!form.business_name)  {
      setError("사업자명을 기재해주세요.");
      return;
    }

    if (!form.phone) {
      setError("전화번호를 입력하세요.");
      return;
    }

    if (!form.email) {
      setError("이메일을 등록하세요.");
      return;
    }

    setError("");
    alert("회원가입 성공");
    // TODO: 서버로 axios POST 요청 보내기
  };


    return(
        <main>

            <div className="container_outbox_01">
                <div className="div1">
                    <form onSubmit={handleSubmit}>
                    <div className="login_outbox_01">
                        <div className="login_text_01">회원가입</div>
                        <div className="login_box_01">
                            <div className="title_13px">관리자 아이디</div>
                            <input 
                                type="text" 
                                className="userid" 
                                name="admin_id" 
                                placeholder="아이디는 5~20자의 영문자 또는 숫자여야 합니다."
                                value={form.admin_id}
                                onChange={handleChange}
                                />
                        </div>

                        <div className="login_box_01">
                            <div className="title_13px">암호</div>
                            <input 
                                type="password" 
                                className="password" 
                                name="password" 
                                placeholder="영문자, 숫자, 특수문자를 포함해 8자 이상이어야 합니다."
                                value={form.password}
                                onChange={handleChange}
                                />
                        </div>

                        <div className="login_box_01">
                            <div className="title_13px">암호확인</div>
                            <input 
                                type="password" 
                                className="password" 
                                name="confirmPassword" 
                                placeholder="비밀번호를 다시한번 더 입력하세요."
                                value={form.confirmPassword}
                                onChange={handleChange}
                                />
                        </div>


                        <div className="login_box_01">
                            <div className="title_13px">사업자명</div>
                            <input 
                                type="text" 
                                className="name" 
                                name="business_name" 
                                placeholder="성함을 입력하세요."
                                value={form.business_name}
                                onChange={handleChange}
                                />
                        </div>

                        <div className="login_box_01">
                            <div className="title_13px">전화번호</div>
                            <input 
                                type="text" 
                                className="number" 
                                name="phone" 
                                placeholder="전화번호를 입력하세요."
                                value={form.phone}
                                onChange={handleChange}
                                />
                        </div>

                        <div className="login_box_01">
                            <div className="title_13px">이메일주소</div>
                            <input 
                                type="text" 
                                className="email" 
                                name="email" 
                                placeholder="이메일주소를 입력하세요."
                                value={form.email}
                                onChange={handleChange}
                                />
                        </div>
                        
                           <button type="submit" className="login_btn">확인</button>

        {/* 에러 메시지 */}
              {error && (
                <div className="warning_text" style={{ color: "red", marginTop: "10px" }}>
                  {error}
                </div>
              )}
                </div>
                </form>

                    <div className="container_outbox_02">
                        <div className="slogan_logo_01">
                            <img className="Logo" src="./images/naillo_logo.png" alt="" />
                            
                        </div>
                    
                        <div className="slogan_text_01">“배움을 통해 내일로 나아가는 플랫폼”</div>
                        <div className="slogan_text_01"> Learn today, Lead Tomorrow. </div>
                    
                    </div>
                </div>  
            </div>


        </main>
    );
}

export default Signup;
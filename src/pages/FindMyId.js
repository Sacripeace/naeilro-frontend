import { Link } from "react-router-dom";
import "../css/login_Style.css";
import React, { useState } from "react";
import axios from 'axios';


function FindMyId(){

    const [form, setForm] = useState({
    academyName: '',
    phoneNumber: '',
    email: '',
  });

  const [resultId, setResultId] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFindId = async () => {
    try {
      const response = await axios.post('/api/find-admin-id', form);
      if (response.data && response.data.adminId) {
        setResultId(response.data.adminId);
        setError('');
      } else {
        setResultId(null);
        setError('아이디를 조회할 수 없습니다.');
      }
    } catch (err) {
      setResultId(null);
      setError('서버 오류가 발생했습니다.');
    }
  };

    return(
        <main>

            <div className="page-container">
                <div className="form-layout">

                    <div className="form-box">
                        <div className="find-title-wrapper">
                            <div className="find-title">관리자 ID 찾기</div>
                            <Link to="/Repassword" className="repassword">비밀번호 재설정</Link>
                        </div>

                        {/* DB와 IntelliJ, React 연동 확인 코드 */}
                        {/* DB와 IntelliJ, React 연동 확인 코드 */}

                                <div className="form-group">
                                    <div className="input-label">사업자명</div>
                                    <input
                                    type="text"
                                    className="input-field"
                                    name="academyName"
                                    placeholder="사업자명을 입력하세요."
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

                        
                           <button onClick={handleFindId} type="submit" className="btn-secondary">관리자 ID 찾기</button>

{/* 아래 코드는 위 조건에 맞는 결과값을 아래 칸에서 보여주는 칸입니다.  */}
{/* 현재는 보여주지만 자바나 자바 스크립트를 통해서 결과값을 보여주는 방식으로 표현해야함. */}

{/* 아래코드는 조회시 결과 나오는 코드임 */}
      {/* 결과 메시지 */}
      {resultId && (
        <div style={{ marginTop: '20px' }}>
          <p>당신의 아이디는 아래와 같습니다.</p>
          <input type="text" value={resultId} readOnly />
          <br />
          <button>로그인</button>
        </div>
      )}

      {/* 실패 메시지 */}
      {error && !resultId && (
        <div style={{ marginTop: '20px', color: 'red' }}>{error}</div>
      )}
</div>




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

export default FindMyId;
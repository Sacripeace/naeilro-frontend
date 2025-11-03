import { Link } from "react-router-dom";
import "../css/login_Style.css";



function FindMyId(){

    

    return(
        <main>

            <div className="page-container">
            {/* <img className="logo-img-large" src="./images/Logo.png"></img> */}
                <div className="form-layout">

                    <div className="form-box">
                        <div className="find-title-wrapper">
                            <div className="find-title">관리자 ID 찾기</div>
                            <Link to="/Repassword" className="repassword">비밀번호 재설정</Link>
                        </div>
                                <div className="form-group">
                                    <div className="input-label">사업자명</div>
                                    <input type="text" id="name" name="name" placeholder="성함을 입력하세요."/>
                                </div>

                                <div className="form-group">
                                    <div className="input-label">전화번호</div>
                                    <input type="text" id="number" name="number" placeholder="전화번호를 입력하세요."/>
                                </div>

                                <div className="form-group">
                                    <div className="input-label">이메일주소</div>
                                    <input type="text" id="email" name="email" placeholder="이메일주소를 입력하세요."/>
                                </div>

                        
                           <button type="submit" className="btn-secondary">관리자 ID 찾기</button>

{/* 아래 코드는 위 조건에 맞는 결과값을 아래 칸에서 보여주는 칸입니다.  */}
{/* 현재는 보여주지만 자바나 자바 스크립트를 통해서 결과값을 보여주는 방식으로 표현해야함. */}
                        <div className="result-box-wrapper">
                            <div className="result-label">당신의 아이디는 아래와 같습니다.</div>
                            <div className="result-box">qwerasdf</div>
                            {/* 아이디영역을 클릭하면 복사해주는 기능 */}
                           <Link to="/login" type="submit" className="btn-secondary">로그인</Link>

                        </div>



                </div>





                    <div className="slogan-section">
                        <div className="slogan_logo_01">
                            <img className="logo-img" src="./images/naillo_logo.png">
                            </img>
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
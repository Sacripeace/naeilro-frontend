import "../css/login.css"

function Login(){
    return(
        <main>
            <div className="container_outbox_01">
            {/* <img className="Logo2" src="./images/Logo.png"></img> */}
                <div className="div1">

                    <div className="login_outbox_01">
                        <div className="login_text_01">로그인</div>
                        <div className="login_box_01">
                            <div className="title_13px">아이디</div>
                            <input type="text" id="userid" name="userid" placeholder="아이디를 입력하세요."/>
                        </div>

                        <div className="login_box_01">
                            <div className="title_13px">암호</div>
                            <input type="password" id="password" name="password" placeholder="비밀번호를를 입력하세요."/>
                        </div>

                        <div className="login_box_02">
                            <div className="text_13px">아이디찾기</div>
                        
                           <button type="submit" className="login_btn">확인</button>
                        </div>

                        <div className="sns_Login">
                            <img className="snsImg" src="./images/kakao_Login.png" alt="카카오톡 로그인"></img>
                            <img className="snsImg" src="./images/Naver_Login.png" alt="네이버 로그인"></img>
                        </div>
                        
                        <div className="signup_container_box"> 
                            <div className="signup_box_01"> 
                                    <div className="signup_text_01">회원이 아니세요?</div>
                                    <div className="signup_text_02">회원가입 </div>
                            </div>
                    </div>
                </div>

                    <div className="container_outbox_02">
                        <div className="slogan_logo_01">

                            <img className="Logo" src="./images/naillo_logo.png" alt="로고" >

                            </img>
                            {/* http://localhost:3000/images/ naillo_logo.png */}
                        </div>
                    
                        <div className="slogan_text_01">“배움을 통해 내일로 나아가는 플랫폼”</div>
                        <div className="slogan_text_01"> Learn today, Lead Tomorrow. </div>
                    
                    </div>
                </div>  
            </div>
        </main>
    );
}

export default Login;
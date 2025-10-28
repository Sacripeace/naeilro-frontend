import "../css/login_Style.css";

function Signup(){
    return(
        <main>

            <div className="container_outbox_01">
                <div className="div1">

                    <div className="login_outbox_01">
                        <div className="login_text_01">회원가입</div>
                        <div className="login_box_01">
                            <div className="title_13px">관리자 아이디</div>
                            <input type="text" id="userid" name="userid" placeholder="아이디를 입력하세요."/>
                        </div>

                        <div className="login_box_01">
                            <div className="title_13px">암호</div>
                            <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요."/>
                        </div>

                        <div className="login_box_01">
                            <div className="title_13px">암호확인</div>
                            <input type="password" id="password" name="password" placeholder="비밀번호를 다시한번 더 입력하세요."/>
                        </div>


                        <div className="login_box_01">
                            <div className="title_13px">사업자명</div>
                            <input type="text" id="name" name="name" placeholder="성함을 입력하세요."/>
                        </div>

                        <div className="login_box_01">
                            <div className="title_13px">전화번호</div>
                            <input type="text" id="number" name="number" placeholder="전화번호를 입력하세요."/>
                        </div>

                        <div className="login_box_01">
                            <div className="title_13px">이메일주소</div>
                            <input type="text" id="email" name="email" placeholder="이메일주소를 입력하세요."/>
                        </div>



                        
                           <button type="submit" className="login_btn">확인</button>
                </div>

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
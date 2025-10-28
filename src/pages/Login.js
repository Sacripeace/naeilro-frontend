import "../css/login_Style.css";
import { Link } from "react-router-dom";



function Login() {
  return (
    <main>
      <div className="container_outbox_01">
        <div className="div1">
          
          {/* 왼쪽: 로그인 영역 */}
          <div className="login_outbox_01">
            <div className="login_text_01">관리자 로그인</div>

            <div className="login_box_01">
              <div className="title_13px">아이디</div>
              <input 
                type="text" 
                id="userid" 
                name="userid" 
                placeholder="아이디를 입력하세요." 
              />
            </div>

            <div className="login_box_01">
              <div className="title_13px">암호</div>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="비밀번호를 입력하세요." 
              />
            </div>

            <div className="login_box_02">
              <Link to="/findmyid" className="find_my_id_text">아이디찾기</Link>
              <button type="submit" className="login_btn">
                확인
              </button>
            </div>


            {/* 회원가입 링크 */}
            <div className="signup_container_box">
              <div className="signup_box_01">
                <div className="signup_text_01">관리자 아이디가 없으신가요?</div>
                <Link to="/signup" className="signup_text_02">회원가입 </Link>
                <div className="signup_text_01">➔</div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 슬로건 / 로고 영역 */}
          <div className="container_outbox_02">
            <div className="slogan_logo_01">
              <img 
                className="Logo" 
                src="./images/naillo_logo.png" 
                alt="내일로 로고" 
              />
            </div>
            <div className="slogan_text_01">
              "배움을 통해 내일로 나아가는 플랫폼"
            </div>
            <div className="slogan_text_01">
              Learn today, Lead Tomorrow.
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Login;
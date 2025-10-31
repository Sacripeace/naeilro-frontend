import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const HeaderWrapper = styled.div`
    display : flex;
    justify-content : center;
    width : 100%;
    height : 60px;
    background-color : #4169E1;

    
    box-sizing : border-box;

    & > div{
        display : flex;
        justify-content : space-between;
        align-items : center;
        width : 1160px;
    }

    & > div > a{
        display : flex;
        align-items : center;
        text-decoration : none;
    }

    & > div > a > img{
        
        height : 44px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: auto ;
    }

    & > div > a > p{
        font-size : 28px;
        color : white;
        margin-left : 6px;
        font-weight : bold;
        cursor: pointer;
        text-decoration: none;
    }
    
    & > div > p{
        font-size : 12px;
        color : white;
        cursor: pointer;
        text-decoration: none;
        color: white;
    }

    & a{
        color : white;
        text-decoration: none;
    }

`


function Header(){
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    setIsLoggedIn(!!token);
}, []);

const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
};

// App.js 또는 Header.js 내부에서
const [isLoggedIn, setIsLoggedIn] = useState(
  !!localStorage.getItem("token") // 토큰이 있으면 로그인 상태
);

// 로그인 성공 시
localStorage.setItem("token", response.data.token); // 예시
setIsLoggedIn(true); // 상태 변경

const handleLogout = () => {
  localStorage.removeItem("token");
  setIsLoggedIn(false);
  navigate("/login"); // 로그인 페이지로 이동
};

    return(
        <header>
            <HeaderWrapper>
                <div>
                    <Link to="/">
                        <img src="/images/naillo_logo.png" alt="Logo"></img>
                        <p>내일로</p>
                    </Link>

                    {isLoggedIn ? (
                        <>
                        <Link to="/academy/{uid}}" />
                        <button className="header_login_text" onClick={handleLogout}>로그아웃</button>
                        </>
                        ) : (
                            <Link to="/login" className="header_login_text">로그인</Link>
                        )}
                        </div>
                    </nav>
            </HeaderWrapper>
        </header>
    );
}

export default Header;
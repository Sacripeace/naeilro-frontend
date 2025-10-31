import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: #4169e1;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1160px;
  }

  & img {
    height: 44px;
    cursor: pointer;
  }

  & p {
    font-size: 28px;
    color: white;
    margin-left: 6px;
    font-weight: bold;
  }

  .header_login_text {
    font-size: 14px;
    color: white;
    cursor: pointer;
    background: none;
    border: none;
    margin-left: 20px;
  }
`;

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 최초 렌더링 시 localStorage에서 token 확인
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header>
      <HeaderWrapper>
        <div>
          <Link to="/">
            <img src="/images/naillo_logo.png" alt="로고" />
            <p>내일로</p>
          </Link>

          <div>
            {isLoggedIn ? (
              <>
                <Link to="/mypage" className="header_login_text">내 정보</Link>
                <button onClick={handleLogout} className="header_login_text">로그아웃</button>
              </>
            ) : (
              <Link to="/login" className="header_login_text">로그인</Link>
            )}
          </div>
        </div>
      </HeaderWrapper>
    </header>
  );
}

export default Header;
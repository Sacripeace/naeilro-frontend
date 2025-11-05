import { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

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

  & div > a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  & div > a > img {
    height: 44px;
    cursor: pointer;
  }

  & div > a > p {
    font-size: 28px;
    color: white;
    margin-left: 6px;
    font-weight: bold;
  }

  .header_login_text {
    font-size: 14px;
    color: white !important;
    cursor: pointer;
    background: none;
    border: none;
    margin-left: 20px;
    text-decoration: none;
  }
`;

function Header() {
  const {isLoggedIn, setIsLoggedIn} =useContext(AuthContext);;
  const navigate = useNavigate();


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
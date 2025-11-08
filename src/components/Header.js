import { useContext, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

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
    margin : 0 auto;
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

  .contextheader{
    display : flex;
    gap : 16px;
  }

  .contextheader > a{
    font-size: 14px;
    color: white !important;
    cursor: pointer;
    background: none;
    border: none;
    text-decoration: none;
  }

  .header_login_text {
    font-size: 14px;
    color: white !important;
    cursor: pointer;
    background: none;
    border: none;
    text-decoration: none;
  }

`;

function Header() {
  const {isLoggedIn, logout} =useContext(AuthContext);
  const navigate = useNavigate();
  const [aUid, setAUid] = useState();


  useEffect(() => {
    if (!isLoggedIn) { setAUid(null); return; }
    axios.get('http://localhost:8080/session', { withCredentials: true })
      .then(res => setAUid(res.data?.aUid ?? null))
      .catch(() => setAUid(null));
  }, [isLoggedIn]);


  const handleLogout = () => {
    logout();
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
              <div className="contextheader">
                <Link to={`/academy/${aUid}`}>내학원</Link>
                <button onClick={handleLogout} className="header_login_text">로그아웃</button>
              </div>
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
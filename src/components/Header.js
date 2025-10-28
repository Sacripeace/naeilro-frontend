import styled from "styled-components";
import { Link } from "react-router-dom";


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
    return(
        <header>
            <HeaderWrapper>
                <div>
                    <Link to="/">
                        <img src="/images/naillo_logo.png" alt="Logo"></img>
                        <p>내일로</p>
                    </Link>
                    <Link to="/login" className="header_login_text">로그인</Link>
                </div>
            </HeaderWrapper>
        </header>
    );
}

export default Header;
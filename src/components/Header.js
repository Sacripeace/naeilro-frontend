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
        width : 38px;
        height : 44px;
        cursor: pointer;
    }

    & > div > a > p{
        font-size : 28px;
        color : white;
        margin-left : 6px;
        font-weight : bold;
        cursor: pointer;
    }
    
    & > div > a{
        font-size : 12px;
        color : white;
        cursor: pointer;
    }
`


function Header(){
    return(
        <main>
            <HeaderWrapper>
                <div>
                    <Link to="/">
                        <img src="/images/naillo_logo.png" alt="Logo"></img>
                        <p>내일로</p>
                    </Link>
                    <Link to="/login" className="header_login_text">로그인</Link>
                </div>
            </HeaderWrapper>
        </main>
    );
}

export default Header;
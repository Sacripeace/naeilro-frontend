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

    & > div > div{
        display : flex;
        align-items : center;
    }

    & > div > div > div > a > img{
        // width : 38px;
        height : 50px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: auto ;
    }

    // 홈페이지 왼쪽 로고옆 "내일로" TEXT
    & > div > div > a > p{
        font-size : 28px;
        color : white;
        margin-left : 6px;
        font-weight : bold;
        cursor: pointer;
        text-decoration: none;
    }
    
    & > div > a > p{
        font-size : 1px;
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
        <main>
            <HeaderWrapper>
                <div>
                    <div>
                        <div>
                        <Link to={"/"}>
                            <img src="/images/naillo_logo.png" alt="Logo"></img>
                            </Link>
                        </div>
                        <Link to={"/"}>
                        <p>
                            내일로
                        </p>
                        </Link>
                    </div>
                    <Link to="/login">로그인</Link>
                </div>
            </HeaderWrapper>
        </main>
    );
}

export default Header;
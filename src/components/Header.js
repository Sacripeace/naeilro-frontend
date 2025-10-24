import styled from "styled-components";

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

    & > div > div > img{
        width : 38px;
        height : 44px;
    }

    & > div > div > p{
        font-size : 28px;
        color : white;
        margin-left : 6px;
        font-weight : bold;
    }
    
    & > div > p{
        font-size : 12px;
        color : white;
    }
`


function Header(){
    return(
        <main>
            <HeaderWrapper>
                <div>
                    <div>
                        <img src="/images/Logo.png" alt="Logo"></img>
                        <p>내일로</p>
                    </div>
                    <p>로그인</p>
                </div>
            </HeaderWrapper>
        </main>
    );
}

export default Header;
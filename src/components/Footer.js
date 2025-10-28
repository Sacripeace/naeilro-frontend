import styled from "styled-components";

const FooterWrapper = styled.div`
    display : flex;
    justify-content : center;
    width : 100%;
    height : 100px;
    background-color : #4169E1;

    & > div{
        display : flex;
        justify-content : space-between;
        align-items : center;
        width : 1160px;
    }
    
    & > div > p:first-child{
        font-size : 28px;
        color : white;
        font-weight : bold;
    }
    & > div > p:last-child{
        font-size : 10px;
        color : white;
        margin-top : 20px;
    }
`

function Footer(){
    return(
        <footer>
        <FooterWrapper>
            <div>
                <p>내일로</p>
                <p>Copy Right 2025</p>
            </div>
        </FooterWrapper>
        </footer>
    );
}

export default Footer;
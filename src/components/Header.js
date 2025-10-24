import styled from "styled-components";

const HeaderWrapper = styled.div`
    width : 100%;
    height : 60px;
    background-color : #4169E1;
`

function Header(){
    return(
        <main>
            <HeaderWrapper></HeaderWrapper>
        </main>
    );
}

export default Header;
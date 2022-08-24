import styled from "@emotion/styled";
import Profile from "./Profile";

const Img = styled('img')`
    width: 188px;
    margin: 0 auto;
`
const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 80px 0px;
    color: #fff;
`

const Menu = () => {
    return(
        <Wrapper>
            <ul>
                <li>
                    Запросы
                </li>
            </ul>
            
        </Wrapper>
    )
}
export default Menu;
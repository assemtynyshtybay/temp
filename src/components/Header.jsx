import styled from "@emotion/styled";

const Navbar = styled('div')`
    float: right;
`

const Header = () => {
    return(
            <Navbar>            
            <ul>
                <li>
                    Main
                </li>
            </ul>
            </Navbar>
    )
}
export default Header;
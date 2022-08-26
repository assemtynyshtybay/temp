import styled from "@emotion/styled";
import mail from "../assets/mail-icon.png";
import bell from "../assets/bell-icon.png";
import { Typography } from "@mui/material";

const Navbar = styled('div')`
    position: relative;
    float: right;
`
const Icon = styled('img')`
    width: 20px;
`
const Header = () => {
    return(
            <Navbar>            
            <ul>
                <li>
                    <Icon src={bell}/>
                </li>
                <li>
                    <Icon src={mail}/>
                </li>
                <li>
                    <Typography sx={{color: 'white'}}>Avatar Avatarovich</Typography>
                </li>
            </ul>
            </Navbar>
    )
}
export default Header;
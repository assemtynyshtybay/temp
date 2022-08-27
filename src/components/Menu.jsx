import React, {useState} from 'react';
import styled from "@emotion/styled";
import logo from "../assets/logo-violet.png"
import { useNavigate } from 'react-router';
import { Divider,Box, Typography, List,ListItem,ListItemText, Button } from "@mui/material";
const Img = styled('img')`
    width: 80px;
    margin: 0 auto;
`
const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 20px 0px;
    color: #fff;
    height: 100%;
`
const style = {
  width: '100%',
  maxWidth: 360,
};
const Profile = styled('div')`
    position: absolute;
    bottom: 0px;
    height: 10%;
    width: 100%;
    padding-bottom: 20px;
    display: block-inline;
`
const Menu = () => {
    const [token] = useState('');
    const nav = useNavigate();
    return(
        <Wrapper>
            <Img src={logo} />
            <span className="underline"></span>
            <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem button onClick={()=>nav('/')}>
                    <ListItemText primary="Запросы" />
                </ListItem>
                <Divider />
                <ListItem button divider onClick={()=>nav('/news')}>
                    <ListItemText primary="Новости" />
                </ListItem>
                <ListItem button onClick={()=>nav('/bd')}>
                    <ListItemText primary="Ваши коллеги" />
                </ListItem>
                <Divider light />
            </List>
            {
                token ?
                (
                    <Profile>
                        <Divider sx={{color:'white'}}  />
                        <Box>
                        <Typography>Name</Typography>
                        <Typography>mail</Typography></Box>
                        <Divider light />
                        <Button sx={{color: '#59496A',left:'50%', transform: 'translate(-50%,25%)'}} size="small">Выход</Button>
                    </Profile>
                ):
                (
                    <Profile>
                        <Divider sx={{color:'white'}}  />
                        <Box>
                        <Typography>Name</Typography>
                        <Typography>mail</Typography></Box>
                        <Divider light />
                        <Button sx={{color: '#59496A',left:'50%', transform: 'translate(-50%,25%)'}} size="small">Выход</Button>
                    </Profile>
                )
            }
            
        </Wrapper>
    )
}
export default Menu;
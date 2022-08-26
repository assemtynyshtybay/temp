import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled from '@emotion/styled';
import Menu from '../Menu';
import Header from '../Header';
import Main from '../Main';
import Congrats from '../Congrats';
import logo from '../../assets/menu-icon.png';
import cross from '../../assets/cross-violet.png';

const Icon = styled('img')`
    width: 25px;
    position: absolute;
    top: 50%;
    left: 105%;
    :hover {
        transform: rotate(60deg);
    }
`
const MainWrapper = styled('div')`
    grid-column-start: 1;
    grid-column-end: 3;
    display: grid;
    background-color: #fff;
    margin-right: 0px; 
`
const Wrapper = styled('div')`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 100px 9fr;
    grid-gap: 0px;
    width: 100%;
    height: 100vh;
`
const MenuWrap = styled('div')`
    position: absolute;
    top: 0px;
    background-color: #2c2c2c;
    width: 20%;
    z-index: 1;
    margin-bottom: 0px;
    height: 100%;
    border-right: 1px solid gray;
`
const Head = styled('div')`
    margin-right: 0px;
    padding: 10px 10px;
    background-color: #2C2C2C;
`
const Img = styled('img')`
    margin: auto 0;
    width: 50px;
    float: left;
`

const MainPage = () => {
    const [opened, setOpened] = useState(false);
    return(
        <BrowserRouter>
            {
                opened ?
                (<MenuWrap>
                    <h1  onClick={() => setOpened(false)}>
                        <Icon src={cross}/>
                    </h1>
                    <Menu/>
                </MenuWrap>)
                :
                null
            }
            <Wrapper onClick={(e) => {e.stopPropagation();setOpened(false)}}>
                <MainWrapper>
                <Head>
                    <Img src={logo} opened={opened} onClick={(e) =>{e.stopPropagation();setOpened(true)}}/>
                    <Header/>
                </Head>
                <Routes>
                    <Route path="/" element={<Main isopen={opened}/>} />
                    <Route path="/bd" element={<Congrats/>} />

                </Routes>
                </MainWrapper>
            </Wrapper>
        </BrowserRouter>
    )
}
export default MainPage;
import React, {useState} from 'react'

import styled from '@emotion/styled';
import Menu from '../Menu';
import Header from '../Header';
import Main from '../Main';
import logo from '../../assets/logo-violet.png';

const MainWrapper = styled('div')`
    grid-column-start: 1;
    grid-column-end: 3;
    display: grid;
    background-color: #fff; 
`
const Wrapper = styled('div')`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 9fr;
    grid-gap: 0px;
    height: 100vh;
`
const MenuWrap = styled('div')`
    background-color: #2c2c2c;
    width: 250px;
`
const Head = styled('div')` 
    padding: 50px 10px;
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
        <>
            <Wrapper>
                {
                    opened ?
                    (<MenuWrap>
                        <Menu/>
                    </MenuWrap>)
                    :
                    null
                }
                <MainWrapper>
                <Head>  
                    <Img src={logo}/>
                    <Header/>
                </Head>
                <Main/>
                </MainWrapper>
            </Wrapper>
        </>
    )
}
export default MainPage;
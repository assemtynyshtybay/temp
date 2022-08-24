import { styled } from '@mui/material';
import React, { useState } from 'react'
const Img = styled('img')`
    width: 100px;
    background-color:gray;
    position: fixed;
    right: 10px;
    top: 50px;
`
const Wrapper = styled('div')`
    width: 500px;
    border-radius: 10%;
    border: 1px solid black;
`
const Congrats = () => {
    const [open, setOpen] = useState(false);
    return(
        <Wrapper>
        <div>Узнай у кого сегодня день рождения</div>
        {
            open ?
            (
                <div>list</div>
            ):
            (
                <div>
                    <Img src="https://pngimg.com/uploads/confetti/small/confetti_PNG87068.png"/>
                </div>
            )
        }
        </Wrapper>
    )
}
export default Congrats;
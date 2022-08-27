import { styled } from '@mui/material';
import React, { useState } from 'react';
import {Button, Stack, SnackbarContent} from '@mui/material';
import Confetti from 'react-confetti';

const Wrapper = styled('div')`
    margin-bottom: 10px;
    margin-left: 10px;
    padding: 10px;
`
const Modal = styled('div')`
    position: absolute;
    width: 20%;
    height: 200px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0px 1px 10px 1px rgba(0, 0, 255, .2); 
    padding: 10px 20px;
    text-align: center;
`

const Congrats = () => {
    const [open, setOpen] = useState(false);
    const showBD = (e) => {
        e.stopPropagation();
        setOpen(!open);
    }
    const action = (
        <Button color="secondary" size="large" style={{color: "#59496A"}} onClick={(e)=>showBD(e)}>
            {open ? `Закрыть` : `Показать`}
        </Button>
    );

    return(
        <Wrapper>
            <div style={{position: 'absolute', bottom: '10px', right: '10px'}}>
                <Stack spacing={2} sx={{ maxWidth: 600}}>
                    <SnackbarContent style={{backgroundColor:"#2C2C2C"}} message="Узнай у кого день рождения!" action={action} />
                </Stack>
            </div>
        {
            open ?
            (
                <>
                    <Confetti
                        />
                    <Modal>
                        Поздравляем!   
                        
                    </Modal>
                </>
            ):
            (
                <div>
                    
                </div>
            )
        }
        </Wrapper>
    )
}
export default Congrats;
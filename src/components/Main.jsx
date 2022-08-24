import * as React from 'react';
import styled from "@emotion/styled";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Body = styled('div')`
    
`
const cars = [ "BMW", "Rolls Royce" ,"Ford","Ferrari", "Tesla","Audi"]

const Main = () => {
    const [value, setValue] = React.useState(cars[0]);
    const [inputValue, setInputValue] = React.useState('');
    return (
        <>
            <Body>
                <div>
                   
                </div>
            </Body> 
        </>
    )
}
export default Main;
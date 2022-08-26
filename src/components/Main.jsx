import * as React from 'react';
import styled from "@emotion/styled";
import { Typography, Accordion,AccordionSummary,AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Body = styled('div')`
    width: 70%;
    position: relative;
    left: 50%;
    transform: translate(-50%,10%);
    margin-left: ${(props) => (props.opened ? `10%` : `0px`)};
`

const Main = ({isopen}) => {
    console.log(isopen,"adsa")
    return (
        <>
            <Body opened={isopen}>
                <div>
                   <Typography sx={{fontSize: '28px',textAlign:'center'}}>Запросы</Typography>
                </div>
                <div style={{marginTop: '30px', height: '100%', padding: '10px 10px 10px 10px',backgroundColor: '#594A6B'}}>
                    <Accordion sx={{marginTop: '10px'}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Запрос 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Ваш Запрос "
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{marginTop: '10px'}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>Запрос 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Ваш запрос 2
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    </div>
            </Body> 
        </>
    )
}
export default Main;
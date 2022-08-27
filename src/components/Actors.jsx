import React, {useState,useEffect} from 'react';
import { Button, Input, Typography } from '@mui/material';
import styled from "@emotion/styled";

import axios from 'axios';

const ActorsWrapper = styled('div')`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 2px;
    width: 70%;
    height: 20vh;
    margin: 10%;
`
const ActorWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    
`
const Wrapper = styled('div')`
    display:flex;
    align-items: center;
    justify-content: center;
    background-image: url(${(props => props && props.img)});
    background-position: center;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(5px);
    background-repeat: no-repeat;
    background-size: cover;
    width:100%;
    height:100%;
`
const Actors = () => {
    const [name,setName] = useState('');
    const [actors, setActors] = useState([])
    const [search,setSearch] = useState([])
    const [searched,setSearched] = useState(false)
    console.log('actors', actors)
    const fetchActors = () => {
        return axios
          .get('https://www.breakingbadapi.com/api/characters')
          .then((res) => {setActors(res.data); console.log(res.data)});
        
      };
    
    const fetchActorsByName = () => {
        return axios
          .get(`https://www.breakingbadapi.com/api/characters/?name=${name}`)
          .then((res) => {setSearch(res.data); console.log(res.data);setSearched(true)});
        
    };
    const check=()=>{
        if(search === ''){
            setSearched(false);
        }
    }
    useEffect(() => {
        fetchActors();
      }, []);

    return(
        <>
        <div style={{margin: 'auto 0',display: 'flex',flexFlow: 'column',alignItems: 'center',width: '100%', height: '100%'}}>
            <Input size="large" value={name} onChange={(e)=> setName(e.target.value)}>Put the name of actor</Input>
            <Button onClick={() =>{fetchActorsByName(); check()}}>Search</Button>
            {
                    !searched && 
                    (<ActorsWrapper>
                        {actors && actors.map((item) =>(
                        <ActorWrapper>
                            <Typography>{item.name}</Typography>
                            <img alt="actor" src={item.img} style={{width: '100%', height: '100%'}}/>
                        </ActorWrapper>
                    )
                    )}
                    </ActorsWrapper>)
                }
            
            {
                search &&
                (
                    search && search.map((item) =>(
                        <Wrapper img={item.img}>
                                <div style={{width: '100%',height: '100%', margin: 'auto 0', display: 'flex',alignItems:'center', justifyContent: 'center',backdropFilter: 'blur(8px)'}}><img alt="actor" src={item.img} style={{width: '50%', height: '50%',filter: 'blur(0px)'}}/></div>
                        </Wrapper>
                    )
                    )
                )
            }
            
            </div>
        </>
    )
}
export default Actors;
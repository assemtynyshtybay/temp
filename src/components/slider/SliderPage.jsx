import { Button, Input } from '@mui/material';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import React from 'react';
import { useState } from 'react';


const SliderPage = () => {
    const [images,setImages] = useState(['https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg']);
    const [imageUrl,setImageUrl] = useState('gg')
    const addImage= () => {
        setImages([...images,imageUrl])
        setImageUrl("")
    }
    console.log(images)
    
    return(
        <>
            <div style={{margin: 'auto 0',display: 'flex',flexFlow: 'column',alignItems: 'center', height: '500px'}}>

            <Input value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}>Put the url</Input>
            <Button onClick={addImage}>Send</Button>
            <div className="slide-container" style={{width: '500px'}}>
            <Slide>
            {images && images.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{margin: "auto 0",width: '500px',height: '500px' ,backgroundRepeat: "no-repeat"}}>
                <img alt={slideImage} style={{width: '500px',height: '500px'}} src={slideImage}/>
              </div>
            </div>
          ))}
            </Slide>
            </div>
            </div>
        </>
    )
}
export default SliderPage;
import React,{useState} from 'react'
import Box from '@mui/material/Box';

const CatgoriesMap = ({el , i}) => {
    const [Scrool, setScroll] = useState(false);
  const changeBackground =()=>{
    
    if(window.scrollY>=300){
        setScroll(true)
        
    }
}
window.addEventListener('scroll' ,changeBackground )

    return (
        <Box className="h-40" style={{backgroundColor:i%2?"#f84816":"#2ac6dc", width:i=1?"250px":"25%"}} >
            <p >wissem</p>
        </Box>
    )
}

export default CatgoriesMap

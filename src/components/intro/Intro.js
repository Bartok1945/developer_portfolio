import "./intro.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();
    useEffect( () => {
        init(textRef.current, {
            showCursor: false,
            strings: ["Web Developer", "Sound Designer", "Musician", "Pizza Expert"],

        });
    }, []);
    return (
        <div className='intro' id="intro">
<div className='left'>
        <div className='imageContainer'>
            <img src='assets/HSCutout.png' alt=''/>
        </div>
</div>
<div className='right'>
  <div className='wrapper'>
      <h2>Hi! My name is</h2>
      <h1>Thom Huenger</h1>
      <h3>I am a <span ref={textRef}></span> </h3>
    
  
        <a href='#portfolio'>
            <ExpandMoreIcon className='icon'></ExpandMoreIcon>
            </a>
            </div>
        
</div>
        </div>
    );
};
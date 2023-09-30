import React, { useEffect, useState } from 'react';
import { meal } from '../../constants';
import { BsPauseFill,BsFillPlayFill} from 'react-icons/bs'
import './Intro.css';
import Aos from "aos"

const Intro = () =>{
  useEffect(() => {
    Aos.init({duration:2000})
   }, [])

const[playVideo,setplayVideo] =  useState(false);
  const VidRef = React.useRef();
      const handelVideo = () => {
        setplayVideo((prevPlayVideo) => !prevPlayVideo)
        if(playVideo){
          VidRef.current.pause();
        }else{
          VidRef.current.play();
        }
      }
  return(
    <div className='app__video' data-aos="fade-down-left">
      <video  src={meal}
              ref={VidRef} 
              type='Video/mp4'
              loop
              controls={false}
              muted
      
      />
        <div className='app__video-overlay flex__center' >
          <div className='app__video-overlay-circle flex__center'
          onClick={handelVideo} 
          >
            {playVideo ? (<BsPauseFill color='#fff' fontSize={30} />) : <BsFillPlayFill  color='#fff' fontSize={30}/>}
            
          </div>
      </div>
     </div>
  );
}


export default Intro;

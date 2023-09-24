import React, { useState } from 'react';
import { meal } from '../../constants';
import { BsPauseFill,BsFillPlayFill} from 'react-icons/bs'
import './Intro.css';

const Intro = () =>{
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
    <div className='app__video'>
      <video  src={meal}
              ref={VidRef} 
              type='Video/mp4'
              loop
              controls={false}
              muted
      
      />
        <div className='app__video-overlay flex__center'>
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

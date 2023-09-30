import React, { useEffect } from 'react';
import { useRef } from 'react';

import { BsInstagram ,BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import { images ,data} from '../../constants';
import { SubHeading } from '../../components';
import Aos from "aos"

import './Gallery.css';

const Gallery = () =>{
  useEffect(() => {
    Aos.init({duration:2000})
   }, [])
  const Gimages =[images.gallery01 ,images.gallery02,images.gallery03,images.gallery04]
  const scrollRef = useRef(null);
  
  const scroll = (direction) =>{
      const {current} = scrollRef;

      if(direction === 'left'){
        current.scrollLeft -= 300;
      }else{
        current.scrollLeft += 300;
      }
  };

  return (
    <div className='app__gallery flex__center' >
      <div className='app__gallery-content'  data-aos="fade-down" data-aos-delay="700">
      <SubHeading title='Instagram'/>
      <h1 className='headtext__cormorant'>Photo Gallary</h1>
      <p className='p__opensans' style={{color:'#AAA' ,marginTop:'2rem'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sint molestias. Aperiam ex voluptas debitis nam ea reiciendis hic. Magni?
      </p>
      <button type='button' className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-img'  data-aos="fade-down" data-aos-delay="700">
        <div className='app__gallery-img_container' ref={scrollRef}>
        {Gimages.map((image ,index) =>( 
        <div className='gallery__card flex__center' key={`gallery_images${index+1}`} >
          <img src={image} alt="Gallery-images" />
          <BsInstagram className='gallery-insta-icon'/>
          </div>
        ))}
        </div>
        <div className='gallery-arrow'>
          <BsArrowLeftShort className='arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='arrow-icon' onClick={() => scroll('right')}/>
         </div>
      </div>
      
    </div>
  );
}


export default Gallery;

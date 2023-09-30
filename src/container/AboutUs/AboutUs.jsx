import React, { useEffect} from 'react';
import images from '../../constants/images';
import './AboutUs.css';
import Aos from "aos"


const AboutUs = () =>
{
   useEffect(() => {
    Aos.init({duration:2000})
   }, [])
  return (
    <div  className='app__aboutus app__bg flex__center section__padding'id='about'>
     <div className='app__aboutus-overlay flex__center'  data-aos="fade-up">
      <img src={images.G} alt="G" />
      </div> 
      <div className='app__aboutus-content flex__center'  data-aos="fade-down" data-aos-delay="800">
        <div className='app__aboutus-content_about '>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="spoon-img" className='spoon__img'/>
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, incidunt. Odit mollitia nam, adipisci animi quia ex deserunt hic tempora facere soluta saepe nesciunt veniam voluptates cumque. Qui, quod? Consectetur?</p>
          <button type='button' className='custom__button' >Know More</button>
        </div>
        <div className='app__aboutus-content_knife flex__center'  data-aos="fade-up">
          <img src={images.knife} alt="Knife-img" />
        </div>
        <div className='app__aboutus-content_history '>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="spoon-img" className='spoon__img'/>
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, incidunt. Odit mollitia nam, adipisci animi quia ex deserunt hic tempora facere soluta saepe nesciunt veniam voluptates cumque. Qui, quod? Consectetur?</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
       </div>
    </div>
  );
}


export default AboutUs;

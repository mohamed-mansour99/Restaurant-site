import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';
import Laurels from '../Laurels/Laurels';

const Chef = () =>{
  return(      
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'> 
    <img src={images.chef} alt="Chef" />
    </div>
    <div className='app__wrapper_info  '>
        <SubHeading  title='Chefs Word'/>
        <h1 className='headtext__cormorant'>What We Believe In</h1>
          <div className='app__chef-content'>
            <div className='app__chef-content_quote'>
              <img src={images.quote} alt="Quote" />
              <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, facere.</p>
            </div>
                <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam corporis, quae quod doloremque mollitia tempora qui cupiditate quaerat aut, commodi, ea voluptatibus! Veritatis, at nulla excepturi ipsam ratione natus, aliquid officiis eaque cupiditate, illo unde?</p>
          </div>

          <div className='app__chef-sign'>
            <p >Mohamed Hassan🔪</p>
            <p className='p__opansans' style={{color:'#fff'}}>Chef & Progammer</p>
            <img src={images.sign} alt="chef-sign" />
          </div>

    </div>
  </div>

);


} 
export default Chef;

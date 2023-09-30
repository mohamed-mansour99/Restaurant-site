import React from 'react'
import { AboutUs, Gallery, Header ,Intro} from '../container'
 

const Home = () => {
  return (
    <div>
      <Header />
      <AboutUs  />
      <Gallery/>
      <Intro />
    </div>
  )
}

export default Home

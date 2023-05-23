import React from 'react'
import Navbar from '../components/Navbar'
import Calci from '../components/Calci'
import manimage from '../images/manimage.jpg'

const Homepage = () => {
  return (
    <div >
      <Navbar/>
      <div style={{'display':'flex'}}>
        <div class="col-md-5" id="hdc" style={{'width':'40%','marginLeft':'10%'}}><Calci/></div>
      
      <div>
        <img src={manimage} alt='man, calculator and currency' style={{'width':'70%'}}/>
      </div>
      </div>
      
    </div>
  )
}

export default Homepage

import React from 'react'
import Navbar from '../components/Navbar'
import Calci from '../components/Calci'
import manimage from '../images/manimage.png'
import { useState } from 'react'

const Homepage = () => {
 
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      
      document.body.style.backgroundColor = 'white';
      document.body.style.color='#0B1340'
      
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#0B1340';
      document.body.style.color='white'
      
    }
  }

  return (
    <div >
      <Navbar title="Dimiour" mode={mode} toggleMode={toggleMode} key={new Date()}/>
      <div style={{'display':'flex'}}>
        <div className="col-md-5 my-3"   id="hdc" style={{'width':'40%','marginLeft':'10%',"marginTop":'20%'}}><br/><br/><Calci/></div>
      
      <div>
        <img src={manimage} alt='man, calculator and currency' style={{'width':'70%'}}/>
      </div>
      </div>
      
    </div>
  )
}

export default Homepage

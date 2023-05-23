import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'




const Calci = () => {
    const updateCurrRate=async ()=>{
        

        const url = 'https://open.er-api.com/v6/latest/USD';
        const options = {
          method: 'GET',
          
        };
        
        try {
            const response = await fetch(url, options);
            const ans= await response.json();
            
            
            let value=ans.rates.INR;
            console.log(value)
            setCurr_rate(value)
        } catch (error) {
            console.error(error);
        }	
        
}
useEffect(()=>{
    updateCurrRate();
})
    
    const[curr_rate,setCurr_rate]=useState(82.80)
    const[currency,setCurrency]=useState('INR');
    const[input,setInput]=useState()
    const[DPH,setDPH]=useState()
    const onClick=()=>{
        if(currency==='INR'){
            let ans=input/2080;
            ans=ans/curr_rate;
            setDPH(ans);
        }
        else{
            setDPH(input)
        }
        
    }
    const onChange=(e)=>{
        
    setInput(e.target.value);
    
    }
    const currencyisINR=()=>{
     setCurrency("INR")
    }
    const currencyisDollar=()=>{
      setCurrency("Dollar")
    }
  return (
    <div>
      <h2>Enter INR value here</h2>
      <div className='input'>
        <input  type='text' name='inr' className='my-3' onChange={onChange} /> &nbsp;
  <button class="btn btn-secondary dropdown-toggle curr" style={{'width':'180px'}} type="button" data-bs-toggle="dropdown"  aria-expanded="false">
    Currency ({currency})
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" style={{'backgroundColor':`${currency==='INR'?'grey':'white'}`}} onClick={currencyisINR}>INR</button></li>
    <li><button class="dropdown-item" style={{'backgroundColor':`${currency==='INR'?'white':'grey'}`}} onClick={currencyisDollar}>Dollar</button></li>
    
  </ul>

      </div>
      <div className='output' name='dph'>
        <br/>
        <p>Ans={DPH}</p>
      </div>
      <button type='submit' className="btn btn-primary" onClick= {() => { onClick()}}>Convert</button>
      
    </div>
  )
}

export default Calci

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'





const Calci = () => {

    
    const[curr_rate,setCurr_rate]=useState(82.80)
    const[currency,setCurrency]=useState('INR');
    const[input,setInput]=useState()
    const[DPH,setDPH]=useState()
    const onClick=()=>{
        if(currency==='INR'){
            let ans=input/2080;
            ans=ans/curr_rate;
            ans = ans.toFixed(5);
            setDPH(ans);
        }
        else{
          let output=input/2080;
            setDPH(output)
        }
        
    }
    const onClear=()=>{
      setInput(0);
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
  return (
    <div className='mx-3 my-3'>
      <br/>
      <br/>
      
      <h1 style={{'fontSize':'50px','fontWeight':'700'}}>ENTER COST HERE</h1>
      <br/>
      <div className='input'>
        <input  type='text' name='inr' className='my-3 mx-1' placeholder='    Enter cost' value={input} onChange={onChange} /> &nbsp;
  <button class="btn btn-secondary dropdown-toggle curr" style={{'width':'180px','backgroundColor':'#e3f2fd','color':'black'}} type="button" data-bs-toggle="dropdown"  aria-expanded="false">
    Currency ({currency})
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" style={{'backgroundColor':`${currency==='INR'?'#e3f2fd':'white'}`}} onClick={currencyisINR}>INR</button></li>
    <li><button class="dropdown-item" style={{'backgroundColor':`${currency==='INR'?'white':'#e3f2fd'}`}} onClick={currencyisDollar}>Dollar</button></li>
    
  </ul>

      </div>
      <br/>
      <div className='output'  style={{'display':'flex'}} name='dph'>
       
      &nbsp;&nbsp; &nbsp;&nbsp;
        <div style={{'width':'180px','height':'40px','border':"1px solid grey",'borderRadius':'3px','backgroundColor':'white','color':'black'}} className=' col-md-4'> <p  className='mx-2'>{DPH}</p></div>
       <div style={{'display':"flex",'height':'40px'}}>
           <button type='submit'  className="btn btn-primary mx-2" onClick= {() => { onClick()}}>Calculate</button>
           <button className='btn btn-secondary' onClick={onClear}>Clear</button>
           </div>
      </div>
       

      <br/>
      
      
      
    </div>
  )
}

export default Calci

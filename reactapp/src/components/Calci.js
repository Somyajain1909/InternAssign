import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'





const Calci = () => {

    
    const[curr_rate,setCurr_rate]=useState(82.80)
    const[currency,setCurrency]=useState('INR (in LPA)');
    const[input,setInput]=useState("")
    const[DPH,setDPH]=useState("")
    const onClick=()=>{
        if(currency==='INR (in LPA)'){
          var numArr = input.split(',');
          
          let ans="";
          for (let index = 0; index < numArr.length; index++) {
            let element = numArr[index];
            let ansthis=element*100000/2080;
            ansthis=ansthis/curr_rate;
            ansthis = ansthis.toFixed(2);
           if(index===numArr.length-1){
            ans+=ansthis
           } 
           else{ans+=ansthis+", "}
          }
         
          
            
            
            setDPH(ans);
        }
        else{
          var numArrUSD = input.split(',');
          let ans="";

          for (let index = 0; index < numArrUSD.length; index++) {
            let element = numArrUSD[index];
            let ansthis=element/2080;
            
            ansthis = ansthis.toFixed(2);
           if(index===numArrUSD.length-1){
            ans+=ansthis
           } 
           else{ans+=ansthis+", "}
          }
         
          
            
            
            setDPH(ans);
        }
        
    }
    const onClear=()=>{
      setInput(0);
    }
    const onChange=(e)=>{
        
    setInput(e.target.value);
    
    }
    const currencyisINR=()=>{
     setCurrency("INR (in LPA)")
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
      
      
      <h1 style={{'fontSize':'50px','fontWeight':'700'}}>ENTER COST HERE</h1>
      <br/>
      <div className='input'>
      <div class="col-xs-4">
   
    <input name='inr'  class="form-control my-3 mx-1" id="ex3" type="text" placeholder='Enter comma-seperated cost' value={input} onChange={onChange}/>
  </div>
         &nbsp;
  <button class="btn btn-secondary dropdown-toggle curr" style={{'width':'190px','backgroundColor':'#e3f2fd','color':'black'}} type="button" data-bs-toggle="dropdown"  aria-expanded="false">
    Currency ({currency}) 
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" style={{'backgroundColor':`${currency==='INR (in LPA)'?'#e3f2fd':'white'}`}} onClick={currencyisINR}>INR  (in LPA)</button></li>
    <li><button class="dropdown-item" style={{'backgroundColor':`${currency==='INR (in LPA)'?'white':'#e3f2fd'}`}} onClick={currencyisDollar}>Dollar</button></li>
    
  </ul>

      </div>
      <br/>
      <div className='output'  style={{'display':'flex'}} name='dph'>
       
      &nbsp;&nbsp; &nbsp;&nbsp;
        <div style={{'width':'570px','height':'40px','border':"1px solid grey",'borderRadius':'3px','backgroundColor':'white','color':'black'}} className=' col-md-4'> <p  className='mx-2'>{DPH}</p></div>
     
      </div>
      <div style={{'height':'40px','width':'300px','marginLeft':"40%"}}>
           <button type='submit'  className="btn btn-primary mx-2" onClick= {() => { onClick()}}>Calculate</button>
           <button className='btn btn-secondary' onClick={onClear}>Clear</button>
           </div>

      <br/>
      
      
      
    </div>
  )
}

export default Calci

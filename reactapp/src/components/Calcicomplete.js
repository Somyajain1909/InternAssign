import React from 'react'
import { useState } from 'react';

const Calcicomplete = (props) => {
    let dollar_cr=props.dollar_cr;
    let overhead=props.overhead; 
    const[currency,setCurrency]=useState('INR');
    const[sell_rate,Setsell_rate]=useState()
    const[sell_rate_rounded,SetSell_rate_rounded]=useState()
    const[DPH,setDPH]=useState()
    const[input,setInput]=useState()
    const[margin,SetMargin]=useState(0)
    const[overhead_value,setOverhead_value]=useState()
    const onChangeCost=async (e)=>{
        
       
       let Input=await e.target.value
       setInput(Input)
       if(currency==='INR'){
        let ans=Input/2080;
       ans=ans/ dollar_cr
       ans = ans.toFixed(2);
        setDPH(ans)
        let DPH2=await Input/2080/dollar_cr
        let ans2=DPH2*overhead/100;
        ans2 = ans2.toFixed(2);
        setOverhead_value(ans2);
        let ans1= DPH2*100/(100-margin);
        let over=ans2
        ans1=await +ans1 +  +over;
        ans1=ans1.toFixed(2);
        Setsell_rate(ans1);
     
        let sell_rate2=await +(DPH2*100/(100-margin))+ +over
        let ans3=Math.ceil(sell_rate2);
        SetSell_rate_rounded(ans3)
    }
    else{
        let ans=Input;
       
       
        setDPH(ans)
        let DPH2=await Input
       
        setOverhead_value(0);

        let ans1=  await +(DPH2*100/(100-margin))
        
        ans1= await ans1.toFixed(2)
        Setsell_rate(ans1);
       
     
        let sell_rate2=await +(DPH2*100/(100-margin))
        let ans3=Math.ceil(sell_rate2);
        SetSell_rate_rounded(ans3)
    }
   

  
       
        
     }


const onChangeMargin=async (e)=>{
let Margin= await e.target.value;
SetMargin(Margin)
let ans= DPH*100/(100-Margin);
let over=overhead_value
ans= +ans +  +over;
Setsell_rate(ans);

let sell_rate2=await +(DPH*100/(100-Margin))+ +over
let ans2=Math.ceil(sell_rate2);
SetSell_rate_rounded(ans2)

}
const currencyisINR=async ()=>{
    setCurrency("INR")
    let Input= input
    let ans=Input/2080;
    ans=ans/ dollar_cr
    ans = ans.toFixed(2);
     setDPH(ans)
     let DPH2=await Input/2080/dollar_cr
     let ans2=DPH2*overhead/100;
     ans2 = ans2.toFixed(2);
     setOverhead_value(ans2);
     let ans1= DPH2*100/(100-margin);
     let over=ans2
     ans1=await +ans1 +  +over;
     ans1=ans1.toFixed(2);
     Setsell_rate(ans1);
  
     let sell_rate2=await +(DPH2*100/(100-margin))+ +over
     let ans3=Math.ceil(sell_rate2);
     SetSell_rate_rounded(ans3)

   }
   const currencyisDollar=async ()=>{
     setCurrency("Dollar")
     let ans=input;
       
       
     setDPH(ans)
     let DPH2=await input
    
     setOverhead_value(0);

     let ans1=  await +(DPH2*100/(100-margin))
     
     ans1= ans1.toFixed(2)
     Setsell_rate(ans1);
    
  
     let sell_rate2=await +(DPH2*100/(100-margin))
     let ans3=Math.ceil(sell_rate2);
     SetSell_rate_rounded(ans3)
   }

   
    
  return (
    <div className='my-3'>
    <div className='my-3 mx-2' style={{'marginLeft':'10%'}}>
    <div   className="input-group mb-3 ">
        
    <button className="btn btn-secondary dropdown-toggle curr" style={{'borderRadius':"4px",'width':'190px','height':"40px",'backgroundColor':'#0E7680','color':'white','marginTop':'27.5px'}} type="button" data-bs-toggle="dropdown"  aria-expanded="false">
    Currency ({currency}) 
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" style={{'backgroundColor':`${currency==='INR'?'#e3f2fd':'white'}`}} onClick={currencyisINR}>INR</button></li>
    <li><button className="dropdown-item" style={{'backgroundColor':`${currency==='INR'?'white':'#e3f2fd'}`}} onClick={currencyisDollar}>Dollar</button></li>
    
  </ul> &nbsp; &nbsp;
  <div style={{'marginTop':'0px','color':'#0E7680','fontWeight':'bolder'}}>
  &nbsp; &nbsp;Cost (input)
  <input type="text" style={{"height":"40px",'borderRadius':'3px','color':'black'}} value={input}  onChange={onChangeCost} className="form-control  mx-1 my-1"  placeholder="Enter Cost" aria-label="cost"/>&nbsp; &nbsp;
  </div>
    <div className='mx-3' style={{'color':'#0E7680','fontWeight':'bolder'}}>
        Hourly $ cost
    <div style={{'width':'180px','height':'40px','border':"1px solid #0E7680",'borderRadius':'3px','backgroundColor':'white','color':'black'}} className='my-1' ><p className='mx-2 my-1'>{DPH} </p>   </div>
    Overhead(+)<div style={{'width':'180px','height':'40px','border':"1px solid #0E7680",'borderRadius':'3px','backgroundColor':'white','color':'black'}} className="my-2" ><p className='mx-2 my-1'>{overhead_value} </p> </div>
    </div>
    <div style={{'marginTop':'0px','color':'#0E7680','fontWeight':'bolder'}}>
  &nbsp; &nbsp;Margin (input)
    <input style={{"height":"40px",'borderRadius':'3px','color':'black'}} type="text"  onChange={onChangeMargin} className="form-control mx-1  my-1" placeholder="Specify margin (default 0%)" aria-label="Margin"/></div>
    <div className='mx-3' style={{'color':'#0E7680','fontWeight':'bolder'}}>
        Sell Rate
    <div style={{'width':'180px','height':'40px','border':"1px solid #0E7680",'borderRadius':'3px','backgroundColor':'white','color':'black'}} className='my-1' ><p className='mx-2 my-1'> {sell_rate}</p>  </div>
   Sell Rate rounded <div style={{'width':'180px','height':'40px','border':"1px solid #0E7680",'borderRadius':'3px','backgroundColor':'white','color':'black'}} className="my-2" ><p className='mx-2 my-1'> {sell_rate_rounded} </p> </div>
    </div>
    
   
    </div>
<hr/>
    </div>
    </div>
  )
}

export default Calcicomplete

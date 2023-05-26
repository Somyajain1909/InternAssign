
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Calcicomplete from './components/Calcicomplete';
import Navbar from './components/Navbar'


function App() {
  const[numCalci,setNumCalci]=useState([1]);
  const[overhead,SetOverhead]=useState();
  const[curr_rate,setCurr_rate]=useState(80)
  const addCalci=()=>{
    let num=numCalci.length+1;
   setNumCalci(numCalci.concat(num));
   
  }
  const onChangeOverhead=async (e)=>{
    let o=await e.target.value
    SetOverhead(o)
  }
  const onChangeCR= async (e)=>{
    let er=await e.target.value
    setCurr_rate(er)
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
        
        setCurr_rate(value)
    } catch (error) {
        console.error(error);
    }	
    
}
useEffect(()=>{
updateCurrRate();
},[])
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
    <>
    <Navbar mode={mode} toggleMode={toggleMode} key={new Date()}/>
    <div style={{'marginTop':'5%','marginBottom':'6%'}}>
    <div className="input-group mb-3">

    <span className="input-group-text" style={{'color':'white','backgroundColor':'#0E7680','borderColor':'#0E7680','marginLeft':'9px','borderTopLeftRadius':'3px','borderBottomLeftRadius':'3px'}}>Enter custom conversion rate
    (optional)</span>
  <input type="text" onChange={onChangeCR} style={{"height":"40px",'borderRadius':'3px','color':'black','marginRight':'9px','borderTopRightRadius':'3px','borderBottomRightRadius':'3px'}}  className="form-control" placeholder="Exchange rate" aria-label="Exchange rate"/>
  &nbsp; &nbsp;
  <span style={{'color':'white','backgroundColor':'#0E7680','borderColor':'#0E7680','marginLeft':'9px','borderTopLeftRadius':'3px','borderBottomLeftRadius':'3px'}} className="input-group-text">Enter Overhead %</span>
    <input type="text" style={{"height":"40px",'width':'2px','borderRadius':'3px','color':'black','marginRight':'9px','borderTopRightRadius':'3px','borderBottomRightRadius':'3px'}} onChange={onChangeOverhead} className="form-control"  placeholder="Enter overhead percentage" aria-label="overhead"/>
</div>
<p style={{'color':'#0E7680','marginLeft':'50%','fontWeight':'bolder'}}>(To be updated before calculations)</p>
    </div>
  

   <div style={{'marginLeft':'5%'}}>
    {numCalci.map((item)=>{
      return <><Calcicomplete key={item} dollar_cr={curr_rate} overhead={overhead} addCalci={addCalci}/></>})}
   </div>
   <div style={{'marginLeft':'80%'}}><i className="fa-solid fa-circle-plus fa-3x my-3 mx-3" onClick={addCalci} style={{"color":"#0E7680"}}></i><h5>Add Cell</h5></div>
  
      
    </>
  );
}

export default App;

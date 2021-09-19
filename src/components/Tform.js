import React,{useState} from 'react'


function Tform(props) {
    
   const  handleUpClick =()=>{
       let newText=text.toUpperCase();
       setText(newText)
       props.showAlert('Text has been converted to UpperCase','success')
   }
   const  handleLowClick =()=>{
        let newText=text.toLowerCase();
       setText(newText)
       props.showAlert('Text has been converted to LowerCase','success')
   }
   const  handleonChange =(event)=>{
    // console.log("onChange")
    setText(event.target.value)
    }
   const  handlenotextClick =(event)=>{
    // console.log("onChange")
    let newText="";
       setText(newText)
       props.showAlert('Text has been removed','success')
    }

    const handlecopy =()=>
    {
    
       
        navigator.clipboard.writeText(text);
        props.showAlert('Text has been copied to clipboard','success')
    }
    const handleextraspace =()=>
    {
       
        let txt=text.split(/[ ]+/);
        setText(txt.join(" "));
        props.showAlert('Extaspaces have been removed from the text','success')
    
    }

    const [text,setText]=useState('');

    return (
        <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
         <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} id="mytxt" rows="9"></textarea>
</div>  
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlenotextClick}>Clear Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleextraspace}>Remove Extraspace </button>
  </div>
  <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} word and {text.length} characters</p>
      <p>{0.008 *text.split(" ").filter((elem)=>{return elem.length!==0}).length} minutes on an average to read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text:"No text to preview"}</p>
  </div>
        </>
    )
}

export default Tform

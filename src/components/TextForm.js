import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case","success");
    }
    const handleLoClick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success");
    }
    const handleClearClick =()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleCapitalize=()=>{
          let capital=text.split(" ");
          for(let i=0;i<capital.length;i++){
            capital[i]=capital[i][0].toUpperCase() + capital[i].slice(1);
          }
          setText(capital.join(" "));
          props.showAlert("First Letters Capitalized","success");
    }
    const[text, setText]= useState('');
    let l=text.split(" ").length;
    if(text==="")
    {
        l=0;//setting no of words to zero initially
    }
    //we need to  use setText in order to change the text above
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h2 className='mb-2'>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>   
        <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleClearClick}>Clear Text</button>   
        <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleCapitalize}>Capitalize First Letters</button>   
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h2>Your Text Summary</h2>
        <p>{l} words and {text.length} characters</p>
        <p>{0.008*l} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  )
}

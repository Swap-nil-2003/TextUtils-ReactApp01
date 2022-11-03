import React, { useState } from 'react'

export default function About() {
    const[myStyle,setMyStyle]= useState(
    {
        color:'black',
        backgroundColor:'white'
    })

    const[btntext,setBtnText]=useState("Enable Dark Mode")

    const toggleStyle = ()=>{
        if(myStyle.color==='black')
        {
            setMyStyle({
                color:'white',
                backgroundColor:'#13466e'
            })
            setBtnText("Enable Light Mode");
        }
        else
        {
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }
  return (
    <div className="container" style={myStyle}>
        <h1 className="mt-2 mb-2 pt-2">About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils provides you an efficient way to analyze your text with respect to word count, no of characters etc.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a completely tool for you to use and you can use it to analyze and manipulate text as per your wish.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils can work on any browser - Chrome, Firefox, Safari,Opera etc. You may count characters from any texts such as essays, articles, or stories
      </div>
    </div>
  </div>
</div>
    <div className="container my-3">
    <button onClick={toggleStyle} type="button" className="btn btn-primary mb-3">{btntext}</button>
    </div>
    </div>
  )
}

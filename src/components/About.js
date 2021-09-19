import React,{useState} from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState(
    //     {
    //         color:'black',
    //         backgroundColor:"#d6d9dc"

    //     }
    // )
    let myStyle={
      color:props.mode==='dark'?'black':'black',
      backgroundColor: props.mode==='dark'?'#d6d9dc':'white'

    }
    const [btntext, setbtntext] = useState("Enable light Mode")

    // const changeStyle =()=>{
    //     if(myStyle.color=='white')
    //     {
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:"white"
    //         })
    //         setbtntext("Enable Dark Mode");
    //     }
    //     else
    //     {
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:"gray"
    //         })
    //         setbtntext("Enable Light Mode");
    //     }
    // }
     return (
        <>
         <div className="container" style={myStyle}>
         <h1 className="my-1">About us</h1>
         <div className="accordion" id="accordionExample" style={myStyle} >
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne" style={myStyle}>
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About the site
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Free software utility which allows you to find the most frequent phrases and frequencies of words. Non-English language texts are supported. It also counts number of words, characters, sentences and syllables</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo" style={myStyle}>
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Functionality of site
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Use this text analyzer to automatically find frequent keywords and phrases in your text data.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree" style={myStyle}>
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        How its built
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>It is built using Reactjs, JavaScript and bootstrap.</strong>
      </div>
    </div>
  </div>
 </div>
{/* // <div className="container my-3">
//    <button type="button" onClick={changeStyle} className="btn btn-primary">{btntext}</button>
//    </div> */}
         </div>   
        </>
    )
}

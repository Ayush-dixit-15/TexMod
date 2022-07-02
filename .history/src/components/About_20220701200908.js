import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }) 
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    
    return (
        <div className="container" style={myStyle}>
            <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
            <div class="accordion" id="accordionExample" style={myStyle}>
  <div class="card">
    <div class="card-header" id="headingOne" style={myStyle}>
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
          The app
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
         Thie is is a single page react application made using the concepts of ReactJs, Bootstrap and the react-router-dom. This helps user to manipulate the data as required.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo" style={myStyle}>
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
          Compatibility
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
       This react applicaion is compatible to all sorts of web browsers be it Chrome, Eplorer, Firefox or Opera.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree" style={myStyle}>
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
         The deeloper
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
       The tex-mod application is devloped by Ayush Dixit, an Undergrad at Bharati Vidyapeeth College of Engineering, New Delhi .
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
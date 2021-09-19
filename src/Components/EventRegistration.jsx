import React from 'react'

function EventRegistration(props) {
  return (
    <div id='register'>
    <div id='about'>
       <div className='register-text'>
         <h2> {props.title} </h2>
         <p>dmfgner ighufjgrb yt yu ;gh,dfh dfgjnsioerg fldgndk kh uydnvrtvgfn hehjn,hn.</p>
         <button>{props.button}</button>
       </div>
       <div className='about-image'>
       <img src={props.image} alt=''/>
     </div>
    </div>
    </div>
  );
}

export default EventRegistration;

import React from 'react'
import vision from '../images/vision.svg';
import mission from '../images/mission.svg';
function Vision(props) {
  return (
    <div>
      <div className='spacer' id='mission' ></div>

      <div id='presentaion'>
        <h1 id='presentation-heading'> About Us </h1>
        <p className='presentaion-p'> sldkhosajvnjsdfh fjsdcnosfoiAF IFiojdFHEWIDjp SKDJGFSJKDFH shfasehfahef hefah fowier ooehfu wtguew rIUHDoahdu ewrw fhef ysgfshfwuefg iweufgwyfg iewfgeywfg ueiwgf iefguwegfweuifg fIFUFUEHFEUF AOIJFUEFHEJDOAIHFUF HFUIWQFBOHFUWFH OFHWIUQFHJO  IWFHW </p>
        <div className='presentaion-image'>
          <img src={props.image} alt='' />
        </div>
        <div id='present'>
          <div id='box'>
          <div>
            <img src={vision} alt='' />
            </div>
            <div  className='s-b-text'>
            <h2 style={{color: "#323232"}}>Vision</h2>
            <p>kjdfsd nkjdshu ifkjdf hoiwhf vnbckjvcn vkjvsvg dgsgs afgdg sdhz dtgsn AFgbsnx stjxjnt sxjxdcfd adfgrstgth sr</p>
          </div>
          </div>
          <div id='box'>
          <div >
          <img src={mission} alt='' />
          </div>
          <div  className='s-b-text'>
          <h2 style={{color: "#323232"}}> Mission</h2>
          <p>kjdfsd nkjdshu ifkjdf hoiwhf vnbckjvcn vkjvsvg dgsgs afgdg sdhz dtgsn AFgbsnx stjxjnt sxjxdcfd adfgrstgth sr</p>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;

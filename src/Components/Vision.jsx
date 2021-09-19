import React from 'react'
import trohy from '../images/trophy.svg';
import trohy2 from '../images/trophy2.svg';
import trohy3 from '../images/trophy3.svg';
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
            <img src={trohy} alt='' /><br />
            <p>kjdfsd nkjdshu ifkjdf hoiwhf vnbckjvcn vkjvsvg dgsgs afgdg sdhz dtgsn AFgbsnx stjxjnt sxjxdcfd adfgrstgth sr</p>
          </div>
          <div id='box'>
            <img src={trohy3} alt='' /><br />
            <p>kjdfsd nkjdshu ifkjdf hoiwhf vnbckjvcn vkjvsvg dgsgs afgdg sdhz dtgsn AFgbsnx stjxjnt sxjxdcfd adfgrstgth sr</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;

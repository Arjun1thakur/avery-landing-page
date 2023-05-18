import React from 'react'
import Banner from '../../assets/img/BlueCar.png'
import './HomeFrame2.css'
let style={
    backgroundImage:`url(${Banner})`,
    height:"100vh",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:"center",
  }
const HomeFrame2 = ({prop}) => {
  return (
    <div style={style}>
      <div className='HomeContent2'>
          <div className='HomeContent2main'>
            <h1>DOL Max Overlaminate Films</h1>
            <p>Printed graphics deserve maximum protection, DOL Max is the solution.</p>
          </div>
          <div className='FeaturesHome2'>
            <h3 style={{fontWeight:"bold"}}>Features & Benefits:</h3>
            <ul>
              <li>Premium vertical durability of up to 7 years and up to 2 years horizontal durability protection.</li>
              <li>The high gloss finish enhances the appearance of graphics and adds a special touch to help your graphics stand out.</li>
              <li>Our digital overlaminates can be used on a variety of substrates, including banners, vehicle graphics, outdoor signage, and more.</li>
            </ul>
            <button className='btn' onClick={()=>{
              prop()
              window.scrollTo(0, 0)
              }}>
              Inquire now 
            <i className="fa-solid fa-arrow-right btnarrow"></i>
            </button>
          </div>
      </div>
  </div>
  )
}

export default HomeFrame2
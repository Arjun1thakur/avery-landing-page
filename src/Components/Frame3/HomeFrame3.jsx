import React from 'react'
import './HomeFrame3.css'
import Grass from '../../assets/img/grass.png'
import Slot1 from '../../assets/img/svg/slot1.svg'
import Slot2 from '../../assets/img/svg/slot2.svg'
import Slot3 from '../../assets/img/svg/slot3.svg'
import Slot4 from '../../assets/img/svg/slot4.svg'
let style={
    backgroundImage:`url(${Grass})`,
    // height:"90vh",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
const HomeFrame3 = ({prop}) => {
  return (
    <div  className='HomeFrame3'>
        <div className='HomeFrame3img'  style={style}></div>
        <div className='bookslot'>
            <h1 style={{"margin":"20px"}}>Why us?</h1>
            <div className='slotBox'>
                <div className='slot'>
                    <div className='cirlce circleslot'>
                        <img src={Slot1}  alt="Quality" />
                    </div>
                    <div className='slotContent'>
                        <h3>Quality Products</h3>
                        <p>Quality Products Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</p>
                    </div>
                </div>
                <div className='slot'>
                    <div className='cirlce circleslot'>
                        <img src={Slot2} alt="Quality" />
                    </div>
                    <div className='slotContent'>
                        <h3>Multiple Options</h3>
                        <p>Multiple Options We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition.</p>
                    </div>
                </div>
                <div className='slot'>
                    <div className='cirlce circleslot'>
                        <img src={Slot3} alt="Quality" />
                    </div>
                    <div className='slotContent'>
                        <h3>Expertise and Support</h3>
                        <p>Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond.</p>
                    </div>
                </div>
                <div className='slot'>
                    <div className='cirlce circleslot'>
                        <img src={Slot4} alt="Quality" />
                    </div>
                    <div className='slotContent'>
                        <h3>Durability Assurance</h3>
                        <p>Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.</p>
                    </div>
                </div>
            </div>
                <button className='btn' onClick={()=>{
                    window.scrollTo(0, 0)
                    prop()}}>
                    Request a call back
                    <i className="fa-solid fa-arrow-right btnarrow"></i>
                </button>
        </div>
    </div>
  )
}

export default HomeFrame3



/* 
  Durability Assurance Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.

*/
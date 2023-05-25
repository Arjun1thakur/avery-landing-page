import React,{useEffect, useState} from 'react'
import HomeFrame1 from '../Components/Frame1/HomeFrame1'
import HomeFrame2 from '../Components/Frame2/HomeFrame2'
import HomeFrame3 from '../Components/Frame3/HomeFrame3'
import Footer from '../Components/Footer/Footer'
import SecFooter from '../Components/infoFooter/SecFooter'
import Contact from '../Components/Contact/Contact'
import Toast from '../Components/toast/Toast'
const Home = () => {
  let [show,setShow]=useState(true)
  let [message,setMessage]=useState(false)
  const [sidebarTop, setSidebarTop] = useState(undefined);
  const [sidebarWidth, setSidebarWidth] = useState(undefined);
  useEffect(() => {
    const sidebarEl = document.querySelector('.contact').getBoundingClientRect();
    setSidebarWidth(sidebarEl.width);
    setSidebarTop(sidebarEl.top);
  }, []);
  const isSticky = (e) => {
    const sidebarEl = document.querySelector('.contact');
    const scrollTop = window.scrollY;
    if (scrollTop >= sidebarTop - 10) {
      sidebarEl.classList.add('is-sticky');
    } else {
      sidebarEl.classList.remove('is-sticky');
    }
  }
  useEffect(()=>{
    if (!sidebarTop) return;
 
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    }
  },[sidebarTop,isSticky])
  
  let updateMessage=()=>{
    setTimeout(()=>{
      setMessage(false)
    },2000)
    setMessage(true)
  }
  let update=()=>{
    setShow(false)
  }
  let display=()=>{
    setShow(true)
  }
  return (
    <>
        <HomeFrame1/>
        {show ? <Contact prop={update} updateMessage={updateMessage} sidebarwidth={sidebarWidth}/> : null}
        <HomeFrame2 prop={display}/>
        <HomeFrame3 prop={display}/>
        <Footer/>
        <SecFooter/>
        {message ? <Toast/> : null}
    </>
  )
}

export default Home
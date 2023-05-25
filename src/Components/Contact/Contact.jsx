import React, { useEffect, useState } from 'react'
import './contact.css'
const Contact = ({prop,updateMessage,sidebarwidth}) => {
  let [data,setData]=useState({})
  const [errors, setErrors] = useState({})
    useEffect(()=>{
        window.scrollTo(0, 0);
        // let contact=document.querySelector("contact")

    },[])
  let onChangeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  function emailValidation(){
    return /\S+@\S+\.\S+/.test(data.email)
    }

  let submitHandler=(e)=>{
    e.preventDefault()
    let errors = {};
    if (!data.fname) {
      errors.fname = 'First name is required';
    }
    if(data.fname && data.fname.match("^[a-zA-Z]*$") ==null){
      errors.fname = 'First name is not valid';
    }
    if (!data.lname) {
        errors.lname = 'Last name is required';
    }
    if(data.lname && data.lname.match("^[a-zA-Z]*$") ==null){
        errors.lname = 'Last name is not valid';
    }
    if (!data.email) {
      errors.email = 'Email is required';
    }
    if(!emailValidation()){
        errors.email = 'Email is not valid';
    }
    if (!data.number) {
        errors.number = 'Number is required';
    }
    if (data.number && data.number.length!==10) {
        errors.number = 'Incorrect Number';
    }
    if (!data.company) {
        errors.company = 'Company value is required';
    }
    if (!data.state) {
        errors.state = 'State is required';
    }
    if (!data.describe) {
        errors.describe = 'Discription is required';
    }
    if (!data.Distributor) {
        errors.Distributor = 'Distributor is required';
    }
    if (!data.additional) {
        errors.additional = 'Additional Info is required';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    errors={}
    prop()
    window.scrollTo(0,0)
    updateMessage()
  }

  return (
    <div className='contact' style={{ width: sidebarwidth }}>
        <div>
            <h2>Connect with us</h2>
            <h5 style={{fontFamily:"Aktifoa-light"}}>for outstanding protective overlaminates</h5>
        </div>
        <div  style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <label htmlFor="fname">First Name</label>
                <input type="text" onChange={onChangeHandler} name='fname' />
                {errors.fname && <span style={{fontSize:"12px",color:"red"}}>*{errors.fname}</span>}
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <label htmlFor="lname">Last Name</label>
                <input type="text" onChange={onChangeHandler} name='lname' />
                {errors.lname && <span style={{fontSize:"12px",color:"red"}}>*{errors.lname}</span>}
            </div>
        </div>
        <div  style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <label htmlFor="email">Email</label>
                <input type="email"  onChange={onChangeHandler} name='email'/>
                {errors.email && <span style={{fontSize:"12px",color:"red"}}>*{errors.email}</span>}
            </div>
            <div  style={{display:"flex",flexDirection:"column"}}>
                <label htmlFor="number">Contact Number</label>
                <input type="number"  onChange={onChangeHandler} name='number' />
                {errors.number && <span style={{fontSize:"12px",color:"red"}}>*{errors.number}</span>}
            </div>
        </div>
        <div  style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <label htmlFor="company">Company</label>
                <input type="text" onChange={onChangeHandler} name='company'/>
                {errors.company && <span style={{fontSize:"12px",color:"red"}}>*{errors.company}</span>}
            </div>
            <div  style={{display:"flex",flexDirection:"column"}}>
                <label htmlFor="lname">State</label>
                <select name="state" onChange={onChangeHandler}>
                    <option value="">Default</option>
                    <option value="UP">UP</option>
                    <option value="MP">MP</option>
                    <option value="TN">TN</option>
                </select>
                {errors.state && <span style={{fontSize:"12px",color:"red"}}>*{errors.state}</span>}
            </div>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
            <label htmlFor="describe">How would you describe yourself?</label>
            <select name="describe" className='select' onChange={onChangeHandler}>
                <option value="">Default</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Full stack Developer">Full stack Developer</option>
            </select>
            {errors.describe && <span style={{fontSize:"12px",color:"red"}}>*{errors.describe}</span>}
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
            <label htmlFor="Distributor">Preferred Distributor:</label>
            <select name="Distributor" className='select' onChange={onChangeHandler}>
                <option value="">Default</option>
                <option value="AJ">AJ</option>
                <option value="Ajju">Ajju</option>
                <option value="Arjun">Arjun</option>
            </select>
            {errors.Distributor && <span style={{fontSize:"12px",color:"red"}}>*{errors.Distributor}</span>}
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
            <label htmlFor="describe">Additional Information</label>
            <textarea name="additional" onChange={onChangeHandler} cols="20" rows="5"></textarea>
            {errors.additional && <span style={{fontSize:"12px",color:"red"}}>*{errors.additional}</span>}
        </div>
        <div>
            <input type="checkbox" onChange={onChangeHandler} style={{all:"revert"}} name="add" id="check" />
            <label htmlFor="check">I'd like to receive promotions, product information and service offers from Avery Dennison.</label>
        </div>
        <div style={{"textAlign":"center"}}>
            <button className='btn' onClick={submitHandler}>
            Submit  
            <i className="fa-solid fa-arrow-right btnarrow"></i>
            </button>
        </div>
    </div>
  )
}

export default Contact


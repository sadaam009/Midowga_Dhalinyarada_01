import React, { useEffect, useState } from 'react'
import logo from '../assets/logoone.png'
export default function Signup() {
    const[data,setData]=useState({
        name:"",
        number:"",
        city:"",
        education:"",
        job:"",
        bloodtype:"",
        aqoonsi:""
    })
   const {name,number,city,education,job,bloodtype,aqoonsi}=data;
    useEffect(()=>{
document.body.style.backgroundColor='#75E2E9'
    },[]) 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value,
        });
      };
    const Register=(e)=>{
        e.preventDefault();
        console.log(data)
    }
  return (
   
   <div className="flex justify-center mx-[3rem] mt-[1rem] my-[6rem]  relative">
   

    <div className="w-[50%]   h-[100vh] bg-white rounded-md  ">
    <img className=' w-[20%] absolute  left-[30rem] ' src={logo} alt="" />
    <h1 className=' text-[2rem] text-center font-semibold pt-[5rem]  '>Form 
        <span className=' text-blue-500'> Registration</span></h1>
        
       <div className=" mt-[1rem] space-y-4 ">
      
       
       <div className="  ml-[2.3rem] flex items-center  space-x-2">

       <div className="">
       <label className=' text-[1.1rem] font-semibold ' htmlFor="">Name</label><br />
        <input className=' w-[250px] py-3 px-4 border-2 border-gray-200
         outline-none  ' type="text" 
         value={name} 
        //  id='name'
         name='name'
          placeholder='Soo Gali Magacaaga' 
          onChange={handleChange} />
       </div>

       <div className="">
       <label className=' text-[1.1rem] font-semibold ' htmlFor="">Number</label><br />
        <input className=' w-[250px] py-3 px-4 border-2 border-gray-200
         outline-none  ' type="text" 
         value={number}
          placeholder='Soo Gali Lambarka'
          name='number'
          onChange={handleChange} />
       </div>
        </div>

        <div className=" ml-[2.3rem] flex items-center  space-x-2">

           <div className="">
           <label className=' text-[1.1rem] font-semibold ' htmlFor="">City</label><br />
            <input className=' w-[250px] py-3 px-4 border-2 border-gray-200
             outline-none  ' type="text" 
             value={city}
             name='city'
              placeholder='Soo Gali Degaankaga'
                onChange={handleChange}/>
                
           </div>

       <div className="">
         <label className=' text-[1.1rem] font-semibold ' htmlFor=""> Education Stage </label><br />
         <select
          id="education"
          name="education"
          value={education}
          onChange={handleChange}
          required
          className="appearance-nonerounded w-[250px] py-3 px-4 border-2 border-gray-200
       outline-none  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Dooro Heerka Waxbarasho</option>
          <option value="Waxba">Waxba</option>
          <option value="Dugsisare">Dugsisare</option>
          <option value="Jaamacad">Jaamacad</option>
          <option value="Master">Master</option>
          <option value="Phd">Phd</option>
       
        </select>
          </div>
       </div>

      <div className="  ml-[2.3rem] flex items-center  space-x-2">

        <div className="">
        <label className=' text-[1.1rem] font-semibold ' htmlFor="">Job</label><br />
        <input className=' w-[250px] py-3 px-4 border-2 border-gray-200
       outline-none  ' type="text" 
       value={job}
        placeholder='Soo Gali Darajada shaqadaada' 
        name='job'
         onChange={handleChange} />
        </div>

   <div className="">
     <label className=' text-[1.1rem] font-semibold ' htmlFor="">Bloodtype</label><br />
     <select
          id="bloodtype"
          name="bloodtype"
          value={bloodtype}
          onChange={handleChange}
          required
          className="appearance-nonerounded w-[250px] py-3 px-4 border-2 border-gray-200
       outline-none  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Dooro Nuuca Dhiiga</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
   </div>
     </div>

      
        <div className=" space-y-3 ml-[2.3rem]">
        <label className=' text-[1.1rem] font-semibold ' htmlFor="">ID Card</label><br />
        <input className=' w-[500px] py-3 px-4 border-2 border-gray-200
         outline-none  ' type="text" 
         value={aqoonsi} 
         name='aqoonsi'
         placeholder='Soo Gali Aqoonsi Lambarka'  onChange={handleChange} />
        </div>
        <button className=' py-2 px-5 bg-blue-500 text-white font-semibold
         text-[1.2rem] rounded-md ml-[2.4rem] ' onClick={Register}>Submit Form</button>
       </div>

       
         
    </div>
   




   </div>
  )
}

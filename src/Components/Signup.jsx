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
   
   <div className="flex lg:justify-center lg:mx-[3rem] lg:mt-[1rem] mt-[1rem] lg:my-[6rem] mx-[0.8rem]  relative">
   

    <div className="lg:w-[50%] w-[100%]   lg:h-[600px] h-[860px] bg-white rounded-md my-[2rem]  ">
    <img className=' lg:w-[20%] w-[60%] lg:absolute absolute  lg:left-[30rem] left-[5rem] flex justify-center ' src={logo} alt="" />
    <h1 className=' text-[2rem] text-center font-semibold lg:pt-[5rem] pt-[5rem]  '>Form 
        <span className=' text-blue-500'> Registration</span></h1>
        
       <div className=" grid lg:block lg:mt-[1rem] mt-[2.5rem]  lg:space-y-4 space-y-2  lg:ml-0 justify-center lg:justify-normal ">
      
       
       <div className=" space-y-2 lg:space-y-0   lg:ml-[2.3rem] lg:flex flex-col lg:flex-row lg:items-center  lg:space-x-2">

       <div className="">
       <label className=' text-[1.1rem] font-semibold ' htmlFor="">Name</label><br />
        <input className=' lg:w-[250px]  w-[300px] py-3 px-4 border-2 border-gray-200
         outline-none  ' type="text" 
         value={name} 
        //  id='name'
         name='name'
          placeholder='Soo Gali Magacaaga' 
          onChange={handleChange} />
       </div>

       <div className="">
       <label className=' text-[1.1rem] font-semibold ' htmlFor="">Number</label><br />
        <input className='lg:w-[250px]  w-[300px] py-3 px-4 border-2 border-gray-200
         outline-none  ' type="text" 
         value={number}
          placeholder='Soo Gali Lambarka'
          name='number'
          onChange={handleChange} />
       </div>
        </div>

        <div className=" space-y-2 lg:space-y-0 lg:ml-[2.3rem] lg:flex lg:items-center  lg:space-x-2">

           <div className="">
           <label className=' text-[1.1rem] font-semibold ' htmlFor="">City</label><br />
            <input className='lg:w-[250px]  w-[300px] py-3 px-4 border-2 border-gray-200
             outline-none  ' type="text" 
             value={city}
             name='city'
              placeholder='Soo Gali Degaankaga'
                onChange={handleChange}/>
                
           </div>

       <div className="ml-0">
         <label className=' text-[1.1rem] font-semibold ' htmlFor=""> Education Stage </label><br />
         <select
          id="education"
          name="education"
          value={education}
          onChange={handleChange}
          required
          className="appearance-nonerounded lg:w-[250px]  w-[300px] py-3 px-4 border-2 border-gray-200
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

      <div className=" space-y-2 lg:space-y-0   lg:ml-[2.3rem] lg:flex items-center  lg:space-x-2">

        <div className="">
        <label className=' text-[1.1rem] font-semibold ' htmlFor="">Job</label><br />
        <input className=' lg:w-[250px]  w-[300px] py-3 px-4 border-2 border-gray-200
       outline-none  ' type="text" 
       value={job}
        placeholder='Soo Gali Darajada shaqadaada' 
        name='job'
         onChange={handleChange} />
        </div>

   <div className="ml-0">
     <label className=' text-[1.1rem] font-semibold ' htmlFor="">Bloodtype</label><br />
     <select
          id="bloodtype"
          name="bloodtype"
          value={bloodtype}
          onChange={handleChange}
          required
          className="appearance-nonerounded lg:w-[250px]  w-[300px] py-3 px-4 border-2 border-gray-200
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

      
        <div className=" space-y-3 lg:ml-[2.3rem]">
        <label className=' text-[1.1rem] font-semibold ' htmlFor="">ID Card</label><br />
        <input className=' lg:w-[500px] w-[300px]  py-3 px-4 border-2 border-gray-200
         outline-none  ' type="text" 
         value={aqoonsi} 
         name='aqoonsi'
         placeholder='Soo Gali Aqoonsi Lambarka'  onChange={handleChange} />
        </div>
        <button className=' py-2 px-5 bg-blue-500 text-white font-semibold
         text-[1.2rem] rounded-md lg:ml-[2.4rem]  ' onClick={Register}>Submit Form</button>
       </div>

       
         
    </div>
   




   </div>
  )
}

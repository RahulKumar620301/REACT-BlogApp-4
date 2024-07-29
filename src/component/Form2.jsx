import React from 'react'
import Banner from './Banner'
import { useState } from 'react'

export default function Form2() {
  const [data,setData] = useState({name:"",email:"",phone:"",city:""})

  function handleSubmit(e){
    e.preventDefault();
    console.log(data.name,data.email,data.phone,data.city);
  }
  return (
    <>
    <Banner title="Form Input" description="working with forum input" className="masthead bbimg"/>

    <main className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <p>Fill out the form below</p>
                        <div className="my-5">
                            <form >
                              {/* input kaise banaye:- */}
                              <input type="text" className='form-control' placeholder='Enter Name' 
                              onChange={((e)=>setData({...data,name:e.target.value}))}/>
                              <input type="text" className='form-control' placeholder='Enter Email'
                               onChange={((e)=>setData({...data,email:e.target.value}))}/>
                              <input type="text" className='form-control' placeholder='Enter Phone'
                              onChange={((e)=>setData({...data,phone:e.target.value}))}/>
                              <input type="text" className='form-control' placeholder='Enter City'
                              onChange={((e)=>setData({...data,city:e.target.value}))}/>

                              <button className='btn btn-dark mt-3' onClick={(e)=>handleSubmit(e)}>Submit</button>

                            </form>
                            <p>you enterd: {data.name} {data.email} {data.phone} {data.city}</p>
                        </div>
                    </div>
                </div>
            </div>
      </main>
    </>
  )
}

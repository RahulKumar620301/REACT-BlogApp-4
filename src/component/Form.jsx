import React from 'react'
import Banner from './Banner'
import { useState } from 'react'

export default function Form() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    console.log(name,email,phone);
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
                              <input type="text" className='form-control' placeholder='Enter Name' onChange={((e)=>setName(e.target.value))}/>
                              <input type="text" className='form-control' placeholder='Enter Email' onChange={((e)=>setEmail(e.target.value))}/>
                              <input type="text" className='form-control' placeholder='Enter Phone'onChange={((e)=>setPhone(e.target.value))}/>
                              <button className='btn btn-dark mt-3' onClick={(e)=>handleSubmit(e)}>Submit details</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
      </main>
    </>
  )
}

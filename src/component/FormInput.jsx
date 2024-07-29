import React from 'react'
import Banner from './Banner'
import { useState } from 'react'
export default function FormInput() {
  const [text,setText] = useState("")

  function handleChange(e){
    setText(e.target.value)
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
                              <input type="text" className='form-control' placeholder='Enter value'
                              onChange={(e)=>handleChange(e)}/>
                            </form>
                            <p>You Entered: {text}</p>
                        </div>
                    </div>
                </div>
            </div>
      </main>
    </>
  )
}

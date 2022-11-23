import React from 'react'
import data from './data1';
import "./Session2.css"

const Session2 = () =>{
        return(
            <>
            <section className='branding'>
                <div className='container grid'>
                    {data.stastics.map((value)=>{
                     return(
                        <div className='box flex'>
                            <div className='text'>
                                 <h1>{value.number}</h1>
                            </div>
                            <div className='para'>
                                <h2>{value.strDescription}</h2>
                                </div>
                            </div>
                     )
                    })}
                </div>
            </section>
            </>
        )
}
export default Session2;
import React, { Component, useState } from 'react'

export default function Modal(){

    const [modal,setModal] = useState(false); 
    const toggleModal = () =>{
        setModal(!modal)
    }
    return(
        <>
       <button className="btn-modal" onClick={toggleModal}>
        Open
       </button>

       <div className="modal">
        <div className='overlay'></div>
        <div className='modal-content'>
            <h2>1</h2>
            <p>1</p>
            <button className='close-modal' onClick={toggleModal}>
                CLOSE
            </button>
        </div>
       </div>
        </>
    )
}
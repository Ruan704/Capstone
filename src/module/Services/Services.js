import React, { Component } from 'react'
import FirstPage from "./FirstPage.js"
import SecondPage from "./SecondPage.js"
import ThirdPage from "./ThirdPage.js"
class Services extends Component{
    render(){
        return(
            <>
            <FirstPage/>
            <br></br>
            <SecondPage/>
            <br></br>
            <ThirdPage/>
            </>
        )
    }
}
export default Services;


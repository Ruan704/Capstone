import React, { Component } from 'react'
import About from './About.js'
import AboutWildlife from './AboutWildlife.js'
import Session2 from './Session2.js'
import Session5 from "./Session5.js"
class AboutComponent extends Component{
    render(){
        return(
            <>
            <About/>
            <AboutWildlife/>
            <Session2/>
            {/* <Vision/> */}
            <br></br>
            {/* <Cards/> */}
            <br></br><br></br>
            <Session5/>
            </>
        )
    }
}

export default AboutComponent
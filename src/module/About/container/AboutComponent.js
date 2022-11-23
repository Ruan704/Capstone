import React, { Component } from 'react'
import About from './About.js'
import AboutWildlife from './AboutWildlife.js'
import Session2 from './Session2.js'
import Vision from './Vision.js'
import Cards from './Cards.js'
class AboutComponent extends Component{
    render(){
        return(
            <>
            <About/>
            <AboutWildlife/>
            <Session2/>
            <Vision/>
            <br></br>
            <Cards/>
            <br></br><br></br>
            </>
        )
    }
}

export default AboutComponent
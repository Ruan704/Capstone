import React, { Component } from 'react'
import Volunteer from './Volunteer.js';
import Youtube2 from './Youtube2.js';
import MultiStepForm from './MultiStepForm.js'
import Dashboard from './Dashboard.js';
class Front extends Component{
    render(){
        return(
            <><>
                <Volunteer />
                <div style={{ textAlign: 'center',alignItems:"center", width: '100%',fontSize: "30px", color:"#7D8F69", fontFamily:"Lato" }}> Volunteer with Our Wildlife Protection Team provides
                    exciting opportunities to
                    people in different field</div>
                    </>
                    <Youtube2 videoId='hgpUqzW4D9g' />
                    <Dashboard/>
                    </>
        )
    }
}
export default Front;
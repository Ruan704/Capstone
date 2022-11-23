import * as React from 'react';
import service from "../../../images/service.jpg"
import volunteer from "../../../images/volunteer.png"
import "./Card.css"
export default function Cards() {
  return (
    <div class="services">
      <h4 style={{fontSize:"45px",fontWeight: 'bold'}}>More Services</h4>
      <p  style={{fontSize:"25px"}}>Below are the list of other services that we provides</p>
      <div class="row">
        <div class="services-col">
          <img src={service} style={{marginLeft: '180px',height:"300px",width:"350px"}}/>
            <h3 style={{fontSize:"25px",fontWeight: 'bold',marginLeft: '290px'}}>Services</h3>
        </div>
        <div class="services-col">
          <img src={volunteer} style={{marginLeft: '200px',height:"300px",width:"350px"}}/>
            <h3 style={{fontSize:"25px",fontWeight: 'bold', marginLeft: '320px'}}>Donation</h3>
        </div>
      </div>
    </div>
  );
}
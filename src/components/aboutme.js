import React, { Component } from 'react';

import image from './images/cv-photo.jpg'

export default function About() {
    return(
        <div className="main-body" >
            <div id="image" style={{textAlign:'center',margin: 'auto'}} className="img-section">
                <img src={image}  alt ="Anil Lama image"/>
             </div>
             <div className="desc"  style={{textAlign:'center',margin: 'auto'}}>
                 <h3>Hi! <br></br>
                   My name is Anil Lama. I am  persuing my final year of bachelor's degree program in business information technology at Haaga-Helia UAS. </h3>
                   <hr style={{borderTop: '3px solid #e22947'}} />
                 <h3>I consider myself as a hard-working student who is learning  a diverse set of skills ranging from HTML, CSS, Javascript to Java, React/React Native and Node.js</h3>    
             </div>
        </div>
    )
}
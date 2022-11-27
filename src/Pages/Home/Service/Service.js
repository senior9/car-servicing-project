import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    return (
        <div className='service'>
            <h1>Service ID : {id}</h1>
            <h2>Service Name : {name}</h2>
            <img src={img} alt="" />
            <h3>Serivice Cost: {price}</h3>
            <p>Details : {description}</p>
                    <div className="container">
                    <div className="center">
                    <button class="btn">
                        <span>Buy Service</span>
                    </button>
                    </div>
                    </div>
              
        </div>
    );
};

export default Service;
import React from 'react';
import "./Expert.css"

const Expert = ({ expert }) => {
    const { id, name, img } = expert;
    console.log(expert);
    return (
         <div className=" g-5 col-sm-12 col-md-6 col-lg-4">
               <div className="card " style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">Expert:{id}</h5>
                    <p className="card-text">{name}</p>
                    <div className="container">
                    <div className="center">
                    <button className="btn">
                       
                        <span>Hire me</span>
                    </button>
                    </div>
                    </div>
                   
                </div>
            </div>
         </div>
    );
};

export default Expert;
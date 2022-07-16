import React from "react";
// import { useState } from "react";
import "./Ads.css";

const Ads = () => {

    const Category = ({categoryName}) => {
        return(
        <div className="temp">
            <button className="plus-btn">+</button>
            <label>{categoryName}</label>
        </div>
        );
    }
    
        return(
            <>
            <h2 className="cat">Categorywise Advertisments</h2>
            <Category  categoryName='Kids' />
            <Category  categoryName='Adults' />
            <Category  categoryName='Senior Citizen' />
            <Category  categoryName='Education' />
            </>
        );
}

export default Ads;
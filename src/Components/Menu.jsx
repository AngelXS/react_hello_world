import React from "react";
import Reac, { Component } from 'react';

class Menu extends React.Component{
    render(){
        return (
            <div>
                <ul className="menu">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Contact us</li>
                </ul>
            </div>
        );
    }
 }

 export default Menu; 
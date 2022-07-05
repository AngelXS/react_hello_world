/*import React from "react";
import Reac, { Component } from 'react';

class PersonCard extends React.Component{
    aceptarHandler(e){
        console.log('ejecutando componente hijo');
        e.stopPropagation();
    }
    containerHandler(){
        console.log('ejecutando componente padre');
    }
    render(){
        const { name, city, country, edad, address, foto } = this.props;
        return (
            <div style={{backgroundColor:'yellow'}} className="container" onClick={this.containerHandler}>
                <img src={foto} alt="foto" />
                <h1>{name}</h1>
                <h3>{city}</h3>
                <h3>{country}</h3>
                <h3>{address}</h3>
                <h3 id="edades">{edad}</h3>
                <button onClick={this.aceptarHandler}>Aceptar</button>
                {this.props.children}
                <hr/>
            </div>
        );
    }
 }

 export default PersonCard; */

 import React from "react";


 class PersonCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {edad: props.edad};
        this.changeAge = this.changeAge.bind(this);
    }
    changeAge(){
        this.setState(prevState=>({edad:prevState.edad+1}));
    }
     render(){
        const { name, city, country, address, foto } = this.props;
         return (
             <div style={{backgroundColor:'skyblue'}} className="container">
                 <img src={foto} alt="foto" />
                 <h1>{name}</h1>
                 <h3 id="edades">{this.state.edad}</h3>   
                 <h3>{city}</h3>
                 <h3>{country}</h3>
                 <h3>{address}</h3>
                 <button onClick={this.changeAge}>Aumentar</button>       
                 {this.props.children}
                 <hr/>
             </div>
         );
    }
  }
  export default PersonCard; 

/*

 import React from "react";

class PersonCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {count: 1};
        this.changeAge = this.changeAge.bind(this);
    }
    changeAge(){
        this.setState(prevState=>({count:prevState.count +1}));
    }
    aceptarHandler(e){
        console.log('ejecutando componente hijo');
    }
    containerHandler(){
        console.log('ejecutando componente padre');
    }
    render(){
        //console.log("este es el objeto props", this.props);
        //desestructuración
        const {image, name, city,country,address} = this.props;
        return(
            <div style={{backgroundColor:'yellow'}} onClick={this.containerHandler} className="container">
                <img src={image} alt='' width='100rem' height='100rem'/>
                <h1>{name}</h1>
                <h3>{this.state.count}</h3>
                <h3>{city}</h3>
                <h3>{country}</h3>
                <h5>{address}</h5>
                <button onClick={this.changeAge}>Aumentar edad de {name}</button>
                {this.props.children}
                <hr/>
            </div>
        );
    }
}
export default PersonCard;
*/
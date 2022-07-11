/*import logo from './logo.svg';
import './App.css';
import React from 'react';
import PersonCard from './Components/PersonCard';

class App extends React.Component {
  render(){
    const data=[
      {name: 'Angel', city: 'Cuenca', country: 'Ecuador',edad: 13, address: 'Gargía Moreno y Vnz', foto:'https://th.bing.com/th/id/R.88eb21cb4e3694341e75bbac7a265ffb?rik=GoCReAF3TNW6yQ&riu=http%3a%2f%2fwww.misimagenesde.com%2fwp-content%2fuploads%2f2011%2f01%2fimagenes-de-personas.jpg&ehk=n6NLhejqcpA8k7ZO9wqa7PSmXl2m9Pg7Q46wXW50UaU%3d&risl=&pid=ImgRaw&r=0'},
      {name: 'Luis', city: 'Quito', country: 'Ecuador',edad: 10, address: 'Pichincha', foto: 'https://th.bing.com/th/id/R.88eb21cb4e3694341e75bbac7a265ffb?rik=GoCReAF3TNW6yQ&riu=http%3a%2f%2fwww.misimagenesde.com%2fwp-content%2fuploads%2f2011%2f01%2fimagenes-de-personas.jpg&ehk=n6NLhejqcpA8k7ZO9wqa7PSmXl2m9Pg7Q46wXW50UaU%3d&risl=&pid=ImgRaw&r=0'},
      {name: 'Patrik', city: 'Guayaquil', country: 'Ecuador',edad: 8, address: 'Alanso de Angulo 23422',foto: 'https://th.bing.com/th/id/R.88eb21cb4e3694341e75bbac7a265ffb?rik=GoCReAF3TNW6yQ&riu=http%3a%2f%2fwww.misimagenesde.com%2fwp-content%2fuploads%2f2011%2f01%2fimagenes-de-personas.jpg&ehk=n6NLhejqcpA8k7ZO9wqa7PSmXl2m9Pg7Q46wXW50UaU%3d&risl=&pid=ImgRaw&r=0'},
    ];
    return(
      <div className='App'>
        {data.map((person,index)=>(
          <PersonCard key={index} name={person.name} city={person.city} country={person.country} edad={person.edad} address={person.address} foto={person.foto} >
            <button onClick={()=> alert(`Contactando a ${person.name}`)}>{`Contactar a ${person.name}`}</button>
            <button onClick={()=>edades(index)}>Aumentar Edad</button>
          </PersonCard>
        ))}
      </div>
    )
    function edades(index) {
      data[index].edad = data[index].edad+1;
      alert(`Contactando a ${data[index].name} y ${data[index].edad}`);
      document.getElementById("edades").innerText=data[index].edad;
    }
  }
}
export default App;*/


import './App.css';
import React from 'react';
import PersonCard from './Components/PersonCard';
import Menu from './Components/Menu';

class App extends React.Component {
  constructor() {
    super();
    this.state = {nombre: "Usuario", logo: "https://i.pinimg.com/736x/49/c8/e4/49c8e403cd1929e9e7b02126824ff831.jpg"};
    this.cambiarselection = this.cambiarselection.bind(this);
  }
  cambiarselection(){
    this.setState(({nombre: "luis", logo: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png'}));
  }
  render(){
    const data=[
      {name: 'Angel', city: 'Cuenca', country: 'Ecuador',edad: 13, address: 'Gargía Moreno y Vnz', foto:'https://th.bing.com/th/id/R.88eb21cb4e3694341e75bbac7a265ffb?rik=GoCReAF3TNW6yQ&riu=http%3a%2f%2fwww.misimagenesde.com%2fwp-content%2fuploads%2f2011%2f01%2fimagenes-de-personas.jpg&ehk=n6NLhejqcpA8k7ZO9wqa7PSmXl2m9Pg7Q46wXW50UaU%3d&risl=&pid=ImgRaw&r=0'},
      {name: 'Luis', city: 'Quito', country: 'Ecuador',edad: 10, address: 'Pichincha', foto: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
      {name: 'Patrik', city: 'Guayaquil', country: 'Ecuador',edad: 8, address: 'Alanso de Angulo 234', foto: 'https://thumbs.dreamstime.com/b/retrato-de-un-hombre-apuesto-y-adulto-con-el-pelo-gris-camisa-azul-sobre-fondo-blanco-175452621.jpg'},
    ];
    return(
      <div className='App'>
        <Menu cambiar={this.cambiarselection} nombre={this.state.nombre} foto={this.state.logo}></Menu>
        {data.map((person,index)=>(
          <PersonCard key={index} name={person.name} city={person.city} country={person.country} edad={person.edad} address={person.address} foto={person.foto} >
          </PersonCard>
        ))} 
      </div>
    )
    /*
    function edades(index) {
      <button onClick={()=> alert(`Contactando a ${person.name}`)}>{`Contactar a ${person.name}`}</button>
      data[index].edad = data[index].edad+1;
      alert(`Contactando a ${data[index].name} y ${data[index].edad}`);
      document.getElementById("edades").innerText=data[index].edad;
    }*/
  }
}
export default App;

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
  render(){
    const data=[
      {name: 'Angel', city: 'Cuenca', country: 'Ecuador',edad: 13, address: 'Gargía Moreno y Vnz', foto:'https://th.bing.com/th/id/R.88eb21cb4e3694341e75bbac7a265ffb?rik=GoCReAF3TNW6yQ&riu=http%3a%2f%2fwww.misimagenesde.com%2fwp-content%2fuploads%2f2011%2f01%2fimagenes-de-personas.jpg&ehk=n6NLhejqcpA8k7ZO9wqa7PSmXl2m9Pg7Q46wXW50UaU%3d&risl=&pid=ImgRaw&r=0'},
      {name: 'Luis', city: 'Quito', country: 'Ecuador',edad: 10, address: 'Pichincha', foto: 'https://th.bing.com/th/id/R.88eb21cb4e3694341e75bbac7a265ffb?rik=GoCReAF3TNW6yQ&riu=http%3a%2f%2fwww.misimagenesde.com%2fwp-content%2fuploads%2f2011%2f01%2fimagenes-de-personas.jpg&ehk=n6NLhejqcpA8k7ZO9wqa7PSmXl2m9Pg7Q46wXW50UaU%3d&risl=&pid=ImgRaw&r=0'},
      {name: 'Patrik', city: 'Guayaquil', country: 'Ecuador',edad: 8, address: 'Alanso de Angulo 23422',foto: 'https://th.bing.com/th/id/R.88eb21cb4e3694341e75bbac7a265ffb?rik=GoCReAF3TNW6yQ&riu=http%3a%2f%2fwww.misimagenesde.com%2fwp-content%2fuploads%2f2011%2f01%2fimagenes-de-personas.jpg&ehk=n6NLhejqcpA8k7ZO9wqa7PSmXl2m9Pg7Q46wXW50UaU%3d&risl=&pid=ImgRaw&r=0'},
    ];
    return(
      <div className='App'>
        <Menu></Menu>
        {data.map((person,index)=>(
          <PersonCard key={index} name={person.name} city={person.city} country={person.country} edad={person.edad} address={person.address} foto={person.foto} >
            <button onClick={()=> alert(`Contactando a ${person.name}`)}>{`Contactar a ${person.name}`}</button>
          </PersonCard>
        ))}  
      </div>
    )
    /*
    function edades(index) {
      data[index].edad = data[index].edad+1;
      alert(`Contactando a ${data[index].name} y ${data[index].edad}`);
      document.getElementById("edades").innerText=data[index].edad;
    }*/
  }
}
export default App;

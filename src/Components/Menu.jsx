import React from 'react';
class Menu extends React.Component{
    render(){
        const {nombre, foto} = this.props;
        return (
            <div className="barra">
                <div className="nombre"><p>{nombre}</p></div>
                <div className="imagen"><img src={foto} alt="" /></div>
            </div>
        );
    }
 }
 export default Menu; 
import React, { Component } from "react";

class Navigation extends Component {
    render(){
        return(
        
<div className="container">
  <div className="row justify-content-md-center">
    <div className="col col-lg-2">
    <a href="#inicio" class="nav-item nav-link active">Inicio</a>
    </div>
    <div className="col-md-auto">
    <a href="#laempresa" className="nav-item nav-link">¿Quiénes somos?</a>
    </div>
    <div class="col col-lg-2">
    <a href="#carrito" className="nav-item nav-link">Carrito</a>
    </div>
  </div>
  
</div>

                
          
               
         
        );
                
            
    }
}

export default Navigation
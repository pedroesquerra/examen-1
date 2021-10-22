import './App.css';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Ticket from './Components/Ticket';
import Movies from './Components/Movies';

class App extends Component {
  constructor() {
    super();
    this.state = {
      compra:{},
      cartelera:[
        {codigo:1,nombre:"Halloween Kills", idioma:'SUB', clasificacion:'C',horarios:['13:00','17:50','20:30'],duracion:'106 min',url:'https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg'},
        {codigo:2,nombre:"Los Locos Addams 2", idioma:'ESP', clasificacion:'A',horarios:['9:00','11:30','13:30'],duracion:'93 min',url:'https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg'},
        {codigo:3,nombre:"Sin Tiempo Para Morir", idioma:'ESP', clasificacion:'B',horarios:['11:00','13:50','19:40'],duracion:'164 min',url:'https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg'},
        {codigo:4,nombre:"Venom: Carnage Liberado", idioma:'ESP', clasificacion:'B',horarios:['10:30','14:20','18:30'],duracion:'98 min',url:'https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg'},
      ],
    };
 
  }
  
  
  
  agregar=(peli,horario)=>{

      const temp={
        codigo:peli.codigo,
        nombre:peli.nombre, 
        idioma:peli.idioma, 
        clasificacion:peli.clasificacion,
        horario:horario,
        cantidad:0,
        duracion:peli.duracion,
        total:0
      }
       this.setState({
          ...this.state,
          compra:temp
      })
   


      
  }
 
  calcular=(e,peli)=>{

    let precio;
    if(peli.clasificacion==='A')
      precio=50;
    if(peli.clasificacion==='B')
      precio=80;      
    if(peli.clasificacion==='C')
      precio=95;

    const temp={
      codigo:peli.codigo,
      nombre:peli.nombre, 
      idioma:peli.idioma, 
      clasificacion:peli.clasificacion,
      horario:peli.horario,
      cantidad:e,
      duracion:peli.duracion,
      total:e*precio
    }

    this.setState({
      ...this.state,
      compra:temp,
    })

  }
  
  eliminarCompra=()=>{
    this.setState({
      ...this.state,
      compra:[],
    })

  }  
  
  comprar=(peli)=>{

    if(peli.cantidad<=0){
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Ingresa la cantidad de boletos',
        showConfirmButton: false,
        timer: 1500
      })
    }else if(peli.cantidad>0){
          Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Disfruta la película ',
        showConfirmButton: false,
        timer: 2500
      })   
      
      this.setState({
        ...this.state,
        compra:[],
      })
    }


   
  }
  render() {
    
    return (
      <div className="App">
        <Header/>
        <div className="Containers">
          
          <Movies
            cartelera={this.state.cartelera}
            agregar={this.agregar}
          />

          <Ticket
            compra={this.state.compra}
            calcular={this.calcular}
            eliminarCompra={this.eliminarCompra}
            comprar={this.comprar}
          />
          
        </div>
      </div>
    )
  }
}

export default App;


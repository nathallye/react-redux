import "./Counter.css"

import React, { Component } from "react";

import Display from "./Display";
import Botoes from "./Buttons";
import PassoForm from "./StepForm";

class Contador extends Component {
  
  state = {
    numero: this.props.numeroInicial || 0, // se o numero inicial não for fornecido vai ser 0
    passo: this.props.passoInicial || 5 // se o passo inicial não for fornecido vai igual a 5
  }

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo // vamos pegar o estado atual e acrescentar + 1
    });
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo // vamos pegar o estado atual e subtrair - 1 
    });
  }

  setPasso = (novoPasso) => { // arrow function para não termos problemas com o this
    this.setState({
      passo: novoPasso // "+" para converter string para int 
    })
  }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        {/* <p>Valor Inicial: { this.props.numeroInicial }</p> */}
        <Display numeroDisplay={this.state.numero}/> {/*O componente pai passa via this.state o numero por ser um componente baseado em classe, e o componente filho recebe via props*/}
        
        <PassoForm passoForm={this.state.passo} setPassoForm={this.setPasso}/>
        
        <Botoes decrementar={this.dec} incrementar={this.inc}/>
      </div>
    );
  }

  
}

export default Contador;
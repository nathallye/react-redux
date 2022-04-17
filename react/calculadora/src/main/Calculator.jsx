import React, { Component } from "react";

import "./Calculator.css";
import Button from "../componets/Button";
import Display from "../componets/Display";

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
};

export default class Calculator extends Component {

  state = { ...initialState };

  constructor(props) {
    super(props)

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    console.log(operation);
  } 

  addDigit(n) {
    if (n === "." && this.state.displayValue.includes(".")) {
      return
    }

    const clearDisplay = this.state.displayValue === "0" 
      || this.state.clearDisplay
    // console.log("clearDisplay: ")
    // console.log(clearDisplay);
    
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    // console.log("currentValue: ")
    // console.log(currentValue);

    const displayValue = currentValue + n; // OU newDisplayValue
    // console.log("displayValue: ")
    // console.log(displayValue);

    this.setState({ displayValue, clearDisplay: false }); // Aqui receberia CHAVE: VALOR => this.setState({ displayValue: newDisplayValue, ...}); Mas colocamos a chave com o mesmo valor que está dentro do state que quando passarmos para o setState usamos apenas o nome do atributo que já reflete no nome da chave que é o mesmo;

    if (n !== ".") {
      const i = this.state.current;
      // console.log("i: ")
      // console.log(i);
      const newValue = parseFloat(displayValue);
      // console.log("newValue: ")
      // console.log(newValue);
      const values = [...this.state.values];
      // console.log("values: ");
      // console.log(values);
      values[i] = newValue;
      this.setState({ values });
      // console.log("values depois do setState: ");
      // console.log(values);
    }

  }

  render() {

    // const addDigit = n => this.addDigit(n);
    // const setOperation = op => this.setOperation(op);

    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />

        <Button label="AC" click={this.clearMemory} triple/> 
        <Button label="/" click={this.setOperation} operation/>
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation/>
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation/>
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation/>
        <Button label="0" click={this.addDigit} double/>
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation/>
      </div>
    )
  }
}


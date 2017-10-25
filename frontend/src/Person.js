import React from "react"

import { Container, Row, Col, Button } from "reactstrap"


class Person extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		age: props.age || 0,
  		showEmail: true,
  		showAge: true

  	}
  	this._incrementAge = this._incrementAge.bind(this)
  	this._decrementAge = this._decrementAge.bind(this)
  	this._toggleEmail = this._toggleEmail.bind(this)
  	this._toggleAge = this._toggleEmail.bind(this)

  }

  _incrementAge() {
  	this.setState(prevState => ({
  		age: prevState.age + 1
  	}))
  }

  _decrementAge() {
  	this.setState(prevState => ({
  		age: prevState.age - 1
  	}))
  }

  _toggleEmail() {
  	this.setState(state => ({
  		showEmail: !state.showEmail
  	}))
  }

  _toggleAge() {
  	this.setState(state => ({
  		showAge: !state.showAge
  	}))
  }




  render() {
    return (
      <div>
      	<h3>
      		{this.props.name}
      		{this.state.showEmail && `(${this.props.email})`}{" "} 
      		{this.state.showAge && ` is ${this.state.age} years old`}

      	</h3>
      	<Button color="success" onClick={this._toggleEmail}>Toggle Email</Button> 
      	<Button color="danger" onClick={this._toggleAge}>Toggle Age</Button>      	     	
      	<Button color="danger" onClick={this._incrementAge}>+</Button>
      	<Button color="danger" onClick={this._decrementAge}>-</Button>
      </div> 

      )
  }
}

export default Person
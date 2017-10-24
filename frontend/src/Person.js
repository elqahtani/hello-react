import React from "react"


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
      	<button onClick={this._toggleEmail}>Toggle Email</button> 
      	<button onClick={this._toggleAge}>Toggle Age</button>      	     	
      	<button onClick={this._incrementAge}>+</button>
      	<button onClick={this._decrementAge}>-</button>
      </div> 

      )
  }
}

export default Person
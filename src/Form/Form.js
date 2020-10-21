import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Form.css'
class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
    }
    this.updateState = (e) => {
      console.log({[e.target.className]: e.target.value})
      this.setState({[e.target.className]: e.target.value})
    }
  }
  render(){
    let reserve = (e)=> {
      e.preventDefault()
      this.props.makeReservation(this.state)
    }
    return (
      <form>
        <input className='name' placeholder='Name' type='text' onChange={this.updateState}/>
        <input className='date' placeholder='Date (mm/dd)' type='text' onChange={this.updateState}/>
        <input className='time' placeholder='Time' type='text' onChange={this.updateState}/>
        <input className='number' placeholder='Number of guests' type='text' onChange={this.updateState}/>
        <button className='reserve' onClick={reserve}>Make Reservation</button>
      </form>
    )
  }
}

export default Form

Form.propTypes = {
  makeReservation: PropTypes.func
}

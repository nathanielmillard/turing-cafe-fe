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
      this.setState({[e.target.className]: e.target.value})
    }
  }
  render(){
    let reserve = (e)=> {
      if(this.state.name && this.state.name && this.state.time && this.state.number){
        this.props.makeReservation(this.state)
        this.setState = {
          name: '',
          date: '',
          time: '',
          number: '',
        }
      } else {
        alert('We still need more info')
      }
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

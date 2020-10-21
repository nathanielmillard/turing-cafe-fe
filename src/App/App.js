import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reservations: [],

    }
  }
  getAllReservations() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then( response => {
      if(response.ok){
        return response.json()
      } else {
        throw Error
      }
    })
    .then( response => {
      this.setState({reservations: response})
    }
    )
    .catch(error => {
      console.log(error)
    })
  }

  displayReservations() {
    if (!this.state.reservations.length){
      return <h1>Loading your reservations...</h1>
    } else {
      let reservationCards = this.state.reservations.map(reservation => {
        return (<Card
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          number={reservation.number}
          />)
      })
      return reservationCards
    }
  }

  render() {
    this.getAllReservations()

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {this.displayReservations()}
        </div>
      </div>
    )
  }
}

export default App;

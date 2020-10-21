import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card'
import Form from '../Form/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reservations: [],
    }
  }
  getAllReservations = () => {
    if(!this.state.reservations.length){
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
    })}
  }

  makeReservation = (reservation) => {
    console.log(reservation)
    fetch("http://localhost:3001/api/v1/reservations",{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "name": reservation.name,
            "date": reservation.date,
            "time": reservation.time,
            "number": reservation.number
          })
        })
        .then(response => {
          if(!response.ok){
            throw Error
          } else {
            console.log(response)
          }
        })
        .catch(error => {
          console.log(error)
        })

    let allReservations = this.state.reservations
    allReservations.push(reservation)
    this.setState({reservations: allReservations})
    // this.displayReservations();
  }

  displayReservations = () => {
    if (!this.state.reservations.length){
      return <h1>Loading your reservations...</h1>
    } else {
      let reservationCards = this.state.reservations.map(reservation => {
        return (<Card
          key={reservation.id}
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
        <Form
          makeReservation={this.makeReservation}
        />
        </div>
        <div className='resy-container'>
          {this.displayReservations()}
        </div>
      </div>
    )
  }
}

export default App;

import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

let Card = (props) => {
  return (
    <section className='reservation-card'>
      <h1> {props.name} </h1>
      <h2> {props.date} </h2>
      <h2> {props.time} </h2>
      <h2> {'Number of guests:' + props.number} </h2>
      <button>Cancel</button>
    </section>
  )
}

export default Card

Card.propTypes = {
  name:  PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  number: PropTypes.number,
}

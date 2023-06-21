import React,{ Fragment } from 'react'

const Clock = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
  return (
   <Fragment>
    <div className="timer-container">
      <div className="timer">
        <div className="clock">

          <section className='he'>
            <p>{timerDays}</p>
            <small>Days</small>
          </section>
          <small>:</small>
          

          <section className='he'>
            <p> { timerHours}</p>
            <small> Hours </small>
          </section>
          <small>:</small>
          

          <section className='he'>
            <p>{ timerMinutes }</p>
            <small>Minutes</small>
          </section>
          <small>:</small>
          

          <section className='he'>
            <p>{timerSeconds}</p>
            <small>Seconds</small>
          </section>
        </div>
      </div>
    </div>
   </Fragment>
  )
}

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10
}
export default Clock

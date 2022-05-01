import { Col } from 'antd'
import React from 'react'

import robot from "../assets/images/robots.png"
import pinkpath from "../assets/images/toppink.png"

function Deffinition() {

  return (
    <div>
      <div className="pink-robot">
        <img className='pink-path' src={pinkpath} alt="pink path" />
        <img className='robot' src={robot} alt="robot" />
      </div>
      <div className="deffinition-text">
        <p>
          <b>Deffinition;</b> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties.
          <br></br>
          Merriam-Webster.com Dictionary.
        </p>
        <p className='weekend-team'>-weekend team</p>
      </div>
      <Col className="circle-blues" xs={{offset: 3}} xl={{offset: 5}}></Col>
      <Col className='text-circle-blues' xs={{offset: 2}} xl={{offset: 11}}>
        <p>Testimonial</p>
      </Col>
      <br></br>
    </div>
  )
}

export default Deffinition
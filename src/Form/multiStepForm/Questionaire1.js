import React from 'react'
import './Form.css'

function Questionaire1(props) {
  return (
    <>
      <div className='formbody'>
        <h5 className='form-q'>Let’s get you ready to <br /> fundraise!</h5>
        <p className='form-a'>
          This questionaire is intended to help us determine the stage you are <br /> at in your business journey.
        </p>
      </div>
      <div className='form-footer'>
        <div className='form-Ellipse'>
        </div>
        <div>
          <button
            className='button1'
            onClick={() => {
              props.setPage((currentPage) => currentPage + 1)
            }}
          >Get Started</button>
        </div>
      </div>
    </>
  )
}

export default Questionaire1
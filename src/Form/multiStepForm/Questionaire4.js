import React, { useState } from 'react'
import CircleProgress from '../../util/CircleProgress';
import ErrorMsg from './ErrorMsg';

function Questionaire4(props) {
  const [error, setError] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();

    if (props.formData.capital === "") {
      setError(true);
    } else {
      props.setPage((currentPage) => currentPage + 1)
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='formbody'>
          <h5 className='form-q'>
            How much capital are you <br /> raising?
          </h5>
          {error ? (
            <ErrorMsg/>
          ) : (
            undefined
          )}
          <div className='ans-div-main'>
            <span className='form-a form-price-icon'>$</span>
            <input
              type="number"
              min="0"
              className='input-type-text form-a'
              value={props.formData.capital}
              onChange={(event) =>
                props.setFormData({ ...props.formData, capital: event.target.value })
              }
            />
          </div>
        </div>
        <div className='form-footer'>
          <div className='form-Ellipse'>
            <CircleProgress page={props.page} />
          </div>

          <div>

            <div>
              <button
                className='button1'
                type="submit"
              >Continue</button>
            </div>

          </div>
        </div>
      </form>
    </>
  )
}

export default Questionaire4
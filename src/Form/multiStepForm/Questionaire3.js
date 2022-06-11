import React, { useState } from 'react'
import CircleProgress from '../../util/CircleProgress';
import ErrorMsg from './ErrorMsg';
function Questionaire3(props) {
  const [error, setError] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();

    if (props.formData.mr === "") {
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
            What is your monthly <br /> revenue(MR)
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
              className='input-type-text form-a'
              min="0"
              value={props.formData.mr}
              onChange={(event) =>
                props.setFormData({ ...props.formData, mr: event.target.value })
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

export default Questionaire3
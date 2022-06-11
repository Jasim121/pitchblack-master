import React, { useState } from 'react'
import CircleProgress from '../../util/CircleProgress';
import ErrorMsg from './ErrorMsg';

function Questionaire8(props) {
  const [error, setError] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();

    if (props.formData.exradio === "") {
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
            Do you or any of your founders have experience <br />
            workind in the &#60; Industry user entered above &#62; space?
          </h5>
          {error ? (
            <ErrorMsg />
          ) : (
            undefined
          )}
          <div className='ans-div-main'>
            <div class="form-q-radioDiv">
              <input 
              type="radio" 
              name="radioIncorporate" 
              class="inputRadio" 
              value="Yes, collectively we all have"
              checked={props.formData.exradio === "Yes, collectively we all have"}
              onChange={(event) =>
                  props.setFormData({ ...props.formData, exradio: event.target.value })
              }
               />
              <label class="form-a">Yes, collectively we all have </label>
              <input type="number" min="0" className='input-type-text form-a' /><label class="form-a" style={{ marginLeft: '10px' }}>years of experience.</label>
            </div>
            <div class="form-q-radioDiv">
            <input 
              type="radio" 
              name="radioIncorporate" 
              class="inputRadio" 
              value="No experience."
              checked={props.formData.exradio === "No experience."}
              onChange={(event) =>
                  props.setFormData({ ...props.formData, exradio: event.target.value })
              }
               />
              <label class="form-a">No experience.</label>
            </div>
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

export default Questionaire8
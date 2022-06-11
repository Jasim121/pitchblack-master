import React, { useState } from 'react'
import CircleProgress from '../../util/CircleProgress';
import ErrorMsg from './ErrorMsg';

function Questionaire5(props) {
  const [error, setError] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (props.formData.raisedRadio === "") {
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
            Have you raised capital before? And if yes, <br /> how much have you raised?
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
                value="Yes, we’ve raised"
                checked={props.formData.raisedRadio === "Yes, we’ve raised"}
                onChange={(event) =>
                  props.setFormData({ ...props.formData, raisedRadio: event.target.value })
                }
              />
              <label class="form-a">Yes, we’ve raised <span className='form-price-icon'>$</span></label>
              <input type="number" min="0" className='input-type-text form-a' />
            </div>
            <div class="form-q-radioDiv">
              <input
                type="radio"
                name="radioIncorporate"
                class="inputRadio"
                value="We haven’t raised any capital yet."
                checked={props.formData.raisedRadio === "We haven’t raised any capital yet."}
                onChange={(event) =>
                  props.setFormData({ ...props.formData, raisedRadio: event.target.value })
                }
              />
              <label class="form-a">We haven’t raised any capital yet.</label>
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

export default Questionaire5
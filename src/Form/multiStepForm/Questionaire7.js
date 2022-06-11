import React, { useState } from 'react'
import CircleProgress from '../../util/CircleProgress';
import ErrorMsg from './ErrorMsg';

function Questionaire7(props) {
  const [error, setError] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();

    if (props.formData.coFounder === "") {
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
            How many co-founders do you have?
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
                value="I am a solo founder."
                checked={props.formData.coFounder === "I am a solo founder."}
                onChange={(event) =>
                    props.setFormData({ ...props.formData, coFounder: event.target.value })
                }
              />
              <label class="form-a">I am a solo founder.</label>
            </div>
            <div class="form-q-radioDiv">
              <input
                type="radio"
                name="radioIncorporate"
                class="inputRadio"
                value="1"
                checked={props.formData.coFounder === "1"}
                onChange={(event) =>
                    props.setFormData({ ...props.formData, coFounder: event.target.value })
                }
              />
              <label class="form-a">1</label>
            </div>
            <div class="form-q-radioDiv">
              <input
                type="radio"
                name="radioIncorporate"
                class="inputRadio"
                value="2"
                checked={props.formData.coFounder === "2"}
                onChange={(event) =>
                    props.setFormData({ ...props.formData, coFounder: event.target.value })
                }
              />
              <label class="form-a">2</label>
            </div>
            <div class="form-q-radioDiv">
              <input
                type="radio"
                name="radioIncorporate"
                class="inputRadio"
                value="3 or more."
                checked={props.formData.coFounder === "3 or more."}
                onChange={(event) =>
                    props.setFormData({ ...props.formData, coFounder: event.target.value })
                }
              />
              <label class="form-a">3 or more.</label>
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

export default Questionaire7
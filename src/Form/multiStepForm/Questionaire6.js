import React, { useState } from 'react'
import CircleProgress from '../../util/CircleProgress';
import ErrorMsg from './ErrorMsg';

function Questionaire6(props) {
  const [error, setError] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (props.formData.drivers === "") {
      setError(true);
    } else {
      props.setPage((currentPage) => currentPage + 1)
    }
  };
  const element1 = "I started the company because it resognated with my personal experience.";
  const element2 = "One of my friends had an experience that prompted me to create a solution.";
  const element3 = "I saw that this hasn’t been done, and saw opportunity.";
  const element4 = "I was getting to the bag!";
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='formbody'>
          <h5 className='form-q'>
            What were the main drivers that caused you <br />
            to start this business? (rank with 1 being the <br />
            highest).
          </h5>
          {error ? (
            <ErrorMsg />
          ) : (
            undefined
          )}
          <div className='ans-div-main'>
            <label className="Form-container form-a">{element1}
              <input
                type="checkbox"
                value={element1}
                onChange={(event) =>
                  props.setFormData({ ...props.formData, drivers: event.target.value })
                }
              />
              <span className="checkmark"></span>
            </label>
            <label className="Form-container form-a">{element2}
              <input
                type="checkbox"
                value={element2}
                onChange={(event) =>
                  props.setFormData({ ...props.formData, drivers: event.target.value })
                }
              />
              <span className="checkmark"></span>
            </label>
            <label className="Form-container form-a">{element3}
              <input
                type="checkbox"
                value={element3}
                onChange={(event) =>
                  props.setFormData({ ...props.formData, drivers: event.target.value })
                }
              />
              <span className="checkmark"></span>
            </label>
            <label className="Form-container form-a">{element4}
              <input
                type="checkbox"
                value={element4}
                onChange={(event) =>
                  props.setFormData({ ...props.formData, drivers: event.target.value })
                }
              />
              <span className="checkmark"></span>
            </label>
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

export default Questionaire6
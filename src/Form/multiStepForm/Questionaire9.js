import React, { useState, useEffect } from 'react'
import CircleProgress from '../../util/CircleProgress';
import ErrorMsg from './ErrorMsg';

function Questionaire9(props) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  useEffect(() => {
    const d = new Date();
    let CurrentYear = d.getFullYear();
    let PastYear = CurrentYear-100;
    for (let y = CurrentYear; y >= PastYear; y--) {
      var optn = document.createElement("option");
      optn.text = y;
      optn.value = y;

      // if year is 2015 selected
      // if (y === 2015) {
      //   optn.selected = true;
      // }

      document.getElementById('year').options.add(optn);
    }
  }, [])
  const [error, setError] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();

    if (props.formData.month === "") {
      setError(true);
    } else if (props.formData.year === "") {
      setError(true);
    }
    else {
      props.setPage((currentPage) => currentPage + 1)
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='formbody'>
          <h5 className='form-q'>
            What date did you start working <br /> on this idea?
          </h5>
          {error ? (
            <ErrorMsg />
          ) : (
            undefined
          )}
          <div className='ans-div-main'>
            <div className='form-q-button'>
              <select
                className='monthBtn'
                name="month"
                value={props.formData.month}
                onChange={(event) =>
                  props.setFormData({ ...props.formData, month: event.target.value })
                }
              >
                <option value="">Month</option>
                {
                  months.map((month) => <option>{month}</option>)
                }
              </select>
              <select
                className='yearBtn'
                name="year"
                id="year"
                value={props.formData.year}
                onChange={(event) =>
                  props.setFormData({ ...props.formData, year: event.target.value })
                }
              >
                <option value="">Year</option>
              </select>
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

export default Questionaire9
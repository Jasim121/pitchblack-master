import React, { useState } from 'react'
import CircleProgress from '../../util/CircleProgress';
import ErrorMsg from './ErrorMsg';
function Questionaire2(props) {
    const [error, setError] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();

        if (props.formData.radio === "") {
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
                        What current stage is your <br /> business in?
                    </h5>
                    {error ? (
                        <ErrorMsg />
                    ) : (
                        undefined
                    )}


                    <div className='ans-div-main'>
                        <div className="form-q-radioDiv">
                            <input
                                type="radio"
                                name="radioIncorporate"
                                className="inputRadio"
                                value="Idea"
                                checked={props.formData.radio === "Idea"}
                                onChange={(event) =>
                                    props.setFormData({ ...props.formData, radio: event.target.value })
                                }
                            />
                            <label className="form-a">Idea</label>
                        </div>
                        <div className="form-q-radioDiv">
                            <input
                                type="radio"
                                name="radioIncorporate"
                                className="inputRadio"
                                value="Pre-product(has started work)"
                                checked={props.formData.radio === "Pre-product(has started work)"}
                                onChange={(event) =>
                                    props.setFormData({ ...props.formData, radio: event.target.value })
                                }
                            />
                            <label className="form-a">Pre-product(has started work)</label>
                        </div>
                        <div className="form-q-radioDiv">
                            <input
                                type="radio"
                                name="radioIncorporate"
                                className="inputRadio"
                                value="Post-Product(pre-revenue)"
                                checked={props.formData.radio === "Post-Product(pre-revenue)"}
                                onChange={(event) =>
                                    props.setFormData({ ...props.formData, radio: event.target.value })
                                }
                            />
                            <label className="form-a">Post-Product(pre-revenue)</label>
                        </div>
                        <div className="form-q-radioDiv">
                            <input
                                type="radio"
                                name="radioIncorporate"
                                className="inputRadio"
                                checked={props.formData.radio === "Post-Product(post-revenue)"}
                                value="Post-Product(post-revenue)"
                                onChange={(event) =>
                                    props.setFormData({ ...props.formData, radio: event.target.value })
                                }
                            />
                            <label className="form-a">Post-Product(post-revenue)</label>
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

export default Questionaire2
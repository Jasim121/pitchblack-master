import React from 'react'
import CircleProgress from '../../util/CircleProgress'

function Questionaire10(props) {
    return (
        <>
            <div className='formbody'>
                <h5 className='form-q'>
                    Select all the items / documents that you <br /> could upload today.
                </h5>
                <div className='ans-div-mainCheck'>
                    <div className='from-grid'>
                        <div>
                            <label class="Form-containerCheck form-a">Pitch Deck
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Problem Identity Statement
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Customer Discovery
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Team Bios
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Milestone Schedule
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Product/Service Project Plan
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Roadmap
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Financial Projections
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Balance Sheet
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Pro Forma
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Website/ landing page
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="Form-containerCheck form-a">Executive Summary
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Revenue Model
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Headcount/ Key Hire List
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Customer Testomonials*
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Customer Call Sheet*
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Comparables
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Advisor List
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Go to Market Stradegy
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Market Analysis
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Strategic Partnerships List
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <label class="Form-containerCheck form-a">Prototype
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </div>
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
                            onClick={() => {
                                props.setPage((currentPage) => currentPage + 1)
                            }}
                        >Continue</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Questionaire10
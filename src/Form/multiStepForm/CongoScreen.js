import React from 'react'

function CongoScreen(props) {
    console.log(props);
    return (
        <>
            <div className='formbody'>
                <h5 className='form-q'>
                    Congradulations!🙌🏼🙌🏾🙌🏿 you’ve made it <br /> through the first step in the process.
                </h5>
                <div className='ans-div-main'>
                    <p className='form-a'>
                        We have determined that based on your answers, you have a great chance at raising capital, and we think we can help you get it done successfully!
                    </p>
                </div>
            </div>
            <div className='form-footer'>
                <div>

                </div>

                <div>

                    <div>
                        <button
                            className='button1'
                            type="submit"
                            onClick={() => {
                                props.setPage((currentPage) => currentPage + 1)
                            }}
                        >Proceed To Dashboard</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CongoScreen
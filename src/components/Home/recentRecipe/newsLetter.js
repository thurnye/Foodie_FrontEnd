import React from 'react'

export default function newsLetter() {
    return (
        <>
            <div className="newsLetter mb-3 ">
                <form className="text-center border border-light p-3" action="#!">
                    <h4 className="h4 mb-4">Never Miss A Post!</h4>
                    <p>Sign up for free and be the first to get notified about updates.</p>
                    <input type="email" id="defaultSubscriptionFormEmail" className="form-control mb-4" placeholder="e-mail"/>
                    <button className="btn btn-dark btn-block" type="submit">Subscribe</button>
                </form>
            </div>
                                
        </>
    )
}

import React, { Component } from 'react';
import NavBar from '../Nav/navbar';



 export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      email: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    
  }

   render() { 
     return (
        <React.Fragment>
          <NavBar/>
            <section className="guest">
            <div className="sign-up">
              <div className="card" style= {{width: "30rem"}} >
                <div className="card-header">
                  <h5 className="card-title"> I WANT a cook</h5>
                  <hr></hr>
                </div>
                <div className="card-body">
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="form">

                      {/* Number */}
                      <div className="form-group row">
                        <label htmlFor="number" className="col-sm-3 col-form-label">Phone No.</label>
                        <div className="col-sm-9
                        ">
                          <input name="number"  className="form-control" id="inputNumber" value={this.state.number} onChange={this.onChange}/>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9
                        ">
                          <input name="email" type="email" className="form-control" id="inputEmail3" value={this.state.email} onChange={this.onChange}/>
                        </div>
                      </div>
                      
                    </div>

                    <div className="getCook">  
                      <button type="submit" className="btn">Login</button>
                    </div>
                  </form>
                  <div className="faster-easier-sign-up">
                      <p> Create an account for faster and easier</p>
                      <div className="social-icon d-flex container">
                      <a href="#" className="img"><i className="fa fa-google"></i></a>
                      <a href="#" className="img"><i className="fa fa-facebook"></i></a>
                      </div>
                  </div>

                </div>
                
              </div>
            </div>
            </section>
        </React.Fragment>
    )}
}



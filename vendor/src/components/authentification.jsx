
import 'mdbreact/dist/css/mdb.css';
import '../styles/chat.css'

import React, {Component} from "react";
import { Redirect } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from 'axios'

export class Auth extends Component {

        constructor(props) {
            super(props);
            this.state = {
                email : '',
                password : '',
            }
            this.data= {
              redirect : false
            }
          }


    async login() {
        var myParams = {
            data: this.state
        }
        await axios.post('/api/login', myParams)
            .then(function(response){
                console.log(response.data.status)
                this.setState({
                  redirect: true
                })
            })
            .catch(function(error){
                alert ("error user not exist or password error ")
                console.log(error)
            })

    }

  render() {
    if (this.props.data.redirect) {
      return <Redirect to={{
                pathname: "/"
              }}
      />      
    }
    return (
      <div className="builder">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="4">
                <MDBCard style={{"padding": " 10px 42px"}}>
                  <MDBCardBody>
                    <form>
                      <p className="h4 text-center py-4">Login</p>
                        <div className="grey-text">
                          <MDBInput
                            label="Your email"
                            value = {this.state.email}
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            onChange={(e) => {
                                this.setState({
                                    email:e.target.value
                                })
                            }}
                          />

                          <MDBInput
                            label="Your password"
                            value = {this.state.password}
                            icon="user"
                            group
                            type="password"
                            validate
                            error="wrong"
                            success="right"
                            onChange={(e) => {
                                this.setState({
                                    password:e.target.value
                                })
                            }}
                          />


                        </div>
                        <div className="text-center py-4 mt-3">
                          <MDBBtn color="cyan" onClick={(e) => {
                            e.preventDefault()
                            this.login()
                          }}>
                            Login
                          </MDBBtn>
                        </div>
                      </form>
                    <a href="/register" className="ref" >
                      you don't have an account yet ? register
                    </a>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
    </div>
    )
  }
}

export default Auth
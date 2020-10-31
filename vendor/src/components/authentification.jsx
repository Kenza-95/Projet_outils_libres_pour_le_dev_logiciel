
import 'mdbreact/dist/css/mdb.css';

import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from 'axios'

export class Auth extends Component {

        constructor(props) {
            super(props);
            this.state = {
                email : '',
                password : '',
            }
          }


    async register() {
        var myParams = {
            data: this.state
        }
        await axios.post('/api/login', myParams)
            .then(function(response){
                console.log("response.data")
                console.log(response.data)
                console.log(response.data.status)

                this.props.history.push({
                    pathname : '/'
                })
            })
            .catch(function(error){
                console.log("errorrrrrrrrrrrrr")
                console.log(error)
            })

    }

  render() {
    return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
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
                    type="text"
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
                  <MDBBtn color="cyan" type="submit" onClick={(e) => {
                    e.preventDefault()
                    this.register()
                  }}>
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
  }
}

export default Auth
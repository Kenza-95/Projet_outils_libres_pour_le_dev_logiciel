
import 'mdbreact/dist/css/mdb.css';

import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from 'axios'

export class Auth extends Component {

        constructor(props) {
            super(props);
            this.state = {
                nom : '',
                prenom : '',
                email : '',
                password : '',
                tel : '',
                adress : '',
            }
          }


    async register() {
        var myParams = {
            data: this.state
        }
        await axios.post('/api/register', myParams)
            .then(function(response){
                console.log("response.data")
                console.log(response.data)
                console.log(response.data.status)

                this.props.history.push({
                    pathname : '/auth'
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
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    value = {this.state.nom}
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={(e) => {
                        this.setState({
                            nom:e.target.value
                        })
                    }}
                  />

                  <MDBInput
                    label="Your first name"
                    value = {this.state.prenom}
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={(e) => {
                        this.setState({
                            prenom:e.target.value
                        })
                    }}
                  />

                  <MDBInput
                    value = {this.state.adress}
                    label="adress"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={(e) => {
                        this.setState({
                            adress:e.target.value
                        })
                    }}
                  />


                   <MDBInput
                    value = {this.state.tel}
                    label="phone number"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={(e) => {
                        this.setState({
                            tel:e.target.value
                        })
                    }}
                  />



                  <MDBInput
                    value = {this.state.email}
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
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
                    icon="lock"
                    group
                    type="password"
                    validate
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

import 'mdbreact/dist/css/mdb.css';
import '../styles/home.scss'

import React, {Component} from "react";
import { Redirect } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from 'axios'

export class Auth extends Component {

        constructor(props) {
            super(props);
            this.state = {
                symptomes:  []
            }
          }

        ajout_symp(sym, key){
            console.log("sym")
        }

  render() {
    return (
      <div className="builder_homepage">
        <MDBCol md="2" className="col_aside">
          <MDBRow className="nom_holder">
            <h4>Nom Prenom</h4>
          </MDBRow>
          <MDBRow className="dom_holder">
            <h5>Email : <span>--------- </span> </h5>
            <h5>Tel : <span>--------- </span> </h5>
            <h5>Adresse : <span>--------- </span> </h5>
          </MDBRow>
          <MDBRow className="footer_holder">
            <h5>Symptomes : </h5>
          </MDBRow>


          <MDBRow className="btn-builder" style={{"text-align" : "center"}}>
            <MDBBtn className="btn-update">
                Update
            </MDBBtn>
          </MDBRow>

        </MDBCol>

        <MDBCol md="10">

        </MDBCol>

    </div>
    )
  }
}

export default Auth
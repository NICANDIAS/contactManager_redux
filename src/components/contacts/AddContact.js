import React, { Component } from "react"
import TextInputGroup from "../layout/TextInputGroup"
//import { v4 as uuid } from "uuid"
//import { Navigate } from "react-router-dom"

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
   // success: false,
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault()

    const { name, email, phone } = this.state

    //Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } })
      return
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } })
      return
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } })
      return
    }

    const newContact = {
      name,
      email,
      phone,
    }

    //Add Contact///

    //Clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
      //success: true,
    })
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, phone, errors,  } = this.state
    // {success && <Navigate to="/" />}
    
    const { dispatch } = this.state
    return (
      <div className="card mb-3 ">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this, dispatch)}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name ..."
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email ..."
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone ..."
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input type="submit" value="Add Contact" className="btn btn-light btn-block"></input>
          </form>
        </div>
      </div>
    )  
  }
}

export default AddContact
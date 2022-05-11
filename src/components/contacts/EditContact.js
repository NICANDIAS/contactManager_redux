import React, { Component } from "react"
import { Navigate } from "react-router-dom"
import { Consumer } from "../../context"
import TextInputGroup from "../layout/TextInputGroup"
import { useParams } from "react-router-dom"
//import { v4 as uuid } from "uuid"
import axios from "axios"

//useParams is no longer used in v6 so i had to use a functional component to make it work
function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
    success: false,
  }

  //fetching details to be edited
  async componentDidMount() {
      const { id } = this.props.params;
      const res = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);

      const contact = res.data;

      this.setState({
          name: contact.name,
          email: contact.email,
          phone: contact.phone
      });
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

    //Clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
      success: true,
    })
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, phone, errors, success } = this.state

    return (
      <>
        {success && <Navigate to="/" />}
        <Consumer>
          {value => {
            const { dispatch } = value
            return (
              <div className="card mb-3 ">
                <div className="card-header">Add Contact</div>
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
                    <input type="submit" value="Update Contact" className="btn btn-light btn-block"></input>
                  </form>
                </div>
              </div>
            )
          }}
        </Consumer>
      </>
    )
  }
}

//wrapping the class component in a function to work as a custom HOC is the key
export default withParams(EditContact)
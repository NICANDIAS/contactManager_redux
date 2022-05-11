import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

//Font-Awesome
import {FaArrowDown} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onDeleteClick = async (id, dispatch) => {
        await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);

        dispatch({type: 'DELETE_CONTACT', payload: id});
    }

    render() {
        const {id, name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name} 
                                <FaArrowDown onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo  })} style={{cursor: 'pointer'}} />
                                <FaTimes onClick={this.onDeleteClick.bind(this, id, dispatch)} style={{cursor: 'pointer', float: 'right', color: 'red'}} />
                            </h4>
                            {showContactInfo ? (
                                <ul className="list-group">
                                    <h1 className="list-group-item">Email: {email}</h1>
                                    <h1 className="list-group-item">Phone: {phone}</h1>
                                </ul>
                            ) : null}
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default Contact;
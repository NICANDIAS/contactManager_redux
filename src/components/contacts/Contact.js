import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//Font-Awesome
import {FaArrowDown, FaTimes, FaPencilAlt} from 'react-icons/fa';

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onDeleteClick = async (id, dispatch) => {
        //DELETE CONTACT
    }

    render() {
        const {id, name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;

        return (
            <div className="card card-body mb-3">
                <h4>{name} 
                    <FaArrowDown onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo  })} style={{cursor: 'pointer'}} />
                    <FaTimes onClick={this.onDeleteClick.bind(this, id)} style={{cursor: 'pointer', float: 'right', color: 'red'}} />
                    <Link to={`contact/edit/${id}`}>
                        <FaPencilAlt style={{
                            cursor: 'pointer',
                            float: 'right',
                            color: 'black'
                        }}/>
                    </Link>
                </h4>
                {showContactInfo ? (
                    <ul className="list-group">
                        <h1 className="list-group-item">Email: {email}</h1>
                        <h1 className="list-group-item">Phone: {phone}</h1>
                    </ul>
                ) : null}
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default Contact;
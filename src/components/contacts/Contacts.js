import React, { Component } from 'react'
import Contact from './Contact';

 class Contacts extends Component {   
    state = {
        contacts: [
            {
                id: 1,
                name: "john Doe",
                email: "John@gmail.com",
                phone: "555-555-5555"
            },
            {
                id: 2,
                name: "Karren williams",
                email: "kwillams@gmail.com",
                phone: "222-222-2222"
            },
            {
                id: 3,
                name: "Henry Johnson",
                email: "henry@gmail.com",
                phone: "333-333-3333"
            }
        ],
    };
   
  render() {
    const { contacts } = this.state;
    
    return(
        <React.Fragment>
            <h1 className='display-4 mb-2'>
                <span className='text-danger'>Contact</span> List
            </h1>
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} /> 
            ))}
        </React.Fragment>
    );
  }
}

export default Contacts;
import React from 'react';
import './Contact.scss';

class Contact extends React.Component {
  render() {
    const { contact } = this.props;

    return (
      <article data-testid="contact" className="contact">
        <img src={contact.avatar} className="contact__avatar" />
        <span className="contact__data">{contact.name}</span>
        <span className="contact__data">{contact.phone}</span>
        <span className="contact__data">{contact.country}</span>
        <span className="contact__data">{contact.admissionDate}</span>
        <span className="contact__data">{contact.company}</span>
        <span className="contact__data">{contact.department}</span>
      </article>
    );
  }
}

export default Contact;

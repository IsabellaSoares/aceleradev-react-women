import React from 'react';
import Contact from './Contact';
import './Contacts.scss';

class Contacts extends React.Component {
  render() {
    const { contacts } = this.props;

    return (
      <div data-testid="contacts" className="container">
        <section className="contacts">
          {contacts &&
            contacts.map((contact) => {
              return <Contact key={contact.id} contact={contact} />;
            })}
        </section>
      </div>
    );
  }
}

export default Contacts;

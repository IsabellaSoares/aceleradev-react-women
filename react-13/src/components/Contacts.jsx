import React from 'react';
import Contact from './Contact';
import './Contacts.scss';

class Contacts extends React.Component {
  render() {
    return (
      <div data-testid="contacts" className="container">
        <section className="contacts">
          <Contact />
        </section>
      </div>
    );
  }
}

export default Contacts;

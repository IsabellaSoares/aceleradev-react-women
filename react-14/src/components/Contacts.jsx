import React from 'react';
import Contact from './Contact';
import './Contacts.scss';

class Contacts extends React.Component {
  render() {
    const { filteredContacts } = this.props;

    return (
      <div data-testid="contacts" className="container">
        <section className="contacts">
          <article data-testid="contact" className="contact">
            <span className="contact__avatar" />
            <span className="contact__data">Nome</span>
            <span className="contact__data">Telefone</span>
            <span className="contact__data">País</span>
            <span className="contact__data">Admissão</span>
            <span className="contact__data">Empresa</span>
            <span className="contact__data">Departamento</span>
          </article>
          {filteredContacts &&
            filteredContacts.map((contact) => {
              return <Contact key={contact.id} contact={contact} />;
            })}
        </section>
      </div>
    );
  }
}

export default Contacts;

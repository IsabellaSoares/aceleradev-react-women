import React from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      contacts: [],
      filteredContacts: [],
      filter: '',
    };
  }

  componentDidMount() {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then((res) => res.json())
      .then((contacts) => this.setState({ contacts }))
      .catch((error) => console.log(error));
  }

  handleInputChange(event) {
    this.setState({ searchTerm: event.target.value });
    this.filterContacts();
  }

  filterContacts() {
    let filteredList = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    this.setState({ filteredContacts: filteredList });
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters
          searchTerm={this.state.searchTerm}
          handleInputChange={this.handleInputChange.bind(this)}
        />
        <Contacts
          contacts={this.state.contacts}
          filteredContacts={this.state.filteredContacts}
        />
      </React.Fragment>
    );
  }
}

export default App;

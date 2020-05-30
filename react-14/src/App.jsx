import React from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import './App.scss';

class App extends React.Component {
  state = {
    searchTerm: '',
    contacts: [],
    filteredContacts: [],
    filter: '',
    active: '',
  };

  componentDidMount() {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then((res) => res.json())
      .then((contacts) => this.setState({ contacts }))
      .catch((error) => console.log(error));
  }

  handleInputChange(event) {
    this.setState({ searchTerm: event.target.value });
    this.filterContacts(event.target.value);
  }

  filterContacts(value) {
    if (value !== '') {
      let filteredList = this.state.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      this.setState({ filteredContacts: filteredList });
    } else {
      this.setState({ filteredContacts: [] });
    }
  }

  handleClick(event) {
    this.setState({
      active: this.state.active === event.target.id ? '' : event.target.id,
      filter: event.target.id,
    });

    this.orderContacts(event.target.id);
  }

  compare(property) {
    return function (a, b) {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    };
  }

  orderContacts(property) {
    this.state.contacts.sort(this.compare(property));
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters
          searchTerm={this.state.searchTerm}
          handleInputChange={this.handleInputChange.bind(this)}
          handleClick={this.handleClick.bind(this)}
          active={this.state.active}
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

import React, { useState, useEffect } from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import './App.scss';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [active, setActive] = useState('');

  useEffect(() => {
    async function fetchData() {
      const data = await new Promise((resolve, reject) => {
        fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
          .then((res) => res.json())
          .then((contacts) => resolve(contacts))
          .catch((error) => reject(error));
      });
      setContacts(data);
      setFilteredContacts(data);
    }

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    filterContacts(event.target.value);
  };

  const filterContacts = (value) => {
    if (value !== '') {
      let filteredList = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredContacts(filteredList);
    } else {
      setFilteredContacts(contacts);
    }
  };

  const handleClick = (event) => {
    setActive(active === event.target.id ? '' : event.target.id);
    orderContacts(event.target.id);
  };

  const compare = (property) => {
    return function (a, b) {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    };
  };

  const orderContacts = (property) => {
    setContacts(contacts.sort(compare(property)));
  };

  return (
    <div data-testid="app" className="app">
      <Topbar />
      <Filters
        searchTerm={searchTerm}
        handleInputChange={handleInputChange.bind(this)}
        handleClick={handleClick.bind(this)}
        active={active}
      />
      <Contacts filteredContacts={filteredContacts} />
    </div>
  );
};

export default App;

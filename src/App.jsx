import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import { Container, Title } from './App.styles.jsx';

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (!contacts) {
      return this.setState({ contacts: [] });
    }

    this.setState({ contacts });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const isAlreadyinContacts = this.state.contacts.find(el => el.name.toLowerCase() === normalizedName);

    if (isAlreadyinContacts) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number
    }

    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  getFiltredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        
        <Title>Contacts</Title>
        <ContactsList filtredContacts={this.getFiltredContacts} deleteContact={this.deleteContact}/>
    </Container>
  )};
}

export default App;

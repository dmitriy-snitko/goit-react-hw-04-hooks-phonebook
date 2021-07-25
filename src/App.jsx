import { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import { Container, Title } from './App.styles.jsx';

export default function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId))
  };

  const addContact = (name, number) => {
    const normalizedName = name.toLowerCase();
    const isAlreadyinContacts = contacts.find(el => el.name.toLowerCase() === normalizedName);

    if (isAlreadyinContacts) {
      alert(`${name} is already in contacts!`);
      return;
    };

    const newContact = {
      id: shortid.generate(),
      name,
      number
    };

    setContacts([newContact, ...contacts]);
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(normalizedFilter));
  };

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContact} />
        <Filter value={filter} onChange={changeFilter} />
        
        <Title>Contacts</Title>
        <ContactsList filtredContacts={getFiltredContacts} deleteContact={deleteContact}/>
    </Container>
  );
};

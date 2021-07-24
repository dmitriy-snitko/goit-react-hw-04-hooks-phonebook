import React from 'react';
import PropTypes from 'prop-types'
import { List, Item } from '../ContactsList/ContactsList.styles';

const ContactsList = ({ filtredContacts, deleteContact }) => {
  return (
    <List>
      {filtredContacts().map(cont => {
        return (
          <Item key={cont.id}>
            <p>{`${cont.name}: ${cont.number}`}</p>
            <button onClick={() => deleteContact(cont.id)}>Delete</button>
          </Item>
        )
      })}
    </List>
  )
};

ContactsList.propTypes = {
  filtredContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from './store';
import {
  List,
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './App.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <List>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactName>{contact.name}:</ContactName>
          <ContactNumber>{contact.number}</ContactNumber>
          <DeleteButton onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;

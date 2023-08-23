import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from './store';
import { Form, Label, Input, Button } from './App.styled';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setContact(prevContact => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const existingContact = contacts.find(
      c => c.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${contact.name} is already exist`);
    } else {
      dispatch(addContact({ ...contact, id: nanoid() }));
      setContact({ name: '', number: '' });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash, and spaces."
          required
        />
      </Label>
      <br />
      <Label>
        Number:
        <Input
          type="tel"
          name="number"
          value={contact.number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <br />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;

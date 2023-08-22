import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    // const contacts = selectContacts(state) || [];
    // const filter = selectFilter(state);

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);

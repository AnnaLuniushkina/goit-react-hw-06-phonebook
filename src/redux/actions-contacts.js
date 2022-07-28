import { createAction } from '@reduxjs/toolkit'; 

const addContact = createAction('contacts/add');
const deleteContact = createAction('contacts/delete');
const filterChange = createAction('contacts/filterChange');

export { addContact, deleteContact, filterChange };
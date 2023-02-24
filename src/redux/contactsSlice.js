import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return { payload: { id: nanoid(), name, number } };
      },
    },

    deleteContact(state, action) {
      return state.filter(contact => action.payload !== contact.id);
    },
  },
});
// ниже reducers или может непонятно почему reducer (как в конспекте)
export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;

// const addContact = ({ name, number }) => {
//   contacts.find(obj => obj.name === name)
//     ? alert(`${name} is already in contacts`)
//     : setContacts(prevContacts => [
//         { name, id: nanoid(), number },
//         ...prevContacts,
//       ]);
// };

// const deleteContact = ContactId => {
//   setContacts(contacts.filter(contact => ContactId !== contact.id));
// };

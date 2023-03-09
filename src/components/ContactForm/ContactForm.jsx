import { useState } from 'react';

import { Form, InputName, Input, AddContact } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import { getContacts } from 'components/redux/selectors';
import { addContacts } from 'components/redux/operations';



export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  function handelInputChange(event) {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'phone':
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  }

  function reset() {
    setName('');
    setNumber('');
  }

  function handelSubmit(event) {
    event.preventDefault();

    const contactName = [];

    for (const contact of allContacts) {
      contactName.push(contact.name);
    }

    if (contactName.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContacts({ name, phone }));
    reset();
  }
  return (
    <Form onSubmit={handelSubmit}>
      <InputName>Name</InputName>
      <Input
        type="text"
        value={name}
        onChange={handelInputChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <InputName>Number</InputName>
      <Input
        type="tel"
        value={phone}
        onChange={handelInputChange}
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <AddContact type="submit">Add contact</AddContact>
    </Form>
  );
};



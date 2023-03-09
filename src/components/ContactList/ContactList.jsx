 import React from 'react';
 import { ContactListStyled, ContactItem } from './ContactList.styled';


 import { Button } from 'components/App/App.styled';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../redux/operations';
import {
  getLoading,
  getError,
  selectVisibleContacts,
} from '../redux/selectors';
import { fetchContacts } from '../redux/operations';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactListStyled>
      <h2>My contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <ContactItem>
            {contact.name}: {contact.number}
            <Button onClick={() => dispatch(deleteContacts(contact.id))}>
              Delete
            </Button>
          </ContactItem>
        </ContactItem>
      ))}
    </ContactListStyled>
  );
};
// import React from 'react';
 import { ContactListStyled, ContactItem } from './ContactList.styled';

// import { useDispatch, useSelector } from 'react-redux';
// //import { deleteContact } from 'components/redux/contactSlice';

// //import {  getFilteredContacts } from 'components/redux/selectors';
 import { Button } from 'components/App/App.styled';
// import { deleteContacts } from '../redux/operations';


// const ContactList = () => {
//   // const contacts = useSelector(getFilteredContacts);

//    const dispatch = useDispatch();
   

//   return (
//     <ContactListStyled>
//       {contacts.map(contact => (
//         <ContactItem key={contact.id}>
//           {contact.name}: {contact.number}
//           <Button
//             type="button"
//             onClick={() => dispatch(deleteContacts(contact.id))}
//           >
//             Delete
//           </Button>
//         </ContactItem>
//       ))}
//     </ContactListStyled>
//   );
// };

// export default ContactList;
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
            {contact.name}: {contact.phone}{' '}
            <Button onClick={() => dispatch(deleteContacts(contact.id))}>
              Delete
            </Button>
          </ContactItem>
        </ContactItem>
      ))}
    </ContactListStyled>
  );
};
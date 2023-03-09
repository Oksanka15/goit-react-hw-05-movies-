
//import {ContactForm} from "components/ContactForm/ContactForm";
import ContactForm from "components/ContactForm/ContactForm";
import { ContactsList } from "components/ContactList";
//import {ContactList} from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Section from "components/Section/Section";


export const App = () => {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      </>
    );
  };
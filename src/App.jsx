import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import contactData from "./assets/contact.json";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContact = JSON.parse(window.localStorage.getItem('contact'))
    if( savedContact?.length) {
      return savedContact 
    } return contactData
  });
  const [searchWord, setSearcWord] = useState("");

  useEffect(() => {
    window.localStorage.setItem('contact', JSON.stringify(contacts))
  },[contacts])


  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const searchSeting = () => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(searchWord.toLowerCase())
    );
  };

  const handleNewContact = (newContactData) => {
    const NewContact = {
      id: nanoid(),
      name: newContactData.name,
      number: newContactData.number,
    };
    const Esexzist =  contacts.some( item => item.number === newContactData.number)
    if(Esexzist){
      return alert('This number already exist!')
    }
    
    setContacts((prevContacts) => [...prevContacts, NewContact]);
  };

  return (
    <>
      <Section>
        <Container>
          <ContactForm handleNewContact={handleNewContact} />
        </Container>
      </Section>
      <Section>
        <Container>
          <SearchBox searchWord={searchWord} setSearcWord={setSearcWord} />
        </Container>
      </Section>
      <Section>
        <Container>
          <ContactList
            contacts={searchSeting()}
            onDelete={handleDeleteContact}
          />
        </Container>
      </Section>
    </>
  );
};

export default App;

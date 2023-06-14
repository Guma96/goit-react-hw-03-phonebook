import { Component } from "react";
import { Frame, Container, Title, SubTitle } from "./App.styled";
import { ContactForm } from "components/ContactForm";
import { ContactList } from "components/ContactList";
import { Filter } from "components/Filter";
import { nanoid } from "nanoid";
import defaultContacts from '../../data/contacts.json';


export class App extends Component {
  state = {
    contacts: defaultContacts,
    filter: '',
  };

  localStorageKey = 'contacts';


  componentDidMount() {
    const savedContacts = localStorage.getItem(this.localStorageKey);

    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    } else {
      this.setState({ contacts: defaultContacts });
    }
  };


  componentDidUpdate(prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
    }
  }; 


  onSubmitHandler = (newContact) => {
    const { contacts } = this.state;

    const isDuplicateName = contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());

    if (isDuplicateName) {
      return alert(`${newContact.name} is already in contacts`);
    }

    const newContactId = nanoid();

    const updatedContacts = [...contacts, { ...newContact, id: newContactId }];
    this.setState({
      contacts: updatedContacts
    });
  };


  onDeleteHandler = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };


  onFilterContacts = (event) => {
    const filterValue = event.target.value;
    this.setState({ filter: filterValue });
  };


  render() {
    const { filter } = this.state;
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );


    return (
      <Container>
        <Frame>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.onSubmitHandler} />

          <SubTitle>Contacts</SubTitle>
          <Filter
            value={filter}
            onChange={this.onFilterContacts}/>
          <ContactList contacts={filteredContacts} onDeleteContact={this.onDeleteHandler} />
        </Frame>
      </Container>
    );
  }
};



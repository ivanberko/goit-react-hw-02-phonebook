import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: "Rosie Simpson", number: "459-12-56" },
      { id: uuidv4(), name: "Hermione Kline", number: "443-89-12" },
      { id: uuidv4(), name: "Eden Clements", number: "645-17-79" },
      { id: uuidv4(), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (contact) => {
    const contactToAdd = {
      ...contact,
      id: uuidv4(),
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contactToAdd],
    }));
  };

  findContact = (name, contacts) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContact = this.findContact(filter, contacts);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          contacts={contacts}
          filter={filter}
          handleFindName={this.handleChange}
        />
        <ContactList contacts={filteredContact} />
      </div>
    );
  }
}

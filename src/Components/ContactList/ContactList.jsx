import React from "react";

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id}>
        <p>
          {name}: <span>{number}</span>
        </p>
      </li>
    ))}
  </ul>
);

export default ContactList;

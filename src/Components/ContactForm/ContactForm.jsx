import React, { Component } from "react";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const { onAddContact } = this.props;
    e.preventDefault();
    onAddContact({ ...this.state });
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

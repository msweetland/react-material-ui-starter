import React, { Component } from 'react';

import Textarea from 'react-textarea-autosize';

export default class GetInTouch extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeSubject = this.changeSubject.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
  }

  changeName = (event) => {
    this.setState({name: event.value});
  }

  changeEmail = (event) => {
    this.setState({email: event.value});
  }

  changeSubject = (event) => {
    this.setState({subject: event.value});
  }

  changeMessage = (event) => {
    this.setState({message: event.value});
  }

  render() {
    return (
      <section>
        <h2>Get in touch</h2>
        <form>
          <div className="field half first">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name:"
              value={this.state.name}
              onChange={this.changeName}
            />
          </div>
          <div className="field half">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email:"
              value={this.state.email}
              onChange={this.changeEmail}
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="Subject"
              id="name"
              placeholder="Subject:"
              value={this.state.subject}
              onChange={this.changeSubject}
            />
          </div>
          <div className="field">
            <Textarea
              name="message"
              id="message"
              placeholder="Message:"
              value={this.state.message}
              onChange={this.changeMessage}
            />
          </div>
          <ul className="actions">
            <li>
              <button value="Send" className="special">Send</button>
            </li>
          </ul>
        </form>
      </section>
    );
  }
}

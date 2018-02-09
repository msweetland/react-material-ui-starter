import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

import PropTypes from 'prop-types';

export default class GetInTouch extends Component {
  constructor(props) {
    super(props);
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
        {this.props.contactPage ?
          <h1 style={{marginBottom: '1.5em'}}>Get In Touch</h1> :
          <h2>Get in touch</h2>
        }
        <div className="divForm">
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
              placeholder="Your Email:"
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
              <button value="Send" className="button special">Send</button>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

GetInTouch.defaultProps = {
  contactPage: false
};

GetInTouch.propTypes = {
  contactPage: PropTypes.bool
};

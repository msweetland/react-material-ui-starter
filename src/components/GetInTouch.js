import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import './GetInTouch.css';

export default class GetInTouch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      emailError: false,
      showContact: true,
      title: 'Get In Touch',
      loading: false,
      currentHeight: 0
    };

    this.changeInput = this.changeInput.bind(this);
    this.sendMail = this.sendMail.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  componentDidMount() {
    this.updateHeight();
    window.addEventListener('resize', this.updateHeight);
  }

  updateHeight() {
    this.setState({
      currentHeight: document.getElementById('contactFrom').clientHeight
    });
  }

  changeInput = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  sendMail = () => {
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({loading: false});
    }, 3000);
  }

  renderEmail() {
    return (
      <div className="field half">
        {this.state.emailError ?
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email:"
            value={this.state.email}
            onChange={this.changeInput}
          /> :
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email:"
            value={this.state.email}
            onChange={this.changeInput}
          />
        }
      </div>
    );
  }

  renderContact() {
    return (
      <div className="fadeIn" >
        {this.props.contactPage ?
          <h1 style={{marginBottom: '1.5em'}}>{this.state.title}</h1> :
          <h2>{this.state.title}</h2>
        }
        <div className="divForm">
          <div className="field half first">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name:"
              value={this.state.name}
              onChange={this.changeInput}
            />
          </div>
          {this.renderEmail()}
          <div className="field">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject:"
              value={this.state.subject}
              onChange={this.changeInput}
            />
          </div>
          <div className="field">
            <Textarea
              name="message"
              id="message"
              placeholder="Message:"
              value={this.state.message}
              onChange={this.changeInput}
            />
          </div>
          <ul className="actions">
            <li>
              <button
                value="Send"
                className="button special"
                onClick={this.sendMail}
              >
                Send
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  renderForm() {
    return (
      <div>
        {this.state.showContact ?
         this.renderContact() : null}
      </div>
    );
  }


  render() {
    return (
      <section id="contactFrom">
        {this.state.loading ?
          <div
            style={{
              height: this.state.currentHeight,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'

            }}
          >
            <Spinner
              fadeIn="half"
              name="double-bounce"
              style={{width: '50px', height: '50px'}}
            />
          </div>
            :
          this.renderForm()
        }
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

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
      allInput: false,
      emailError: false,
      showContact: true,
      loading: false,
      currentHeight: 0,
      title: 'Get In Touch'
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
    const allInput = (this.state.name !== '' && this.state.email !== '' &&
                      this.state.subject !== '' && this.state.message !== '');

    this.setState({[event.target.name]: event.target.value, allInput});
  }

  sendMail = () => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) {
      this.setState({loading: true, title: ''});
      setTimeout(() => {
        this.setState({
          loading: false, title: 'Your message has been received!', name: '', email: '', subject: '', message: ''
        });
      }, 3000);
    } else {
      // exclamation-circle
      this.setState({loading: false, emailError: true , email: '', allInput: false});
    }
  }

  renderContact() {
    return (
      <div className="fadeIn" >
        <div className="divForm">
          <div className="field half first">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name:"
              value={this.state.name}
              onChange={this.changeInput}
            />
          </div>
          <div className="field half">
            <input
              type="email"
              name="email"
              id="email"
              placeholder={this.state.emailError ?
                'Enter a Valid Email:' : 'Your Email:'}
              value={this.state.email}
              onChange={this.changeInput}
            />
          </div>
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
                disabled={!this.state.allInput}
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
      <section id="contactFrom" style={{transition: 'all 0.5s ease-in-out'}}>
        {this.props.contactPage ?
          <h1 style={{marginBottom: '1em'}} className="fadeIn">
            {this.state.title}
          </h1> :
          <h2 style={{marginBottom: '1.5em'}} className="fadeIn">
            {this.state.title}
          </h2>
        }
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

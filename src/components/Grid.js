import React from 'react';

const divStyle = {
  height: '50vh'
};

export default () => (
  <div id="wrapper">
    <div id="header">
      <div className="inner" style={divStyle}>
        <section>
          <h2>Follow</h2>
          <ul className="icons">
            <li>
              <a href="/" className="icon style2 fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="/" className="icon style2 fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="/" className="icon style2 fa-envelope-o">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

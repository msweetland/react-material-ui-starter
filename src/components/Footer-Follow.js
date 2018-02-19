import React from 'react';

export default () => (
  <section style={{transition: 'all 0.5s ease-in-out'}} >
    <h2 style={{marginBottom: '1.5em'}}>Follow</h2>
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
        <a href="mailto:mjsweet@umich.edu" className="icon style2 fa-envelope-o">
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
  </section>
);

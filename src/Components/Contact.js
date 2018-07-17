import React from 'react';
import '../App.css';

import cbside from '../Library/img/cb-contact-img.jpg';

const Contact = () => (
  <div id = "contact-section">
    <div className = "row h-100">
    <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
    <img src = {cbside} className="contact-sideimg img-fluid d-lg-block d-md-none d-none"/>

    </div>
    <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="contact-card mt-3">
          <div className = "card-front">
          <p className = "text-center display-4 mt-5 mb-3 contact-title">Is there anything else?</p>
          <p className = "contact-semi-title">
            Need some information or have something to say?
          </p>
          <p className = "contact-description">
            Let us know!
          </p>
        </div>

        <div className = "card-back">
          <p className = "h6 contact-title text-center">
            Contact Us!
          </p>
          <p className = "contact-description text-center">
            We love to hear something from you, especially when it helps us make the Coffeebreak experience even better. So send us an
            email with your thoughts, questions, or even suggestions and we&apos;ll get back to you as soon as we can.
          </p>
          <form method="POST" action="https://formspree.io/palmaresgabriel@yahoo.com">
            <div className = "form-group">
              <input type = "text"  id = "name" name = "name" className = "form-control" placeholder ="Your Name" required/>
              </div>
              <div className = "form-group">
              <input type = "email"  id = "email" name="_replyto" className = "form-control" placeholder ="Your Email" required/>
              </div>
                <div className = "form-group">
              <input type = "text" id = "phone" name = "phone" className = "form-control" placeholder ="Your Contact #" required/>
              </div>
              <div className = "form-group ">
              <textarea id = "message" className = "form-control"  name = "message"  rows = "5" placeholder ="Your Message" />
              </div>
              <div className = "form-group float-left">
              <input type = "submit" value="Submit" className = "btn btn-dark"/>
            </div>
          </form>
          </div>

        </div>

    </div>
    </div>
  </div>
)

export default Contact;

import React from 'react';
import '../App.css';

import cbside from '../Library/img/cb-contact-img.jpg';
import cbcake from '../Library/img/cb_cake.png';

const Contact = () => (
  <div id = "contact-section" className = "h-100">
    <div className = "row h-100 mx-0">
    <div className = "col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 px-0 d-xl-block d-md-none d-none">
      <img src = {cbside} className="contact-sideimg img-fluid d-lg-block d-md-none d-none"/>
    </div>
    <div className = "col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="contact-card mx-auto d-block mx-auto pl-lg-5 pl-xl-0 pl-md-5 pl-4">
          <div className = "card-front text-center">
            <p className = "display-4 contact-title mb-2">Is there anything else?</p>
            <p className = "contact-description">
              Need some information or have something to say?
            <p>
              Let us know!
            </p>
            </p>
            <p className = "contact-semi-title font-weight-bold">
              Talk to Us!
            </p>
            <img src = {cbcake} className = "img-fluid" />
          </div>

          <div className = "card-back">
            <p className = "contact-back-description text-center-justify">
              We love to hear something from you, especially when it helps us make the Coffeebreak experience even better. So send us an
              email with your thoughts, questions, or even suggestions and we&apos;ll get back to you as soon as we can.
            </p>
            <form method="POST" action="https://formspree.io/customercare@coffeebreak.ph">
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
                <textarea id = "message" className = "form-control"  name = "message"  rows = "3" placeholder ="Your Message" />
                </div>
                <div className = "form-group float-right">
                <input type = "submit" value="Submit" className = "btn btn-dark float-right"/>
              </div>
            </form>
            </div>

        </div>

    </div>
    </div>
  </div>
)

export default Contact;

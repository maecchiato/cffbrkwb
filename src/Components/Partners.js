import React from 'react';
import '../App.css';

import awardsimg from '../Library/img/awards.png';

const Partners = () => (
  <div id = "partners-section">
    <div className = "partners-background row h-100 mx-0">
      <div className = "partners-box">
          <h1 className = "partners-title p-4 display-1">GRAB AN EXTRA BREW OF OPPORTUNITY!</h1>
          <a href = "#info" className = "btn btn-warning">Be our Partner to Success</a>
      </div>
    </div>
    <span id = "info"></span>
    <div className = "row mx-0 w-100 partners-info">
      <div className = "col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
        <div className = "info-main ml-5">
          <p className = "display-4 info-title">
            You have already experienced the goodness of Coffeebreak, how about getting a franchise?
          </p>
          <div className = "mr-5">
            <p className = "">
              Coffeebreak has been a member of the Philippine Franchise Association since 2012. It aims to be among the top players
              in the franchise industry and to reach the market in other cities outside Iloilo.
            </p>
            <p className = "">
              Be our partner and continue to promote the taste of local pride. As a Coffeebreak franchisee, you want your investment to be hot and brewed to perfection.
              And that’s exactly what you will get when you start your business with Coffeebreak.
            </p>
          </div>
          <div className = "btn-group mt-5">
            <a href="mailto:franchising@coffeebreak.com?Subject=Franchise%20Inquiry" className = "btn btn-dark">Send us an Email</a>
            <a href = "#details" className = "btn btn-secondary ml-2">More Details</a>
          </div>
          </div>
        </div>
          <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <img src = {awardsimg} className = "d-md-block d-none mx-auto img-fluid" alt = "A Multi Awarded Coffee Shop hailed as the 'Best Coffeeshop in Iloilo' with a whooping constant 5 star rating"/>
      </div>
    </div>
    <span id = "details"></span>
    <div className = "row mx-0 w-100 partner-details">
    <div className = "col-12 text-center pb-5">
      <p className = "display-4 font-weight-bold">Coffeebreak Franchise Details</p>
    </div>
      <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className = "partners-faq mx-3">
          <div className="tab-pane fade active show" id="v-pills-faq" role="tabpanel" aria-labelledby="v-pills-profile-tab"><a href="#" data-toggle="collapse" data-target="#FAQ1">
              <div className="alert alert-danger" role="alert">
                Q: What is our Trade Name?</div>
                </a>
                <div id="FAQ1" className="collapse">
                  <p className="p">
                    A: Coffeebreak Café International, Inc.
                  </p>
                </div>
              </div>
              <div className="tab-pane fade active show" id="v-pills-faq" role="tabpanel" aria-labelledby="v-pills-profile-tab"><a href="#" data-toggle="collapse" data-target="#FAQ2">
                  <div className="alert alert-danger" role="alert">
                    Q: What is the nature of our Business?</div>
                    </a>
                    <div id="FAQ2" className="collapse">
                      <p className="p">
                        A: Serving food and beverage (Coffee Shop)
                      </p>
                    </div>
                  </div>
              <div className="tab-pane fade active show" id="v-pills-faq" role="tabpanel" aria-labelledby="v-pills-profile-tab"><a href="#" data-toggle="collapse" data-target="#FAQ3">
                  <div className="alert alert-danger" role="alert">
                    Q: How much is our Franchising Fee?</div>
                    </a>
                    <div id="FAQ3" className="collapse">
                      <p className="p">
                        A: P650, 000.00 Net of Tax
                      </p>
                    </div>
                </div>
                <div className="tab-pane fade active show" id="v-pills-faq" role="tabpanel" aria-labelledby="v-pills-profile-tab"><a href="#" data-toggle="collapse" data-target="#FAQ4">
                    <div className="alert alert-danger" role="alert">
                      Q: Where do we get the construction and renovation, machines and equimpents, furniture and fixture exepnse?</div>
                      </a>
                      <div id="FAQ4" className="collapse">
                        <p className="p">
                          A: From the Franchisee&apos;s Account
                        </p>
                      </div>
                  </div>
                  <div className="tab-pane fade active show" id="v-pills-faq" role="tabpanel" aria-labelledby="v-pills-profile-tab"><a href="#" data-toggle="collapse" data-target="#FAQ5">
                      <div className="alert alert-danger" role="alert">
                        Q: How Long is our Franchise Duration?</div>
                        </a>
                        <div id="FAQ5" className="collapse">
                          <p className="p">
                            A: Five (5) years
                          </p>
                        </div>
                    </div>
                    <div className="tab-pane fade active show" id="v-pills-faq" role="tabpanel" aria-labelledby="v-pills-profile-tab"><a href="#" data-toggle="collapse" data-target="#FAQ6">
                        <div className="alert alert-danger" role="alert">
                          Q: How much is the renewal fee?</div>
                          </a>
                          <div id="FAQ6" className="collapse">
                            <p className="p">
                              A: P500, 000.00
                            </p>
                          </div>
                      </div>
                      <div className="tab-pane fade active show" id="v-pills-faq" role="tabpanel" aria-labelledby="v-pills-profile-tab"><a href="#" data-toggle="collapse" data-target="#FAQ7">
                          <div className="alert alert-danger" role="alert">
                            Q: How much is the Security Deposit?</div>
                            </a>
                            <div id="FAQ7" className="collapse">
                              <p className="p">
                                A: P100, 000.00 – refundable upon expiration
                              </p>
                            </div>
                        </div>
                        <div className="tab-pane fade active show" id="v-pills-faq" role="tabpanel" aria-labelledby="v-pills-profile-tab"><a href="#" data-toggle="collapse" data-target="#FAQ8">
                            <div className="alert alert-danger" role="alert">
                              Q: Who will select your Store Location?</div>
                              </a>
                              <div id="FAQ8" className="collapse">
                                <p className="p">
                                  A: You as the franchisee will be the one to choose your strategic location.
                                  Minimum space required is 60 square meters.
                                </p>
                              </div>
                          </div>
                      </div>
            </div>
          <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="tab-pane fade active show mx-3" id="v-pills-faq" role="tabpanel" aria-labelledby="v-pills-profile-tab"><a href="#" data-toggle="collapse" data-target="#FAQPackageInclusion">
              <div className="alert alert-danger" role="alert">
                Package Includes the foilowing:
                <i className="fas fa-sort-down float-right"></i>
              </div>
                </a>
                <div id="FAQPackageInclusion" className="collapse">
                  <ol type="I" className = "h6">
                    <li>
                      Use of the Coffeebreak Trade Name & Marks
                    </li>
                    <li>
                      Business Operation System
                    </li>
                    <li>
                      Store Design, Perspective, and Layout
                    </li>
                    <li>
                      Complete list of equipment, furniture, required supplies, and Small Wares
                    </li>
                    <li>
                      Marketing Support
                    </li>
                    <li>
                      Point of Sales System
                    </li>
                    <li>
                      Operational and Technical Support
                    </li>
                    <li>
                      Training
                    </li>
                    <li>
                      Pre-Opening and Start-up
                    </li>
                  </ol>
                </div>
            </div>
      </div>
      <div className = "col-12">
        <p className = "h6 font-weight-bold text-center pt-3 pb-3">All Rights Reserved 2018 &copy;	</p>
      </div>
    </div>
  </div>
)

export default Partners;

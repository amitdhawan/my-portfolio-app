import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#"> Technical Leader - Monotype Solutions India Pvt Ltd.</a> <span>2015-present</span></h2>
                        <ul>
                          <li>
                            <p> <b> Page View Tracking </b> -  ETL pipeline for batch and real time processing of raw server log files whose size ranging from 60-70 GB daily</p>
                          </li>
                          <li>
                            <p> <b> Font Discovery Microservice </b> -  Provide font similarity, attributes, Pairs etc using serverless microservice architecture</p>
                          </li>
                          <li>
                            <p> <b> Web Font Microservices </b> - Provide web fonts for respective desktop fonts, Cloud hosting of web fonts, Dynamic subsetting</p>
                          </li>
                          <li>
                            <p> <b> POC's on Product inventory management </b> tools like Magento and Skava and explore headless integration capabilities of these platforms. Create backend with Node.jS  </p>
                          </li>
                          <li>
                            <p> <b> iOS apps development </b> - Lead iOS apps development efforts in Monotype. Proud of work done on <a href='https://itunes.apple.com/us/app/whatthefont/id304304134?mt=8'> What The Font </a> IOS app </p>
                          </li>
                          <li>
                            <p> <b> Scrum master </b> - Scrum alliance Certified Scrum master and advocate of Agile methodology and scrum framework</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#"> Lead Engineer - Samsung R & D Institute Noida</a> <span>2011-2015</span></h2>
                        <ul>
                          <li>
                            <p> <b> iOS Team Lead </b> -  End to end delivery on SmartView and MagicInfo iOS app</p>
                          </li>
                          <li>
                            <p> <b> Requirement gathering and RFP analysis </b> -  Gather project requirements from client and provide estimates on project delivery timelines</p>
                          </li>
                          <li>
                            <p> <b> Working experience on C++ project </b> to change SmartTV settings from desktop app. </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#"> Senior Software Engineer -  Accenture Services Pvt Ltd.</a> <span>2009-2011</span></h2>
                        <ul>
                          <li>
                            <p> <b> iOS app development </b> -  For insurance clients like Standard Life </p>
                          </li>
                          <li>
                            <p> <b> Proof of concepts developed </b> -  Screen Mirror iOS app on projector </p>
                          </li>
                          <li>
                            <p> <b> Completed 6 months Green Field training </b> on various languages like C++, Java </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

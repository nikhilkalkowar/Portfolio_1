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
                        <h2>Ballapur Institute of Technology, Ballarpur <span>2019 - 2023</span></h2>
                        <h3>CGPA : 9.48 / 10</h3>
                        <p>I have completed My <strong>Bachelor's in Technology</strong> in <strong>Computer Science & Engineering</strong> majors. Over the period, I have covered the CS fundamentals courses like, 
                            <ul>
                              <li>C</li>
                              <li>Database Management Systems</li>
                              <li>Operating System</li>
                              <li>Computer Networks</li>
                            </ul>
                            and have good understanding of them. I have also been part of various college societies and events.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Z.P JR COLLEGE SIRONCHA  <span>2017 - 2019</span></h2>
                        <h3>HSC Board : 58.46 %  &emsp; </h3>
                        <p>I have completed my Higher Secondary Education in Science with Physics, Chemistry and Mathematics.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Disney Land English Medium School Sironcha <span>2015 - 2017</span></h2>
                        <h3>SSC Board : 58.80 %</h3>
                        <p></p> 
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

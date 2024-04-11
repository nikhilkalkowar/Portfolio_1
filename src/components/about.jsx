import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Hello! I'm <strong>Nikhil Kalkotwar</strong>, a dedicated Computer Science Engineer with a strong foundation in technology. I  have completed my Bachelor of Technology (B.Tech) degree in Computer Science and Engineering from Dr. Babasaheb Ambedkar Technological University.  I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years!</p>
                   
                    <p>I often practice ,<strong>Competitive Programming</strong> on platforms like CodeChef, CodeForces. I am interested in <strong>Web Development</strong> exploring the power of JavaScript. I am also enthusiastic about <strong>Learning new Technologies.</strong> </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development</h3>
                    <p>I have experience building websites and using HTML, CSS, JavaScript, React.js, Node.js, Express.js,Bootstrap</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Python</h3>
                    {/* <p>As coming from the CS background, I have good grasp over fundamental concepts of Python</p> */}
                    <p>With a CS background, I learned Python's fundamentals, applying it across problem-solving, web development, and data analysis. </p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Java</h3>
                    <p>With a Computer Science background, I possess proficient skills in Java programming, including its syntax, object-oriented principles, JDBC, Servlets.</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Spring </h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of Spring, Spring Boot, Microservices </p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Oracle</h3>
                    <p>With a CS background, I'm well-versed in Oracle's fundamentals. Skilled in database design, SQL querying, and data manipulation, I'm equipped to handle diverse database tasks efficiently.</p>
                </div>
                </div>
            </div>


            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>I am exploring the domain, learning Cloud Computing with AWS...</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}

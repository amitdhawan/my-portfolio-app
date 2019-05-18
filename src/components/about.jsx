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
                        <p> Human | Engineering leader | Javascript | ReactJS | Node.js | AWS cloud expert | ETL pipeline | Devops | iOS</p>
                        <p> Iam a energetic software engineer with a passion to drive business value through innovation and operational excellence delivering superior engineering solutions at scale. </p>
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
                        <h3>Team Leader - Microservices / Frontend Development</h3>
                        <p> Advocate of code reviews with pre-comit checks on PR's, Maintainable and easily understood code, TDD and DDD </p>
                        <p> Design and development of Microservices </p>
                        <p> Provide solutions to complex problems </p>
                        <p> Code reviews </p>
                        <p> Design and development of microservices using engineering best practices </p>
                        <p> Strive for quality engineering product using practices like CI/CD, Pre commit hooks, TDD, DDD, Code analysis etc.</p>
                        <p> Developed serverless REST api's using AWS managed services</p>
                        <p> Frontend design and development using ReactJS as the library to develop resuable UI components</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-3">
                    <span className="icon">
                        <i className="icon-open" />
                    </span>
                    <div className="desc">
                        <h3> Open source software advocate</h3>
                        <p> Contribute to open source community through platforms like Medium, Github, StackOverflow etc. </p>
                        <p> Explore new technologies and provide MVP/POC's to help team in providing best solutions to sofware engineering problems</p>
                        <p> Motivate team members to learn new technologies and contribute back to community</p>
                        <p> Some of my interests in tech stack - Javascript, ReactJS, React-Native, Apache spark, Hadoop, AWS Athena, Node.js, NoSql databases, Redux, Python etc. </p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-5">
                    <span className="icon">
                        <i className="icon-cloud-storage" />
                    </span>
                    <div className="desc">
                        <h3>DevOps</h3>
                        <p> Improve and streamline CI/CD process to reduce our time to market </p>
                        <p> Guide team members towards solution to complex devops problems </p>
                        <p> Advocate of Infrastructure as code and CI/CD </p>
                        <p> Hands on expierence on - Jenkins, Shell script, AWS cloud, Ansible, Packer, Spinacker, Terraform etc. </p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-5">
                    <span className="icon">
                        <i className="icon-phone" />
                    </span>
                    <div className="desc">
                        <h3>iOS apps development</h3>
                        <p> 6+ years of iOS application development </p>
                        <p> Hands on with Swift, Objective C, iOS and MACOSX. </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
          </div>
        )
    }

}
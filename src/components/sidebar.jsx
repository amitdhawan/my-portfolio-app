import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
                    <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
                            <h1 id="colorlib-logo"><a href="index.html">Amit Dhawan</a></h1>
                            <span className="email"><i className="icon-mail"></i> er.dhawan@yahoo.com</span>
                            <span className="number"><i className="icon-phone"></i> +91-995-393-6137</span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#" data-nav-section="home">Introduction</a></li>
                                    <li><a href="#" data-nav-section="about">About</a></li>
                                    {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                      <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                                    <li><a href="#" data-nav-section="timeline">Timeline</a></li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu">
                            <ul>
                                <li><a href="https://www.facebook.com/amit.dhawan.scorpion" target="_blank"><i className="icon-facebook2" /></a></li>
                                <li><a href="https://www.instagram.com/adscorpion/" target="_blank"><i className="icon-instagram" /></a></li>
                                <li><a href="https://www.linkedin.com/in/amit-dhawan-88b7a877/" target="_blank"><i className="icon-linkedin2" /></a></li>
                                <li><a href="https://github.com/amitdhawan" target="_blank"><i className="icon-github"></i></a></li>
                                <li><a href="https://medium.com/@amitdhawan_20991" target="_blank"><i className="icon-blogger2"></i></a></li>
                            </ul>
                        </nav>
                    </aside>
                </div>
            </div>
        )
    }
}
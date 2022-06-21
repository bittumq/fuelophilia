import React from 'react'
import { Link } from 'react-router-dom';
import { learnmore } from '../config/constants';

const Aboutus = () => {
    return (
        <div>
          
            {/* ======= About Us Section ======= */}
            <section id="about" className="about" style={{marginTop: "40px"}}>
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About Us</h2>
                    </div>
                    <div className="row content">
                        <div className="col-lg-6">
                            <p>
                            Fuellophilia – On-Demand Fuel at Doorstep system with unique requirements according to preserve theirs potential consumer then put theirs leads to opportunities.
                            </p>
                            <ul>
                                <li>
                                    <i className="ri-check-double-line" />{" "}
                                    For the better user experience.
                                </li>
                                <li>
                                    <i className="ri-check-double-line" />{" "}
                                    Saves the time of user for finding their Petrol pump.
                                </li>
                                <li>
                                    <i className="ri-check-double-line" />{" "}
                                    For better user engagement.
                                </li>
                                <li>
                                    <i className="ri-check-double-line" />{" "}
                                    User save the time and cost.
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                            On-demand fuel transport is a fresh, shortly increasing domain, disrupting the present-day commercial enterprise scene as much we know it. Because on the ease about makes use of or payable in accordance with a surely modern approach, the cellular gas delivery industry is embark for steady growth.
                            </p>
                            <Link to={learnmore}>
                            <a href="#" className="btn-learn-more">
                                Learn More
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Us Section */}
        </div>
    )
}

export default Aboutus;

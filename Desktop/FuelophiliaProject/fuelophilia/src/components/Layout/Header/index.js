import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import {
    aboutus,
    contactus,
    portfolio,
    service,
    team,
    login,
    home,
    order,
    cart
} from "../../../config/constants";
import { FaUserTie } from "react-icons/fa";
import Badgedata from "./Badgedata";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";
function Header(data) {
    let users = JSON.parse(localStorage.getItem('user'))
    //console.log(users);
    let sessionUser = JSON.parse(sessionStorage.getItem('user'))
    //console.log(sessionUser);


    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/login')
    }
    const { HandleCart } = useSelector((e) => e);
    return (
        <>
            <header
                id="header"
                className="fixed-top "
                style={{ backgroundColor: "#DF7861" }}
            >
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto">
                        <Link to={home}>Fuelophilia</Link>
                    </h1>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <Link to={home}>Home</Link>
                            </li>
                            <li>
                                <Link
                                    to={aboutus}
                                    className="nav-link scrollto"
                                >

                                    About us

                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={service}
                                    className="nav-link scrollto"
                                >

                                    Services

                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={portfolio}
                                    className="nav-link scrollto"
                                >

                                    Portfolio

                                </Link>
                            </li>
                            <li>
                                <Link to={order} className="nav-link scrollto">

                                    Order

                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={contactus}
                                    className="nav-link scrollto"
                                >

                                    Contact

                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={cart}
                                    className="nav-link scrollto"
                                >

                                    <BsFillCartFill /> <span> {HandleCart?.cartdata.length}</span>


                                </Link>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="getstarted scrollto">
                                    {sessionUser ? <Badgedata first={sessionUser?.name?.slice(0, 1)} last={sessionUser?.lastname?.slice(0, 1)} /> : <FaUserTie />}
                                </a>
                                <ul>
                                    {!sessionStorage.getItem('user') ? <li>
                                        <Link to={login}>Login</Link>
                                    </li> : null
                                    }
                                    <li>
                                        <a href="#">Profile</a>
                                    </li>
                                    <li>
                                        <a href="#">Order-History</a>
                                    </li>
                                    {sessionStorage.getItem('user') ? <li>
                                        <a href="#" onClick={logOut}>Logout</a>
                                    </li>
                                        : null
                                    }

                                </ul>
                            </li>

                            {/* <li>
                                <a
                                    className="getstarted scrollto"
                                    href="#about"
                                >
                                    Get Started
                                </a>
                            </li> */}
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    {/* .navbar */}
                </div>
            </header>
            {/* End Header */}
            {/* ======= Hero Section ======= */}
            {/* <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <h1>On Demand Fuel at Door Step</h1>
                            <h2>
                                We are team of Deliver Fuel and Cng gass for
                                your location
                            </h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a
                                    href="#about"
                                    className="btn-get-started scrollto"
                                >
                                    Get Started
                                </a>
                                <a
                                    href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                                    className="glightbox btn-watch-video"
                                >
                                    <i className="bi bi-play-circle" />
                                    <span>Watch Video</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 order-1 order-lg-2 hero-img"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >
                            <img
                                src="assets/img/tdfapp1.png"
                                className="img-fluid animated"
                                alt
                            />
                        </div>
                    </div>
                </div>
            </section> */}
            {/* End Hero */}
            {/* <main id="main"> */}

            {/* ======= About Us Section ======= */}
            {/* <section id="about" className="about">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>About Us</h2>
                        </div>
                        <div className="row content">
                            <div className="col-lg-6">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <ul>
                                    <li>
                                        <i className="ri-check-double-line" />{" "}
                                        Ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat
                                    </li>
                                    <li>
                                        <i className="ri-check-double-line" />{" "}
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit
                                    </li>
                                    <li>
                                        <i className="ri-check-double-line" />{" "}
                                        Ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0">
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident, sunt
                                    in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </p>
                                <a href="#" className="btn-learn-more">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section> */}
            {/* End About Us Section */}

            {/* ======= Contact Section ======= */}
            {/* <section id="contact" className="contact">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Contact</h2>
                            <p>
                                Magnam dolores commodi suscipit. Necessitatibus
                                eius consequatur ex aliquid fuga eum quidem. Sit
                                sint consectetur velit. Quisquam quos quisquam
                                cupiditate. Et nemo qui impedit suscipit alias
                                ea. Quia fugiat sit in iste officiis commodi
                                quidem hic quas.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 d-flex align-items-stretch">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt" />
                                        <h4>Location:</h4>
                                        <p>
                                            A108 Adam Street, New York, NY
                                            535022
                                        </p>
                                    </div>
                                    <div className="email">
                                        <i className="bi bi-envelope" />
                                        <h4>Email:</h4>
                                        <p>info@example.com</p>
                                    </div>
                                    <div className="phone">
                                        <i className="bi bi-phone" />
                                        <h4>Call:</h4>
                                        <p>+1 5589 55488 55s</p>
                                    </div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                        frameBorder={0}
                                        style={{
                                            border: 0,
                                            width: "100%",
                                            height: 290,
                                        }}
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                <form
                                    action="forms/contact.php"
                                    method="post"
                                    role="form"
                                    className="php-email-form"
                                >
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            id="subject"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Message</label>
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows={10}
                                            required
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">
                                            Your message has been sent. Thank
                                            you!
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section> */}
            {/* End Contact Section */}
            {/* </main> */}
            {/* End #main */}
        </>
    );
}

export default Header;

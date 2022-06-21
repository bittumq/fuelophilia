import React from "react";
import Banner from "../components/commonBanner/Common";
import Pricing from "../components/Pricing/Index";
import Aboutus from "./Aboutus";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Team from "./Team";
const Home = () => {
  return (
    <div>
      <Banner />
      {/* ======= Clients Section ======= */}
      <section id="clients" className="clients section-bg">
        <div className="container">
          <div className="row" data-aos="zoom-in">
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-1.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-2.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-3.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-4.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-5.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-6.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Cliens Section */}

      {/* About Us Section */}
      <Aboutus />

      {/* ======= Why Us Section ======= */}
      <section id="why-us" className="why-us section-bg">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div className="content">
                <h3>
                  WHO WE SERVE?{" "}
                  <strong>Becoming A Backbone Of Indian Industries</strong>
                </h3>
                <p>
                  The country’s economic growth directly depends on the return
                  that we get from our infrastructure, corporate & commercial
                  sectors, warehouses & logistics, etc. These departments rely
                  on diesel, and we are trying to fill the gap by offering an
                  efficient and resourceful method of fulfilling all your fuel
                  requisites with just a simple web app. 
                </p>
              </div>
              <div className="accordion-list">
                <ul>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      className="collapse"
                      data-bs-target="#accordion-list-1"
                    >
                      <span
                        style={{
                          transform: "rotate(270deg)",
                        }}
                      >
                        01
                      </span>{" "}
                      Manufacturing & Production?{" "}
                      <i className="bx bx-chevron-down icon-show" />
                      <i className="bx bx-chevron-up icon-close" />
                    </a>
                    <div
                      id="accordion-list-1"
                      className="collapse show"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        The Fuel Delivery offers high-quality, unadulterated
                        fuel on time to keep your production running. Say no to
                        cash blocking due to over-storage of diesel. We offer
                        quality fuel at your doorstep that increases your
                        production efficiency, reduces cost, saves time, and
                        reduces risks & hazards that occur due to unsafe &
                        traditional means of transporting the fuel.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-2"
                      className="collapsed"
                    >
                      <span>02</span> Infrastructure & Development?{" "}
                      <i className="bx bx-chevron-down icon-show" />
                      <i className="bx bx-chevron-up icon-close" />
                    </a>
                    <div
                      id="accordion-list-2"
                      className="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        The Fuel Delivery App saves your precious time while
                        taking care of all fueling/refueling requirements by
                        delivering diesel at sites where even light motor
                        vehicles find it difficult to enter. We support the
                        nation’s infrastructure by providing quality fuel for
                        uninterrupted work & faster development. Our doorstep
                        delivery reduces expensive upfront costs that occur in
                        transit of fetching fuel.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-3"
                      className="collapsed"
                    >
                      <span>03</span> Healthcare & Hospitality?{" "}
                      <i className="bx bx-chevron-down icon-show" />
                      <i className="bx bx-chevron-up icon-close" />
                    </a>
                    <div
                      id="accordion-list-3"
                      className="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        If power is interrupted or down for even a minute,
                        critical operations get affected, lives are at risk, and
                        important data are compromised. To reduce power
                        vulnerability, you must ensure a powerful backup system
                        that can never ditch you in time emergencies. The Fuel
                        Delivery ensures on-time, high-speed density diesel
                        delivery with zero hassle, preventing a chaotic
                        environment & havoc.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-4"
                      className="collapsed"
                    >
                      <span>04</span> Commercial & Residential?{" "}
                      <i className="bx bx-chevron-down icon-show" />
                      <i className="bx bx-chevron-up icon-close" />
                    </a>
                    <div
                      id="accordion-list-4"
                      className="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        The gap in the electricity supply & demand in India
                        results in frequent power cuts even today. This, in some
                        cases, is a planned activity like load shedding whereas,
                        failure of power grids at times also leads to a ‘No
                        Electricity’ situation in many areas. The Fuel Delivery
                        provides 24X7 power back-up for a stress-free & smooth
                        functioning of the services while ensuring a good
                        customer experience and residential lifestyles.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-5"
                      className="collapsed"
                    >
                      <span>05</span> Agriculture & Heavy Machinery?{" "}
                      <i className="bx bx-chevron-down icon-show" />
                      <i className="bx bx-chevron-up icon-close" />
                    </a>
                    <div
                      id="accordion-list-5"
                      className="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        Indian agriculture sector consumes around 10 billion
                        litre diesel every year. Fuel is one of the major inputs
                        for agricultural activities. Even small farmers have
                        started using power tillers which have multiple uses.
                        Farmers need fuel so that they can effectively grow
                        crops. Many tractors and ploughs are too big and bulky
                        for public roads. Hence, diesel delivery is required for
                        uninterrupted growth. The Fuel Delivery guarantees the
                        farmers to keep their power tillers going and help them
                        keep producing healthy crops without a fuel break.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
              style={{
                backgroundImage: 'url("assets/img/hero-img.png")',
              }}
              data-aos="zoom-in"
              data-aos-delay={150}
            >
              &nbsp;
            </div>
          </div>
        </div>
      </section>
      {/* End Why Us Section */}

      {/* ======= Skills Section ======= */}
      <section id="skills" className="skills">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              <img src="assets/img/skills.png" className="img-fluid" alt />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 content"
              data-aos="fade-left"
              data-aos-delay={100}
            >
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates
              </h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="skills-content">
                <div className="progress">
                  <span className="skill">
                    Petrol <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* <div className="progress">
                  <span className="skill">
                    CSS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    > 
                    </div>
                  </div>
                </div> */}
                <div className="progress">
                  <span className="skill">
                    Diesel <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    CNG Gass <i className="val">55%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={55}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    > </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Skills Section */}

       {/* SERVICES */}
      <Services />

      {/* ======= Pricing Section ======= */}
      <Pricing />

      {/* End Pricing Section */}

      {/* ======= Cta Section ======= */}
      <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
          <div className="row">
            <div className="col-lg-9 text-center text-lg-start">
              <h3>Call To Action</h3>
              <p>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <a className="cta-btn align-middle" href="#">
                Call To Action
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Cta Section */}

      {/* Portfolio */}
      < Portfolio />

      {/* TEAM */}
      <Team />

      {/* ======= Frequently Asked Questions Section ======= */}
      <section id="faq" className="faq section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>FAQs</h2>
            <p>
              Do not find answers to your questions below? Please contact us.
            </p>
          </div>
          <div className="faq-list">
            <ul>
              <li data-aos="fade-up" data-aos-delay={100}>
                <i className="bx bx-help-circle icon-help" />{" "}
                <a
                  data-bs-toggle="collapse"
                  className="collapse"
                  data-bs-target="#faq-list-1"
                >
                  What is fuellophilia?{" "}
                  <i className="bx bx-chevron-down icon-show" />
                  <i className="bx bx-chevron-up icon-close" />
                </a>
                <div
                  id="faq-list-1"
                  className="collapse show"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    fuellophilia is an online platform to provide doorstep
                    delivery of fuel in a safe, reliable, and efficient way. You
                    can place your order online and get fuel delivered at your
                    location in specialized Refuellers (FuelBuddy Tankers)
                    according to your chosen schedule. We are making refueling
                    smarter!
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={200}>
                <i className="bx bx-help-circle icon-help" />{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-2"
                  className="collapsed"
                >
                  Which areas are being served by fuellophilia right now?{" "}
                  <i className="bx bx-chevron-down icon-show" />
                  <i className="bx bx-chevron-up icon-close" />
                </a>
                <div
                  id="faq-list-2"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Our services are available in Jaipur, Hyderabad, Delhi-NCR,
                    Chennai, Kolkata, Pune, Navi Mumbai, Thane, Ahmedabad,
                    Nasik, Lucknow, Kanpur and a number of other tier 2 cites
                    across India at present.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={300}>
                <i className="bx bx-help-circle icon-help" />{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-3"
                  className="collapsed"
                >
                  Where does fuellophilia source its fuel from ?{" "}
                  <i className="bx bx-chevron-down icon-show" />
                  <i className="bx bx-chevron-up icon-close" />
                </a>
                <div
                  id="faq-list-3"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    fuellophilia sources fuel from authorized and selected
                    dealers of oil companies near your location. We follow a
                    strict quality assurance program to ensure every drop of
                    fuel is checked for quality before it gets loaded into our
                    Refuellers for delivery. We do not purchase or stock fuel
                    prior to delivery. Fuel is sourced only upon receiving
                    orders from customers.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={400}>
                <i className="bx bx-help-circle icon-help" />{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-4"
                  className="collapsed"
                >
                  What are fuellophilia's hours of operation ?{" "}
                  <i className="bx bx-chevron-down icon-show" />
                  <i className="bx bx-chevron-up icon-close" />
                </a>
                <div
                  id="faq-list-4"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Our vehicles operate and provide deliveries 24x7 round the
                    clock.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={500}>
                <i className="bx bx-help-circle icon-help" />{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-5"
                  className="collapsed"
                >
                  What is Express Delivery ?{" "}
                  <i className="bx bx-chevron-down icon-show" />
                  <i className="bx bx-chevron-up icon-close" />
                </a>
                <div
                  id="faq-list-5"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    With Express Delivery, you can book the orders in the
                    current slot or next slot - depending on time of the
                    booking. The estimated delivery time for the express order
                    is minimum 2 hours to maximum 4 hours, based on the time of
                    order booking. The order will be delivered within the time
                    slot allocated at the time of order placement.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* End Frequently Asked Questions Section */}
    </div>
  );
};

export default Home;

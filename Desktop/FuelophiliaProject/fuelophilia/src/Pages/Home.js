import React from 'react'
import Banner from '../components/commonBanner/Common'
import Pricing from '../components/Pricing/Index'
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
                                alt
                            />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img
                                src="assets/img/clients/client-2.png"
                                className="img-fluid"
                                alt
                            />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img
                                src="assets/img/clients/client-3.png"
                                className="img-fluid"
                                alt
                            />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img
                                src="assets/img/clients/client-4.png"
                                className="img-fluid"
                                alt
                            />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img
                                src="assets/img/clients/client-5.png"
                                className="img-fluid"
                                alt
                            />
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img
                                src="assets/img/clients/client-6.png"
                                className="img-fluid"
                                alt
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* End Cliens Section */}


            {/* ======= Why Us Section ======= */}
            <section id="why-us" className="why-us section-bg">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                            <div className="content">
                                <h3>
                                    WHO WE SERVE?{" "}
                                    <strong>
                                        Becoming A Backbone Of Indian Industries
                                    </strong>
                                </h3>
                                <p>
                                    The country’s economic growth directly depends on the return that we get from our infrastructure, corporate & commercial sectors, warehouses & logistics, etc. These departments rely on diesel, and we are trying to fill the gap by offering an efficient and resourceful method of fulfilling all your fuel requisites with just a simple app. We make your daily life hassle-free by delivering the fuel to your doorstep and procuring diesel straight from the Oil Manufacturing Companies to save you from the stress of adulterated fuel. Say no to weekly production interruptions due to lack of fuel because we at The Fuel Delivery offer a 24X7 diesel delivery service that keeps various industries going without stopping.

                                    We are reshaping the face of India by revolutionizing the diesel delivery system.
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
                                            <span>01</span> Manufacturing & Production?{" "}
                                            <i className="bx bx-chevron-down icon-show" />
                                            <i className="bx bx-chevron-up icon-close" />
                                        </a>
                                        <div
                                            id="accordion-list-1"
                                            className="collapse show"
                                            data-bs-parent=".accordion-list"
                                        >
                                            <p>
                                                The Fuel Delivery offers high-quality, unadulterated fuel on time to keep your production running. Say no to cash blocking due to over-storage of diesel. We offer quality fuel at your doorstep that increases your production efficiency, reduces cost, saves time, and reduces risks & hazards that occur due to unsafe & traditional means of transporting the fuel.
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
                                                The Fuel Delivery App saves your precious time while taking care of all fueling/refueling requirements by delivering diesel at sites where even light motor vehicles find it difficult to enter. We support the nation’s infrastructure by providing quality fuel for uninterrupted work & faster development. Our doorstep delivery reduces expensive upfront costs that occur in transit of fetching fuel.
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
                                                If power is interrupted or down for even a minute, critical operations get affected, lives are at risk, and important data are compromised. To reduce power vulnerability, you must ensure a powerful backup system that can never ditch you in time emergencies. The Fuel Delivery ensures on-time, high-speed density diesel delivery with zero hassle, preventing a chaotic environment & havoc.
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
                                                The gap in the electricity supply & demand in India results in frequent power cuts even today. This, in some cases, is a planned activity like load shedding whereas, failure of power grids at times also leads to a ‘No Electricity’ situation in many areas. The Fuel Delivery provides 24X7 power back-up for a stress-free & smooth functioning of the services while ensuring a good customer experience and residential lifestyles.
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
                                                Indian agriculture sector consumes around 10 billion litre diesel every year. Fuel is one of the major inputs for agricultural activities. Even small farmers have started using power tillers which have multiple uses. Farmers need fuel so that they can effectively grow crops. Many tractors and ploughs are too big and bulky for public roads. Hence, diesel delivery is required for uninterrupted growth. The Fuel Delivery guarantees the farmers to keep their power tillers going and help them keep producing healthy crops without a fuel break.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                            style={{
                                backgroundImage:
                                    'url("assets/img/hero-img.png")',
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
                            <img
                                src="assets/img/skills.png"
                                className="img-fluid"
                                alt
                            />
                        </div>
                        <div
                            className="col-lg-6 pt-4 pt-lg-0 content"
                            data-aos="fade-left"
                            data-aos-delay={100}
                        >
                            <h3>
                                Voluptatem dignissimos provident quasi
                                corporis voluptates
                            </h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="skills-content">
                                <div className="progress">
                                    <span className="skill">
                                        HTML <i className="val">100%</i>
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
                                <div className="progress">
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
                                        />
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill">
                                        JavaScript{" "}
                                        <i className="val">75%</i>
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
                                        Photoshop <i className="val">55%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={55}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Skills Section */}

            {/* ======= Cta Section ======= */}
            <section id="cta" className="cta">
                <div className="container" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-lg-9 text-center text-lg-start">
                            <h3>Call To Action</h3>
                            <p>
                                {" "}
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
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

            {/* ======= Pricing Section ======= */}
            <Pricing />

            {/* End Pricing Section */}


            {/* ======= Frequently Asked Questions Section ======= */}
            <section id="faq" className="faq section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus
                            eius consequatur ex aliquid fuga eum quidem. Sit
                            sint consectetur velit. Quisquam quos quisquam
                            cupiditate. Et nemo qui impedit suscipit alias
                            ea. Quia fugiat sit in iste officiis commodi
                            quidem hic quas.
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
                                    Non consectetur a erat nam at lectus
                                    urna duis?{" "}
                                    <i className="bx bx-chevron-down icon-show" />
                                    <i className="bx bx-chevron-up icon-close" />
                                </a>
                                <div
                                    id="faq-list-1"
                                    className="collapse show"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Feugiat pretium nibh ipsum
                                        consequat. Tempus iaculis urna id
                                        volutpat lacus laoreet non curabitur
                                        gravida. Venenatis lectus magna
                                        fringilla urna porttitor rhoncus
                                        dolor purus non.
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
                                    Feugiat scelerisque varius morbi enim
                                    nunc?{" "}
                                    <i className="bx bx-chevron-down icon-show" />
                                    <i className="bx bx-chevron-up icon-close" />
                                </a>
                                <div
                                    id="faq-list-2"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Dolor sit amet consectetur
                                        adipiscing elit pellentesque
                                        habitant morbi. Id interdum velit
                                        laoreet id donec ultrices. Fringilla
                                        phasellus faucibus scelerisque
                                        eleifend donec pretium. Est
                                        pellentesque elit ullamcorper
                                        dignissim. Mauris ultrices eros in
                                        cursus turpis massa tincidunt dui.
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
                                    Dolor sit amet consectetur adipiscing
                                    elit?{" "}
                                    <i className="bx bx-chevron-down icon-show" />
                                    <i className="bx bx-chevron-up icon-close" />
                                </a>
                                <div
                                    id="faq-list-3"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Eleifend mi in nulla posuere
                                        sollicitudin aliquam ultrices
                                        sagittis orci. Faucibus pulvinar
                                        elementum integer enim. Sem nulla
                                        pharetra diam sit amet nisl
                                        suscipit. Rutrum tellus pellentesque
                                        eu tincidunt. Lectus urna duis
                                        convallis convallis tellus. Urna
                                        molestie at elementum eu facilisis
                                        sed odio morbi quis
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
                                    Tempus quam pellentesque nec nam aliquam
                                    sem et tortor consequat?{" "}
                                    <i className="bx bx-chevron-down icon-show" />
                                    <i className="bx bx-chevron-up icon-close" />
                                </a>
                                <div
                                    id="faq-list-4"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Molestie a iaculis at erat
                                        pellentesque adipiscing commodo.
                                        Dignissim suspendisse in est ante
                                        in. Nunc vel risus commodo viverra
                                        maecenas accumsan. Sit amet nisl
                                        suscipit adipiscing bibendum est.
                                        Purus gravida quis blandit turpis
                                        cursus in.
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
                                    Tortor vitae purus faucibus ornare.
                                    Varius vel pharetra vel turpis nunc eget
                                    lorem dolor?{" "}
                                    <i className="bx bx-chevron-down icon-show" />
                                    <i className="bx bx-chevron-up icon-close" />
                                </a>
                                <div
                                    id="faq-list-5"
                                    className="collapse"
                                    data-bs-parent=".faq-list"
                                >
                                    <p>
                                        Laoreet sit amet cursus sit amet
                                        dictum sit amet justo. Mauris vitae
                                        ultricies leo integer malesuada nunc
                                        vel. Tincidunt eget nullam non nisi
                                        est sit amet. Turpis nunc eget lorem
                                        dolor sed. Ut venenatis tellus in
                                        metus vulputate eu scelerisque.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* End Frequently Asked Questions Section */}

        </div>
    )
}

export default Home;

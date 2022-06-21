import React from "react";
const Services = () => {
  return (
    <div>
      {/* ======= Services Section ======= */}
      <section
        id="services"
        className="services section-bg"
        style={{ marginTop: "40px" }}
      >
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>
             <span style={{ fontSize: "40px", color: "#ed5a78"}}> We Keep Your Business Afloat! </span>  <br />
              The Fuel Delivery is your preferred partner for Doorstep diesel
              delivery to fulfill your fuel requirements 24 x 7, having Three
              ‘C’ offerings – Convenience, Compliance, and Cost-Effectiveness.
              We deliver diesel to the user in the manner prescribed by the
              Ministry of Petroleum and Natural Gas and licensed by PESO
              (Petroleum & Explosives Safety Organization). We are pleased to
              serve all businesses depending upon their requirements viz.
              Infrastructural Development & Construction, Hospitality &
              Healthcare, Manufacturing & Industries, Educational Institutes, IT
              & ITeS Companies, Residential Condominiums and Gated Communities,
              Club Houses, etc.
            </p>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bxl-dribbble" />
                </div>
                <h4>
                  <a href>Lorem Ipsum</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-file" />
                </div>
                <h4>
                  <a href>Sed ut perspici</a>
                </h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-tachometer" />
                </div>
                <h4>
                  <a href>Magni Dolores</a>
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-layer" />
                </div>
                <h4>
                  <a href>Nemo Enim</a>
                </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}
    </div>
  );
};

export default Services;

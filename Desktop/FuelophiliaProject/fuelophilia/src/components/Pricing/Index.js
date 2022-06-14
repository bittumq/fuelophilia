import React from 'react'
import { Link } from 'react-router-dom'
import { cart } from '../../config/constants'
import PricingData from './PricingData'

const Index = () => {
    const { title, desc, data } = PricingData;

    return (
        <>
            {/* ======= Pricing Section ======= */}
            <section id="pricing" className="pricing" style={{ marginTop: "180px" }}>
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="row">
                        {
                            data?.map((item, index) => (

                                <div
                                    className="col-lg-4"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                    key={`pricing ${index}`}
                                >
                                    <div className="box">
                                        <h3>{item.title}</h3>
                                        <h4>
                                            <sup>$</sup>{item.price}<span>{item.per}</span>
                                        </h4>
                                        {/* <ul>
                                            <li>
                                                <i className="bx bx-check" /> Quam
                                                adipiscing vitae proin
                                            </li>
                                            <li>
                                                <i className="bx bx-check" /> Nec
                                                feugiat nisl pretium
                                            </li>
                                            <li>
                                                <i className="bx bx-check" /> Nulla
                                                at volutpat diam uteera
                                            </li>
                                            <li className="na">
                                                <i className="bx bx-x" />{" "}
                                                <span>
                                                    Pharetra massa massa ultricies
                                                </span>
                                            </li>
                                            <li className="na">
                                                <i className="bx bx-x" />{" "}
                                                <span>
                                                    Massa ultricies mi quis
                                                    hendrerit
                                                </span>
                                            </li>
                                        </ul> */}

                                        <Link to={cart} className="buy-btn">
                                            {item.btnText}
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
            {/* End Pricing Section */}

        </>
    )
}

export default Index
import React from 'react'
import { useParams } from 'react-router-dom';

const Cart = () => {
    // const { id } = useParams();
    // console.log(id);

    return (
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Cart</h2>
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
                                Voluptatum deleniti atque corrupti quos
                                dolores et quas molestias excepturi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )


}

export default Cart
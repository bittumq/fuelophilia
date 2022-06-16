import React from 'react'
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PricingData from '../../components/Pricing/PricingData';

const Cart = () => {
    const { title, desc } = PricingData;
    const { HandleCart } = useSelector((e) => e)
    console.log(HandleCart?.cartdata, "uuuuuuuuuuuuuuuuuuuuuuuuuu");
    return (
        <section id="pricing" className="pricing" style={{ marginTop: "150px" }}>
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className="row" style={{ justifyContent: "center" }}>
                    {
                        HandleCart?.cartdata?.map((item, index) => (

                            <div className="card" style={{ width: '18rem' }}>
                                <img className="card-img-top" src="/assets/img/petrol.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title"> {item.title}</h5>
                                    <sup>₹</sup>{item.price}<span>{item.per}</span>
                                </div>
                                <div className="card-body">
                                    {/* <Button className="buy-btn " onClick={() => dispatch(addcart(item))}>
                                        Add To Cart
                                    </Button> */}

                                </div>
                            </div>






                        ))
                    }
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Summary</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Category
                                        {/* <span> {first?.title}</span> */}
                                        {/* <span>{HandleCart.length}</span> */}
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>Gratis</span>
                                    </li>
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                            <strong>
                                                <p className="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        {/* <span><strong>{total}</strong></span> */}
                                    </li>
                                </ul>
                                <Link to="/payment">
                                    <button type="button" className="btn btn-primary btn-lg btn-block">
                                        Go to checkout
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section >
    )
}
export default Cart;
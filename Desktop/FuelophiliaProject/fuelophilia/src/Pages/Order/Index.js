import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Pricing from '../../components/Pricing/Index'
import PricingData from "../../components/Pricing/PricingData"
import { deleteCart } from '../../redux/action'
const Index = () => {

    const dispatch = useDispatch();
    const deleteProduct = (cart) => {
        dispatch(deleteCart(cart));
    }




    let { id } = useParams();
    const [first, setfirst] = useState({});
    useEffect(() => {
        if (id) {
            const card = PricingData?.data.find((e) => {
                return e.id == id
            })
            setfirst(card)
        }
    }, [id])
    console.log(id);

    return !id ? (
        <>
            <div style={{ marginTop: "50px" }}>

                <Pricing />

            </div>

        </>
    ) :
        <section id="services" className="services section-bg" style={{ marginTop: "100px" }}>

            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Cart</h2>
                </div>
                <div style={{ display: "flex" }}>
                    <Col lg={6} style={{ marginLeft: "100px" }}>
                        <div className="row">
                            <div className="icon-box-order">
                                <h1>
                                    <span>{first.title}</span>
                                </h1>
                                <div className="icon-order">
                                    <h3>
                                        <sup>₹</sup>{first.price}<span>{first.per}</span>
                                    </h3>
                                </div>

                                <h4>
                                    <span class="input-group-btn">
                                        <button className="quantity-left-minus btn btn-danger btn-number"
                                        // onClick={() => {
                                        //     dispatch({ type: "DEC", payload: item.id });
                                        //     //changehandle(item.id);
                                        // }}
                                        // disabled={item.qty == 1 ? true : false}
                                        > <span class="glyphicon glyphicon-minus">-</span></button>
                                    </span>



                                    <span class="input-group-btn">
                                        <button className="quantity-right-plus btn btn-success btn-number"
                                        // onClick={() => {
                                        //     dispatch({ type: "INC", payload: item.id });
                                        //     // changehandle(item.id);
                                        // }}
                                        >
                                            <span class="glyphicon glyphicon-plus">+</span>
                                        </button>
                                    </span>
                                </h4>
                                <p>
                                    <button className='btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip' style={{ marginBottom: '10px', backgroundColor: 'gray' }}
                                        onClick={() => dispatch(deleteCart(first.id))}>
                                        Remove to Cart
                                    </button>
                                    {/* {first?.price} */}
                                </p>
                            </div>
                        </div>


                    </Col>

                    <Col lg={6} >
                        {/* next html summary */}
                        {/* <div className="row"> */}
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
                                            <span> {first?.title}</span>
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
                    </Col>
                </div>
            </div>


        </section>


}

export default Index
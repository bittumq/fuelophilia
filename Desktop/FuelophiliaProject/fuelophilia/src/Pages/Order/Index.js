import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Pricing from '../../components/Pricing/Index'
import PricingData from "../../components/Pricing/PricingData"
import { addtocart } from '../../redux/action'

const Index = () => {

    const dispatch = useDispatch();

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
    const addcart = (cart) => {
        dispatch(addtocart(cart));
        // localStorage.setItem("cart", JSON.stringify(cart))
    }
    const { HandleCart } = useSelector((e) => e);
    //console.log(HandleCart?.cartdata);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(HandleCart?.cartdata))
    }, [HandleCart?.cartdata])
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
                    <h2>Add Item</h2>
                </div>
                <div style={{ display: "flex" }}>
                    <Col lg={6} style={{ marginLeft: "100px" }}>
                        <div className="row">

                            <div className="card" style={{ width: '18rem' }}>
                                <img className="card-img-top" src="/assets/img/petrol.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title"> {first.title}</h5>
                                    <sup>₹</sup>{first.price}<span>{first.per}</span>
                                </div>
                                <div className="card-body">
                                    {HandleCart?.cartdata.some((e) => e.id == first?.id) ? <Link to="/cart" className='btn btn-primary'>
                                        View Cart
                                    </Link>
                                        : <Button className="buy-btn " onClick={() => dispatch(addcart(first))}>
                                            Add To Cart
                                        </Button>
                                    }

                                </div>
                            </div>

                        </div>


                    </Col>

                    <Col lg={6} >

                        {/* next html summary */}

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
                                    {/* <Link to="/payment">
                                        <button type="button" className="btn btn-primary btn-lg btn-block">
                                            Go to checkout
                                        </button>
                                    </Link> */}

                                </div>
                            </div>
                        </div>
                    </Col>
                </div >
            </div >


        </section >


}

export default Index
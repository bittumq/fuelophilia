import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PricingData from '../../components/Pricing/PricingData';
import { payment } from '../../config/constants';
import { dec, deletetoCart, inc } from '../../redux/action';
const Cart = () => {

    const dispatch = useDispatch();
    const { title, desc } = PricingData;
    const { HandleCart } = useSelector((e) => e)

    const [total, settotal] = useState(0)
    useEffect(() => {
        let totalnum = HandleCart.cartdata.reduce((acc, cur) => {
            return acc + Number(Math.ceil(cur.price) * cur.qty)
        }, 0);
        settotal(totalnum)
    }, [HandleCart])


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(HandleCart?.cartdata))
    }, [HandleCart?.cartdata])

    const deleteCart = (id) => {
        dispatch(deletetoCart(id));
    }
    return (
        <section id="pricing" className="pricing" style={{ marginTop: "40px" }}>
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
                                <div >
                                    <button className="increment" style={{ marginRight: "10px" }} onClick={() => item?.qty == 1 ? deleteCart(item.id) : dispatch(dec(item?.id))}>-</button>{item.qty}<button className="increment" style={{ marginLeft: "10px" }} onClick={() => dispatch(inc(item?.id))}>+</button>
                                </div>
                                <div className="card-body" style={{ paddingLeft: 0 }}>
                                    <button className="buy-btn" onClick={(e) => {
                                        e.preventDefault();
                                        deleteCart(item.id)
                                    }}>
                                        Remove to Cart
                                    </button>
                                </div>
                            </div>
                        ))


                    }

                    <div div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Summary</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Item
                                        <span> {HandleCart.cartdata.length}</span>
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
                                        <span><strong>{total}</strong></span>
                                    </li>
                                </ul>
                                <Link to={payment}>
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
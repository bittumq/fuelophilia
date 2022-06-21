import React from 'react'
import { Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cart } from '../../config/constants'
import { addtocart } from '../../redux/action'
import PricingData from './PricingData'

const Index = () => {
    const { title, desc } = PricingData;
    const { HandleCart } = useSelector((demo) => demo);
    const dispatch = useDispatch();
    // console.log(datademo);
    return (
        <>
            {/* ======= Pricing Section ======= */}
            <section id="pricing" className="pricing" style={{ marginTop: "50px" }}>
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="row" style={{ justifyContent: "center" }}>
                        {
                            HandleCart?.alldata?.map((item, index) => (
                                <div className="card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={item.image} alt="Card image cap" style={{height: "200px", width: "200px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title"> {item.title}</h5>
                                        <sup>₹</sup>{item.price}<span>{item.per}</span>
                                    </div>
                                    <div className="card-body">
                                        <Link to={`/order/${item.id}`} className="buy-btn" >
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
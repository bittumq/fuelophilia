import React from 'react'
//import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Layout from '../components/Layout';
import Aboutus from '../Pages/Aboutus'
import Contactus from '../Pages/Contactus'
import Home from '../Pages/Home';
import Portfolio from '../Pages/Portfolio'
import Services from '../Pages/Services';
import Team from '../Pages/Team';
import Register from '../Pages/Resister'
import Login from '../Pages/LoginpPage'
import Order from '../Pages/Order/Index'
import Dashboard from '../Pages/Dashboard'
import Cart from '../Pages/Cart/Cart'
import { aboutus, cart, contactus, dashboard, home, login, order, payment, portfolio, registration, service, team, thanku } from './constants'
import ThankYouMessage from '../Pages/ThankuMessage';
import { Payment } from '../Pages/Payment/Payment';
const Routing = () => {

    return (
        <div>
            <Router>
                <Layout>
                    <Routes>
                        <Route path={home} exact element={<Home />} />
                        <Route path={aboutus} element={<Aboutus />} />
                        <Route path={contactus} element={<Contactus />} />
                        <Route path={portfolio} element={<Portfolio />} />
                        <Route path={service} element={<Services />} />
                        <Route path={team} element={<Team />} />
                        <Route path={registration} element={<Register />} />
                        {!sessionStorage.getItem('user') ?
                            < Route path={login} element={<Login />} /> : <Route path={login} element={<Login changeroute />} />
                        }
                        <Route path={order} element={<Order />} />
                        <Route path={`${order}/:id`} element={<Order />} />
                        {/* <Route path={thanku} element={<ThankYouMessage />} /> */}
                        <Route path={dashboard} element={<Dashboard />} />
                        <Route path={cart} element={<Cart />} />
                        <Route path={payment} element={<Payment />} />
                    </Routes>
                </Layout>
            </Router>
        </div>
    )
}

export default Routing;
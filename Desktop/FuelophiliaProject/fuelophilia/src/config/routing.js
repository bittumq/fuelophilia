import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Aboutus from '../components/Pages/Aboutus'
import Landing from '../components/Pages/Landing'
import { aboutus, contactus, home } from './constants'
const routing = () => {
    return (
        <div>
            <Routes>
                <Route path={home} element={<Landing />} />
                <Route path={aboutus} element={<Aboutus />} />
                <Route path={contactus} element={<Contactus />} />
            </Routes>
        </div>
    )
}

export default routing
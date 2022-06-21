import React from 'react'
import './thank.css'

import { Container } from 'react-bootstrap';
//import CTA from '../../components/Buttton/CTA';
//import { home } from '../../config/routeConstants';

const ThankYouMessage = () => {
    return (
        <>


            <div className=" d-flex align-items-center justify-content-center bg-black text-light" style={{ marginTop: "100px" }}>
                <Container>
                    <div className="containerDiv">
                        <span className="spantitle" >
                            THANK YOU FOR CONTACTING US
                        </span>
                        <br />
                        <span className="spanDescription"
                        >
                            You will receive an email from us within next 24 hours, requesting your availability for a meeting to take things forward.
                        </span>
                        <br />
                        <span className="spanButton">
                            {/* <CTA
                                text="TAKE ME HOME"
                                arrow={true}
                                type="white"
                                link={home}
                            /> */}
                        </span>
                    </div>
                    <div className="thankYou">
                        Thank You
                    </div>
                </Container>
            </div >
        </>
    )
}

export default ThankYouMessage;
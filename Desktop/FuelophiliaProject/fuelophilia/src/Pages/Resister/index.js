import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaThemeco } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { login } from '../../config/constants'
import Axios from 'axios'
import './number.css'
const Index = () => {
    const [reg, setReg] = useState([])

    // const URI = 'https://mynodedbisonline.herokuapp.com/api/auth/register'

    const dd = () => {
        const getData = localStorage.getItem("user")
        if (getData) {
            return JSON.parse(getData)
        }
        else {
            return []
        }
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(reg))
    }, [reg])
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "all" });

    const onSubmit = ((data) => {

        setReg([...reg, data])

        // fetch(URI, {
        //     method: "POST",
        //     headers: {
        //         "content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ data })
        // })

        // Axios.post(URI, data).then((r) => {
        //     console.log(r);
        // })



    })
    return (
        <>
            <div>

                {/* <form
                className="php-email-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="row">
                    <div className="form-group col-md-6">

                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder='Please Enter Name'
                            {...register('name', { required: { value: true, message: "This Field Is Required" } })}
                        />
                    </div>
                    <div className="form-group col-md-6">

                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder='Plase Enter Email'
                            {...register('email', { required: { value: true, message: "This Field Is Required" } })}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder='Plase Enter Subjet'
                        {...register('subject', { required: { value: true, message: "This Field Is Required" } })}
                    />
                </div>
                <div className="form-group">

                    <textarea
                        className="form-control"
                        name="message"
                        rows={10}
                        defaultValue={""}
                        placeholder="Plase Enter Message"
                        {...register('message', { required: { value: true, message: "This Field Is Required" } })}
                    />
                </div>
                <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                        Your message has been sent. Thank
                        you!
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit">
                        Create
                    </button>
                </div>
            </form> */}

                <form onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: "600px", display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "100px", width: "600px", }}>
                    <h3>Sign Up</h3>
                    {/* <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            {...register('name', { required: { value: true, message: "This Field Is Required" } })}
                        />
                        <span style={{ color: "red" }}> {errors.name?.type === "required" && errors.name.message} </span>
                    </div> */}

                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="username"
                            {...register('username', { required: { value: true, message: "This Field Is Required" } })}
                        />
                        <span style={{ color: "red" }}> {errors.name?.type === "required" && errors.name.message} </span>
                    </div>


                    {/* <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Last name"
                            {...register('lastname', { required: { value: true, message: "This Field Is Required" } })}
                        />
                        <span style={{ color: "red" }}> {errors.lastname?.type === "required" && errors.lastname.message} </span>
                    </div> */}
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            {...register('email', { pattern: { value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, message: "invalid email address" }, required: { value: true, message: "This Field Is Required" } })}
                        />

                        <span style={{ color: "red" }}>{errors.email?.type === "required" && errors.email.message}</span>
                        <span style={{ color: "red" }}>{errors.email?.type === "pattern" && errors.email.message}</span>
                    </div>
                    {/* <div className="mb-3">

                        <input
                            type="number"
                            {...register('contact', { required: { value: true, message: "This Field Is Required" }, minLength: 10, maxLength: 10 })}
                            className="form-control"
                            placeholder="Enter Mobile No"
                        />
                        <span style={{ color: "red" }}>{errors.contact?.type === "required" && errors.contact.message}</span>
                        <span style={{ color: "red" }}>{errors.contact?.type === "minLength" && "Please enter valid number"}</span>
                        <span style={{ color: "red" }}>{errors.contact?.type === "maxLength" && "Phone number must be at least 10 numbers"}</span>
                    </div> */}
                    <div className="mb-3">

                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            {...register("password", {
                                required: { value: true, message: "password is required" },
                                minLength: { value: 8, message: "Min Contain 8 Characters" },
                                maxLength: { value: 14, message: "Max Contain 14 characters" },
                                pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, message: "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character" }
                            })}
                        />
                        <span style={{ color: "red" }}>{errors.password?.type === "required" && errors.password.message}</span>
                        <span style={{ color: "red" }}>{errors.password?.type === "pattern" && errors.password.message}</span>
                        <span style={{ color: "red" }}>{errors.password?.type === "minLength" && errors.password.message}</span>
                        <span style={{ color: "red" }}>{errors.password?.type === "maxLength" && errors.password.message}</span>

                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        {/* Already registered <a href="/sign-in">sign in?</a> */}
                        Already registered <Link to={login}>sign in?</Link>
                    </p>
                </form>


            </div>
        </>
    )
}

export default Index
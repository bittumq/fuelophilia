import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaThemeco } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../config/constants'
import Axios from 'axios'
import './number.css'
const Index = () => {

    const dd = () => {
        const getData = localStorage.getItem("user")
        if (getData) {
            return JSON.parse(getData)
        }
        else {
            return []
        }
    }

    const [reg, setReg] = useState(dd)
    const [alreadyUser, SetalreadyUser] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(reg))
        sessionStorage.setItem("user", JSON.stringify(reg))
    }, [reg])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "all" });

    const onSubmit = ((data) => {

        const getData = localStorage.getItem("user")

        JSON.parse(getData).filter((item) => {
            if (item.email == data.email) {
                // sessionStorage.setItem("user", JSON.stringify(ert))
                // navigate("/order");
                alert("user already register")

            } else {
                SetalreadyUser(true)
                console.log("wrong credential");
            }
        });
        setReg([...reg, data])

        setTimeout(() => {
            navigate("/login")
        });



    })
    return (
        <>
            <div>

                <form onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: "600px", display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "100px", width: "600px", }}>
                    <h3>Sign Up</h3>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            {...register('name', { required: { value: true, message: "This Field Is Required" } })}
                        />
                        <span style={{ color: "red" }}> {errors.name?.type === "required" && errors.name.message} </span>
                    </div>
                    {/* 
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="username"
                            {...register('username', { required: { value: true, message: "This Field Is Required" } })}
                        />
                        <span style={{ color: "red" }}> {errors.name?.type === "required" && errors.name.message} </span>
                    </div> */}


                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Last name"
                            {...register('lastname', { required: { value: true, message: "This Field Is Required" } })}
                        />
                        <span style={{ color: "red" }}> {errors.lastname?.type === "required" && errors.lastname.message} </span>
                    </div>
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
                    <div className="mb-3">

                        <input
                            type="number"
                            {...register('contact', { required: { value: true, message: "This Field Is Required" }, minLength: 10, maxLength: 10 })}
                            className="form-control"
                            placeholder="Enter Mobile No"
                        />
                        <span style={{ color: "red" }}>{errors.contact?.type === "required" && errors.contact.message}</span>
                        <span style={{ color: "red" }}>{errors.contact?.type === "minLength" && "Please enter valid number"}</span>
                        <span style={{ color: "red" }}>{errors.contact?.type === "maxLength" && "Phone number must be at least 10 numbers"}</span>
                    </div>
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
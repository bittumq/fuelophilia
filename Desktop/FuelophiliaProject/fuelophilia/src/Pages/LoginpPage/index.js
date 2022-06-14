import React from 'react'
import { Link } from 'react-router-dom'
import { registration } from '../../config/constants'
import { useForm } from "react-hook-form";
const Index = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "all" });

    function onSubmit(data) {
        console.log(data)
    }
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: "600px", display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "100px", width: "600px", }}>
                <h3>Sign In</h3>
                <div className="mb-3">
                    <label>Email address</label>
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
                    <label>Password</label>
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
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p className="forgot-password text-right">
                    {/* Don't have an account? <a href="#">Register?</a> */}
                    Don't have an account? <Link to={registration}>Register?</Link>
                </p>
            </form>



        </div>
    )
}

export default Index
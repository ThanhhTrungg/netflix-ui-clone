import React, { useRef } from "react"
import { auth } from "~/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

import classNames from "classnames/bind"
import styles from "./SignUp.module.scss"
const cx = classNames.bind(styles)

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const register = async (e) => {
        e.preventDefault()
        try {
            const response = await createUserWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passwordRef.current.value
            )
            console.log(response)
        } catch (error) {
            alert(error.message)
            if (error.code === "auth/email-already-in-use") {
                return error.status(400).json({
                    message: alert("Email already taken!"),
                })
            } else {
                return error.status(500).json({
                    message: alert("Something went wrong, Please try again later"),
                })
            }
        }
    }

    const signIn = async (e) => {
        e.preventDefault()
        try {
            const response = await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            console.log(response)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className={cx("signup")}>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type="submit" onClick={signIn}>
                    Sign In
                </button>
                <h4>
                    <span className={cx("signup-gray")}>New to Netflix?</span>
                    <span className={cx("signup-link")} onClick={register}>
                        Sign Up now.
                    </span>
                </h4>
            </form>
        </div>
    )
}

export default SignUp

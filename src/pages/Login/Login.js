import React, { useState } from "react";
import Image from "~/components/Image/Image";
import images from "~/assets/images";
import SignUp from "../SignUp/SignUp";

import classNames from "classnames/bind";
import styles from "./Login.module.scss";
const cx = classNames.bind(styles);

const Login = () => {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className={cx("login-screen")}>
            <div className={cx("login-background")}>
                <Image className={cx("login-logo")} src={images.logo} alt="Netflix" />
                <button className={cx("login-btn")} onClick={() => setSignIn(true)}>
                    Sign In
                </button>
                <div className={cx("login-gradient")} />
            </div>

            <div className={cx("login_body")}>
                {signIn ? (
                    <SignUp />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>

                        <div className={cx("login-input")}>
                            <form>
                                <input type="email" placeholder={"Email address"} />
                                <button className={cx("login-getStarted")} onClick={() => setSignIn(true)}>
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;

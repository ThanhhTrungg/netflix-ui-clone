import React from "react";
import Navbar from "~/components/Navbar/Navbar";
import Image from "~/components/Image/Image";

import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { auth } from "~/firebase";
const cx = classNames.bind(styles);

const Profile = () => {
    const { user } = useSelector((state) => state.user);

    return (
        <div className={cx("profileScreen")}>
            <Navbar />
            <div className={cx("profile-body")}>
                <h1>Edit Profile</h1>
                <div className={cx("profile-info")}>
                    <Image className={cx("profile-avatar")}
                        src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                        alt="User avatars"
                    />
                    <div className={cx("profile-details")}>
                        <h2 className={cx("profile-email")}>{user.email}</h2>
                        <div className={cx("profile-plans")}>
                            <h3>Plans</h3>
                            <button
                                className={cx("profile-signOut")}
                                onClick={() => {
                                    auth.signOut();
                                }}>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

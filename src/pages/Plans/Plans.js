import React, { useEffect, useState } from "react";

import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { db } from "~/firebase";
const cx = classNames.bind(styles);

const Plans = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        db.collection("products")
        .get()
    })

    return <div className={cx("plansScreen")}></div>;
};

export default Plans;

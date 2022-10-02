import React from "react";
import classNames from "classnames";
import styles from "./Image.module.scss";

const Image = ({ src, alt, ...props }) => {
    return <img className={classNames(styles.wrapper)} src={src} alt={alt} {...props} />;
};

export default Image;

/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

/**
 * @typedef {object} NavigationListProps
 * @property {string} image
 * @property {string} content
 * @property {string} href
 * @param {NavigationListProps} param0 
 */

export default function NavigationList({
  image,
  content,
  href,
}) {

  return (
    <NavLink to={href}>
      {({ isActive }) => (
        <li className={`${styles.d_flex} ${styles.list} ${isActive ? styles.checked : ""}`}>
          <img src={image} alt={content} />
          <span>{content}</span>
        </li>
      )}
    </NavLink>
  );
}

/* eslint-disable react/prop-types */
import styles from "./Navigation.module.css";
export default function NavigationList({
  image,
  content,
  Display,
  itemSelected,
}) {
  let checked;
  {
    itemSelected ? (checked = styles.checked) : "";
  }

  return (
    <li
      className={`${styles.d_flex} ${styles.list} ${checked}`}
      onClick={Display}
    >
      <img src={image} alt={content} />
      <span>{content}</span>
    </li>
  );
}

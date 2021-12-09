import React from "react";
import styles from "./Item.module.css";
import ItemsModal from "./ItemsModal";

const Item = (props) => {
  return (
    <>
      <li className={styles.item} onClick={props.onClick}>
        <div className={styles["image-container"]}>
          <img src={props.img} alt="#" />
        </div>
        <div className={styles.name}>
          <h3>{props.name}</h3>
        </div>
        <p>{props.price}</p>
      </li>
      {/* <ItemsModal
        img={props.img}
        name={props.name}
        price={props.price}
        availableSizes={props.size}
      /> */}
    </>
  );
};

export default Item;

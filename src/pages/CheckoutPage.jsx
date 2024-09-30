import { useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";

import empty from "../assets/empty-cart.svg";

import BasketSidebr from "../components/BasketSidebr";

import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const state = useSelector((store) => store.cart);

  if (!state.itemsCounter) {
    // return <p style={{ marginLeft: "12px" }}>Empty</p>;
    return (
      <div className={styles.container}>
        <img src={empty} alt="empty" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSidebr state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;

import BasketCard from "../components/BasketCard";

import empty from "../assets/empty-cart.svg";

import { useCart } from "../context/CartContext";
import BasketSidebr from "../components/BasketSidebr";

import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

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
      <BasketSidebr state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;

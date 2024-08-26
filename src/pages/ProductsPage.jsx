import { useState } from "react";
import { ImSearch } from "react-icons/im";

import Card from "../components/Card";
import Loader from "../components/Loader";

import { useProducts } from "../context/ProductContext";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();

  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value.toLowerCase().trim());
    console.log(search);
  };

  const submitHandler = () => {
    console.log("search");
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={searchHandler}
        />
        <button onClick={submitHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>sidebar</div>
      </div>
    </>
  );
}

export default ProductsPage;

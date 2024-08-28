import { useEffect, useState } from "react";

import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa6";

import Card from "../components/Card";
import Loader from "../components/Loader";

import { useProducts } from "../context/ProductContext";

import {
  createQueryObject,
  filterProducts,
  searchProducts,
} from "../helper/helper";

import styles from "./ProductsPage.module.css";
import { useSearchParams } from "react-router-dom";

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    console.log(finalProducts);
    console.log(query);
    setDisplayed(finalProducts);
  }, [query]);

  const searchHandler = (event) => {
    setSearch(event.target.value.toLowerCase().trim());
    // console.log(search);
  };

  const submitHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    // console.log(category);
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
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
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;

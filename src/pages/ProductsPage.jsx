import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Card from "../components/Card";
import Loader from "../components/Loader";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productsSlice";

// import { useProducts } from "../context/ProductContext";

import {
  filterProducts,
  searchProducts,
  getInitialQuery,
} from "../helper/helper";

import styles from "./ProductsPage.module.css";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

function ProductsPage() {
  // const products = useProducts();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product);
  const state = useSelector((store) => store.product);
  console.log(state);

  // const products = [];

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    console.log(finalProducts);
    console.log(query);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {loading && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;

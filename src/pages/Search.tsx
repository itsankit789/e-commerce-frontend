import { useState } from "react";
import ProductCard from "../components/Productcard";

const Search = () => {
  const [Search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxprice, setMaxprice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addToCartHandler = () => {};

  const isPrevPage = page > 1;
  const isNextPage = page < 10;

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters </h2>
        <div>
          <h4>Sort </h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">Default</option>
            <option value="asc">Price(Low to High)</option>
            <option value="dsc">Price(High to Low )</option>
          </select>
        </div>

        <div>
          <h4>Max price : {maxprice || ""} </h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxprice}
            onChange={(e) => setMaxprice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category </h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="">Sample1 </option>
            <option value="">Sample2 </option>
          </select>
        </div>
      </aside>
      <main>
        <h2>PRODUCT </h2>
        <input
          type="text"
          placeholder="Search by name ...."
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="Search-product-list">
          <ProductCard
            productsId="asdfasdfd"
            name="Mackbook"
            price={1200}
            stock={57}
            handler={addToCartHandler}
            photo="https://rukminim2.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70&crop=false"
          />
        </div>

        <article>
          <button
            disabled={!isPrevPage}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev{" "}
          </button>
          <span>
            {page} of{10}
          </span>
          <button
            disabled={!isNextPage}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next{" "}
          </button>
        </article>
      </main>
    </div>
  );
};

export default Search;

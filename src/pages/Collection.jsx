import React, { use, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItems from "../components/ProductItem";

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const togleCategory = (e) => {
  const value = e.target.value;

  setCategory((prev) =>
    prev.includes(value)
      ? prev.filter((item) => item !== value)
      : [...prev, value]
  );
};

  const togleSubCategory = (e) => {
  const value = e.target.value;

  setSubCategory((prev) =>
    prev.includes(value)
      ? prev.filter((item) => item !== value)
      : [...prev, value]
  );
};

  const applayFilters = () => {

    let updatedProducts = products;

    if(showSearch && search ) {
      updatedProducts = updatedProducts.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      updatedProducts = updatedProducts.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      updatedProducts = updatedProducts.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(updatedProducts);
  }

  const sortProducts = (e) => {
    const value = e.target.value;

    let sortedProducts = [...filterProducts];

    if (value === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }else {
      sortedProducts = [...products];
    }

    setFilterProducts(sortedProducts);
  }


  useEffect(() => {
    applayFilters();
    console.log(products);
    
  }, [category, subCategory, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-1 pt-10">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilters(!showFilters)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt="filter icon"
            className={`h-3 sm:hidden ${showFilters ? "rotate-90" : ""}`}
          />
        </p>

        {/*category filter// */}

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="category"
                id="men"
                className="w-3 "
                value={"Men"}
                onChange={togleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="category"
                id="women"
                className="w-3 "
                value={"Women"}
                onChange={togleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="category"
                id="kids"
                className="w-3 "
                value={"Kids"}
                onChange={togleCategory}
              />
              Kids
            </p>
          </div>
        </div>

        {/* sub category */}

        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-lighttext-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="category"
                id="topwear"
                className="w-3 "
                value={"Topwear"}
                onChange={togleSubCategory}

              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="category"
                id="bottomwear"
                className="w-3 "
                value={"Bottomwear"}
                onChange={togleSubCategory}

              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="category"
                id="winterwear"
                className="w-3 "
                value={"Winterwear"}
                onChange={togleSubCategory}

              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title title1={"ALL "} title2={"COLLECTIONS"} />

          {/* product sorting */}

          <select
            name=""
            id=""
            className="border-2 border-gray-300 text-sm px-2"
            onChange={sortProducts}
          >
            <option value="relevent">Relevent</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
        {/* products list// */ }
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">

          {
            filterProducts.map((item, index) => (
              <ProductItems key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }

        </div>
      </div>
    </div>
  );
}

export default Collection;

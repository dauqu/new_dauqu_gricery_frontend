import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "./Constant";

function Edit_Product() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });

  const { _id } = useParams();

  const [categories, setCategories] = useState([]);

  // code to get all the categories
  const getCategories = () => {
    axios
      .get(`${API}/api/categories`)
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  // code to get the product by id
  const getProduct = () => {
    axios
      .get(`${API}/api/product/${_id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);

  // code to update the product
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/api/product/update/${_id}`, {
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
      })
      .then((res) => {
        console.log(res.data);
        alert("Product updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <div className="w-[100vw] bg-[#ececec] min-h-[100vh] flex justify-center items-center py-12">
          <form onSubmit={handleUpdate}>
            <div className="p-12 bg-[white] border md:w-[500px]">
              <p className="text-[20px] font-bold text-[#171B1E]">
                Edit_Product
              </p>

              <div className="mt-5">
                <label className="block text-[16px] font-medium text-[#171B1E]">
                  Title
                </label>
                <input
                  type="text"
                  value={product.title}
                  onChange={(e) =>
                    setProduct({ ...product, title: e.target.value })
                  }
                  className="border w-full h-[45px] outline-none px-3 placeholder:text-[16px] text-[#717579] rounded-md"
                />
              </div>
              <div className="mt-5">
                <label className="block text-[16px] font-medium text-[#171B1E]">
                  Description
                </label>
                <input
                  type="text"
                  value={product.description}
                  onChange={(e) =>
                    setProduct({ ...product, description: e.target.value })
                  }
                  className="border w-full h-[45px] outline-none px-3 placeholder:text-[16px] text-[#717579] rounded-md"
                />
              </div>

              {/* <div className="mt-5">
                <label className="block text-[16px] font-medium text-[#171B1E]">
                  Select Category
                </label>
                <select
                  id="cars"
                  name={categories}
                  onChange={(e) => setCategories(e.target.value)}
                  className="border w-full h-[45px] outline-none px-3 placeholder:text-[16px] text-[#717579] rounded-md"
                >
                  {
                    // code to map category from database
                    categories.map((item) => {
                      return (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      );
                    })
                  }
                </select>
              </div> */}
              <div className="mt-5">
                <label className="block text-[16px] font-medium text-[#171B1E]">
                  Price
                </label>
                <input
                  type="text"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                  className="border w-full h-[45px] outline-none px-3 placeholder:text-[16px] text-[#717579] rounded-md"
                />
              </div>

              <div className="mt-5 w-full flex items-center justify-end">
                <button
                  className="w-[100px] text-center h-[40px] bg-[#00A15D] text-[16px] text-white rounded-full cursor-pointer"
                  onSubmit={(e) => handleUpdate(e)}
                >
                  Update
                </button>
                <Link to="/product">
                  <button className="w-[100px] text-center h-[40px] hover:bg-[#00A15D] hover:text-white text-[#171B1E] text-[16px]  rounded-full border ml-2 cursor-pointer">
                    Close
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit_Product;

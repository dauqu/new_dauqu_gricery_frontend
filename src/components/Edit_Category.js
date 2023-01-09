import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "./Constant";

function Edit_Category() {
  const [category, setCategory] = useState({
    name: "",
    description: "",
  });

  // code to get the category by id
  const { _id } = useParams();

  const getCategory = () => {
    axios
      .get(`${API}/api/categories/${_id}`)
      .then((res) => {
        console.log(res.data);
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect((res) => {
    getCategory();
  }, []);

  //   code to update the category
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .patch(`${API}/api/categories/${_id}`, {
        name: category.name,
        description: category.description,
      })
      .then((res) => {
        console.log(res.data);
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
                Add category
              </p>

              <div className="mt-5">
                <label className="block text-[16px] font-medium text-[#171B1E]">
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setCategory({ ...category, name: e.target.value })
                  }
                  className="border w-full h-[45px] outline-none px-3 placeholder:text-[16px] text-[#717579] rounded-md"
                  value={category.name}
                />
              </div>
              <div className="mt-5">
                <label className="block text-[16px] font-medium text-[#171B1E]">
                  Description
                </label>
                <input
                  type="text"
                  name={category.description}
                  onChange={(e) =>
                    setCategory({ ...category, description: e.target.value })
                  }
                  className="border w-full h-[45px] outline-none px-3 placeholder:text-[16px] text-[#717579] rounded-md"
                  value={category.description}
                />
              </div>

              <div className="mt-5 w-full flex items-center justify-end">
                <button
                  className="w-[100px] text-center h-[40px] bg-[#00A15D] text-[16px] text-white rounded-full cursor-pointer"
                  onSubmit={(e) => handleUpdate(e)}
                >
                  Update
                </button>
                <Link to="/category">
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

export default Edit_Category;

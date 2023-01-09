import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "./Constant";
import "./header.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Add_product() {
  const [categoryId, setCategoryId] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [successToastify, setSuccessToastify] = useState(false); //success toastify
  const [errorToastify, setErrorToastify] = useState(false); // error toastify
  const notify = () => {
    toast.success("Product Added", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const errNotify = () => {
    toast.error("Error in Posting!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  // code to get category from database

  const getCategory = () => {
    axios
      .get(`${API}/api/categories`)
      .then((res) => {
        console.log(res.data);
        setCategoryId(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCategory();
  }, []);

  // code to post product to database with image upload

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);

    axios
      .post(`${API}/api/product`, formData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          notify();
          setSuccessToastify(true);
        }
        setTimeout(() => {
          window.location.reload();
        }, [3000]);
      })
      .catch((err) => {
        errNotify();
        setErrorToastify(true);
        console.log(err);
      });
  };

  return (
    <div>
      <div className="w-[100vw] bg-[#ECECEC] min-h-[100vh] flex justify-center items-center py-12">
        <form
          method="post"
          onSubmit={(e) => handleUpload(e)}
          encType="multipart/form-data"
        >
          <div className="p-12 bg-white border md:w-[500px]">
            <p className="text-[20px] font-bold text-[#171B1E]">Add Product</p>
            <div className="mt-5">
              <label className="block text-[16px] font-normal text-[#232323]">
                Product Name
              </label>
              <input
                type="text"
                name={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border w-full h-[45px] outline-none px-3 placeholder:text-[16px] text-[#717579] rounded-md"
                placeholder="Enter Product name"
              />
            </div>

            <div className="mt-5">
              <label className="block text-[16px] font-medium text-[#171B1E]">
                Select Category
              </label>
              <select
                id="cars"
                name={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border w-full h-[45px] outline-none px-3 placeholder:text-[16px] text-[#717579] rounded-md"
              >
                {
                  // code to map category from database
                  categoryId.map((item) => {
                    return (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    );
                  })
                }
              </select>
            </div>

            <div className="mt-5">
              <label className="block text-[16px] font-normal text-[#232323]">
                Product Price
              </label>
              <input
                type="text"
                name={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border w-full h-[45px] outline-none px-3 placeholder:text-[16px] text-[#717579] rounded-md"
                placeholder="Enter Price"
              />
            </div>
            <div className="mt-5">
              <label className="block text-[16px] font-normal text-[#232323]">
                Description
              </label>
              <textarea
                name={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border w-full outline-none p-3 placeholder:text-[16px] text-[#717579] rounded-md"
                placeholder="about"
                rows={2}
                cols={30}
              ></textarea>
              <div className="mt-5">
                <input
                  type="file"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="border w-full h-[45px] outline-none p-[6px] placeholder:text-[16px] text-[#717579] rounded-md  "
                />
              </div>
            </div>
            <div className="mt-5 w-full flex items-center justify-end">
              <button className="w-[100px] text-center h-[40px] bg-[#00A15D] text-[16px] text-white rounded-full cursor-pointer">
                Add Product
              </button>
              <Link to="/product">
                <button className="w-[100px] ml-4 text-center h-[40px] bg-[#00A15D] text-[16px] text-white rounded-full cursor-pointer">
                  Close
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
      {successToastify ? (
        <>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>
      ) : null}
      {errorToastify ? (
        <>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>
      ) : null}
    </div>
  );
}
export default Add_product;

import { Link } from "react-router-dom";
import "./header.css";

import { AiOutlineMenu } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
// import React from 'react';
import Images_order from "./Images_order";
import "./Images.css";
import axios from "axios";
import { API } from "./Constant";
// code to get all orders from database-------------------
function Order_detail(props) {
  const [status, setStatus] = useState("");
  const [userdata, setUserdata] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modal_Order, setModal_Order] = useState([]);

  // code to show modal -------------------
  const normal = (props) => {
    axios
      .get(`${API}/api/orders/${props}`)
      .then((res) => {
        console.log(res.data);
        setUserdata(res.data);
      })
      .catch((res) => {
        console.log(res);
      });

    setShowModal({ showModal: true, id: props, type: "normal" });
  };

  // code to update order status-------------------
  const updateAction = (id) => {
    axios
      .put(
        `${API}/api/orders/updatestatus/${id}`,
        {
          status: status,
        }
      )
      .then((res) => {
        console.log(res);
        setShowModal(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // code to get user profile data-------------------
  const [profiledata, setProfiledata] = useState([]);
  const getuserprofiledata = () => {
    axios
      .get(`${API}/api/profile`, {
        weithCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        setProfiledata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getuserprofiledata();
  }, []);

  // code to display all orders-------------------
  const [order, setOrder] = useState([]);
  const [address, setAddress] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/api/orders/all`)
      .then((res) => {
        console.log(res.data.all);
        setOrder(res.data.all);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  // code to get all address from database and display it------------
  useEffect(() => {
    axios
      .get(`${API}/api/address`)
      .then((res) => {
        console.log(res.data);
        setAddress(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div>
      <div>
        <div className="w-full min-h-[100vh]">
          <div className="flex">
            <div className="w-[300px] grow-0 shrink-0 sidebar">
              <div className="h-[80px] w-full"></div>
              <div className="p-6">
                <p className="text-[#D7D7D7] text-[13px]">Main Menu</p>
                <ul>
                  <li
                    className="my-3 cursor-pointer"
                    onMouseOver={() => {
                      document.getElementsByClassName(
                        "dashboard_div"
                      )[0].style.background = "#dceee6";
                      document.getElementsByClassName(
                        "dashboard_icon"
                      )[0].style.color = "#00a15d";
                      document.getElementsByClassName(
                        "dashboard_text"
                      )[0].style.color = "#00a15d";
                    }}
                    onMouseOut={() => {
                      document.getElementsByClassName(
                        "dashboard_div"
                      )[0].style.background = "#fff";
                      document.getElementsByClassName(
                        "dashboard_icon"
                      )[0].style.color = "#717579";
                      document.getElementsByClassName(
                        "dashboard_text"
                      )[0].style.color = "#717579";
                    }}
                  >
                    <Link to="/dashboard">
                      <div className="flex items-center h-[40px] rounded-full bg-white px-3 dashboard_div">
                        <BsFillHouseDoorFill className="text-[20px] text-[#717579] mr-2 relative top-[-2px] dashboard_icon" />
                        <p className="text-[#717579] text-[14px] font-semibold dashboard_text">
                          Dashboard
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className="my-3 cursor-pointer">
                    <Link to="/order-detail">
                      <div className="flex items-center h-[40px] rounded-full bg-[#DCEEE6] text-[] px-3 order_div">
                        <BsFillLightningFill className="text-[20px] text-[#00A15D] mr-2 relative top-[-2px] order_icon" />
                        <p className="text-[#00A15D] text-[14px] font-semibold order_text">
                          Order
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li
                    className="my-3 cursor-pointer"
                    onMouseOver={() => {
                      document.getElementsByClassName(
                        "user_div"
                      )[0].style.background = "#dceee6";
                      document.getElementsByClassName(
                        "user_icon"
                      )[0].style.color = "#00a15d";
                      document.getElementsByClassName(
                        "user_text"
                      )[0].style.color = "#00a15d";
                    }}
                    onMouseOut={() => {
                      document.getElementsByClassName(
                        "user_div"
                      )[0].style.background = "#fff";
                      document.getElementsByClassName(
                        "user_icon"
                      )[0].style.color = "#717579";
                      document.getElementsByClassName(
                        "user_text"
                      )[0].style.color = "#717579";
                    }}
                  >
                    <Link to="/user-detail">
                      <div className="flex items-center h-[40px] rounded-full bg-white text-[] px-3 user_div">
                        <FaUserAlt className="text-[20px] text-[#717579] mr-2 relative top-[-2px]  user_icon" />
                        <p className="text-[#717579] text-[14px] font-semibold user_text">
                          User Detail
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className="my-3 cursor-pointer add h-[40px] overflow-hidden">
                    <div
                      className="flex items-center justify-between h-[40px] rounded-full bg-white text-[] px-3 add_div"
                      onMouseOver={() => {
                        document.getElementsByClassName(
                          "add_div"
                        )[0].style.background = "#dceee6";
                        document.getElementsByClassName(
                          "add_icon"
                        )[0].style.color = "#00a15d";
                        document.getElementsByClassName(
                          "add_text"
                        )[0].style.color = "#00a15d";
                      }}
                      onMouseOut={() => {
                        document.getElementsByClassName(
                          "add_div"
                        )[0].style.background = "#fff";
                        document.getElementsByClassName(
                          "add_icon"
                        )[0].style.color = "#717579";
                        document.getElementsByClassName(
                          "add_text"
                        )[0].style.color = "#717579";
                      }}
                      onClick={() => {
                        document.getElementsByClassName(
                          "add_div"
                        )[0].style.background = "#dceee6";
                        document.getElementsByClassName(
                          "add_icon"
                        )[0].style.color = "#00a15d";
                        document.getElementsByClassName(
                          "add_text"
                        )[0].style.color = "#00a15d";
                        document.getElementsByClassName("add")[0].style.height =
                          "100%";
                      }}
                    >
                      <div className="flex items-center">
                        <BsFillHouseDoorFill className="text-[20px] text-[#717579] mr-2 relative top-[-2px] add_icon" />
                        <p className="text-[#717579] text-[14px] font-semibold add_text">
                          Add
                        </p>
                      </div>
                      <AiOutlineDown className="text-[15px] text-[#717579]" />
                    </div>
                    <ul className="">
                      <li className="text-[#717579] text-[14px] font-semibold ml-7 px-3 my-3 cursor-pointer hover:bg-[#dceee6] hover:text-[#00a15d] rounded-full h-[40px] leading-[40px] add_category_div">
                        <Link to="/category">Add Category</Link>
                      </li>
                      <li
                        className="text-[#717579] text-[14px] font-semibold ml-7 leading-[40px] px-3 cursor-pointer hover:bg-[#dceee6] hover:text-[#00a15d] rounded-full h-[40px] add_product_div"
                        onMouseOver={() => {
                          document.getElementsByClassName(
                            "add_product_div"
                          )[0].style.background = "#dceee6";
                          document.getElementsByClassName(
                            "add_product_div"
                          )[0].style.color = "#00a15d";
                        }}
                        onMouseOut={() => {
                          document.getElementsByClassName(
                            "add_product_div"
                          )[0].style.background = "#fff";
                          document.getElementsByClassName(
                            "add_product_div"
                          )[0].style.color = "#717579";
                        }}
                      >
                        <Link to="/product">Add Product</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grow shrink">
              <div className="order_detail">
                <div className="h-[80px] flex items-center justify-between px-5">
                  <div className="flex items-center">
                    <AiOutlineMenu
                      className="text-[24px] text-[#717579] mr-5 cursor-pointer"
                      onClick={() => {
                        if (
                          document.getElementsByClassName("sidebar")[0].style
                            .display == "none"
                        ) {
                          document.getElementsByClassName(
                            "sidebar"
                          )[0].style.display = "block";
                        } else {
                          document.getElementsByClassName(
                            "sidebar"
                          )[0].style.display = "none";
                        }
                      }}
                    />
                    <p className="text-[#171B1E] text-[24px] font-bold">
                      Order Detail
                    </p>
                  </div>
                  <div className="flex items-center h-[32px] mr-5">
                    <div className="h-[32px] w-[32px] rounded-full bg-[#C4C4C4]"></div>
                    <div className="flex flex-col justify-center h-[32px] mx-1">
                      <p className="text-[#171B1E] text-[14px] font-semibold">
                        {profiledata.full_name}
                      </p>
                      <p className="text-[#171B1E] text-[12px]">
                        {profiledata.email}
                      </p>
                    </div>
                    <AiFillCaretDown className="text-[12px] text-[#00A15D] ml-3" />
                  </div>
                </div>
                <div className="px-10 flex justify-between">
                  <div className="flex h-[36px] rounded-full bg-[#eee] pl-4 pr-3 items-center lg:w-[400px]">
                    <input
                      type="text"
                      className="w-full outline-none bg-[#eee] placeholder:text-[13px] placeholder:font-medium"
                      placeholder="Search Here.."
                    />
                    <BiSearch className="text-[22px] text-[#717579]" />
                  </div>
                  <div className="bg-[#00a15d] text-white h-[30px] rounded-full px-3 leading-[30px] text-[13px]">
                    + New Lead
                  </div>
                </div>
                <div className="flex justify-end px-10">
                  <div className="">
                    <p className="text-[#717579] text-[14px] font-semibold">
                      Download in to file
                    </p>
                    <div className="bg-[#00A15D] px-2 text-white/90 h-[36px] flex items-center rounded-md text-[14px]">
                      <p className="mx-1 cursor-pointer">COPY</p>
                      <div className="bg-white/50 h-[18px] w-[1px] mx-1 "></div>
                      <p className="mx-1 cursor-pointer">EXCEL</p>
                      <div className="bg-white/50 h-[18px] w-[1px] mx-1 "></div>
                      <p className="mx-1 cursor-pointer">PDF</p>
                      <div className="bg-white/50 h-[18px] w-[1px] mx-1 "></div>
                      <p className="mx-1 cursor-pointer">COLOM VISIBILITY</p>
                    </div>
                  </div>
                </div>
                <div className="px-10 w-full">
                  {/* <Images_order data={order} /> */}
                  <div className="images">
                    <table className="w-full">
                      <thead className="w-full">
                        <tr className="text-[#171B1E] w-full">
                          <th className="p-3  text-[16px] font-senibold border-b">
                            ID {address.city}
                          </th>
                          <th className="p-3  text-[16px] font-senibold border-b">
                            ADDRESS
                          </th>
                          <th className="p-3  text-[16px] font-senibold border-b">
                            CREATED AT
                          </th>
                          <th className="p-3  text-[16px] font-senibold border-b">
                            AMOUNT
                          </th>

                          <th className="p-3  text-[16px] font-senibold border-b">
                            ACTION
                          </th>
                        </tr>
                      </thead>
                      <tbody className="overflow-y-scroll h-[400px]">
                        {order.map((val, key) => {
                          return (
                            <tr
                              key={key}
                              className="text-left cursor-pointer text-[#272727] text-[14px] h-[45px] hover:bg-[#f2f2f2] "
                              onClick={() => normal(val._id)}
                            >
                              <td className="px-4    py-2 border text-[#008eff]">
                                {val._id}
                              </td>
                              <td className="px-4 py-2 border">
                                {val.address_id}
                              </td>
                              <td className="px-4 py-2 border">
                                {val.createdAt}
                              </td>
                              <td className="px-4 py-2 border">{val.amount}</td>
                              {val.status == "delivered" ? (
                                <td className="p-[2px]  flex items-center justify-center text-center border">
                                  <div className=" w-[100px] text-[14px] font-semibold text-center items-center justify-center  px-3 my-3 cursor-pointer  bg-[#dceee6]  text-[#00a15d] rounded-full h-[40px] flex  ">
                                    Delivered
                                  </div>
                                </td>
                              ) : (
                                <td className="p-[2px]  flex items-center justify-center text-center border">
                                  <div className=" w-[100px] text-[14px] font-semibold text-center items-center justify-center  px-3 my-3 cursor-pointer  bg-[#fd756e]  text-[#fdfdfd] rounded-full h-[40px] flex  ">
                                    Pending
                                  </div>
                                </td>
                              )}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {showModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-3xl font-semibold">Action</h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                              <p className="p-4 text-center items-center ">
                                {userdata.createdAt}
                              </p>
                              <p className="p-8">
                                You can Update the status of the order from here{" "}
                                {userdata.status}.
                              </p>
                              <div className="flex justify-between items-center">
                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                  Update Action
                                </p>
                                <select
                                  onChange={(e) => setStatus(e.target.value)}
                                  id="cars"
                                  className="text-slate-500 bg-[#f4f4f4] p-2"
                                >
                                  <option>Select Value</option>
                                  <option value="delivered">Delivered</option>
                                  <option value="pending">Pending</option>
                                </select>
                              </div>
                              <div>
                                <div className="border p-2 mt-4">
                                  {/* code to fetch products data  */}
                                  <div className="flex justify-around  items-center">
                                    <p className="m-2 text-slate-500 text-lg leading-relaxed">
                                      Product Name
                                    </p>
                                    <p className="m-2 text-slate-500 text-lg leading-relaxed">
                                      Quantity
                                    </p>
                                    <p className="m-2 text-slate-500 text-lg leading-relaxed">
                                      Price
                                    </p>
                                  </div>
                                  <hr />
                                  {/* {userdata.products.map((val, key) => {
                                    return (
                                      <>
                                        <div className="flex justify-around  items-center">
                                          <p className="m-2 text-slate-500 text-lg leading-relaxed">
                                            {val.title}
                                          </p>
                                          <p className="m-2 text-slate-500 text-lg leading-relaxed">
                                            {val.quantity}
                                          </p>

                                          <p className="m-2 text-slate-500 text-lg leading-relaxed">
                                            {val.price}
                                          </p>
                                        </div>
                                      </>
                                    );
                                  })} */}
                                </div>
                              </div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                Close
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => updateAction(userdata._id)}
                              >
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Order_detail;

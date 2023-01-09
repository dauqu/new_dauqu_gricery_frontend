import { Link } from "react-router-dom";
import "./header.css";

import { AiOutlineMenu } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import "./Images.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "./Constant";

function Dashboard(props) {
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

  return (
    <div>
      <div className="w-full min-h-[100vh]">
        <div className="flex">
          <div className="w-[300px] grow-0 shrink-0 sidebar">
            <div className="h-[80px] w-full"></div>
            <div className="p-6">
              <p className="text-[#D7D7D7] text-[13px]">Main Menu</p>
              <ul>
                <li className="my-3 cursor-pointer">
                  <Link to="/dashboard">
                    <div className="flex items-center h-[40px] rounded-full bg-[#DCEEE6] px-3 dashboard_div">
                      <BsFillHouseDoorFill className="text-[20px] text-[#00A15D] mr-2 relative top-[-2px] dashboard_icon" />
                      <p className="text-[#00A15D] text-[14px] font-semibold dashboard_text">
                        Dashboard
                      </p>
                    </div>
                  </Link>
                </li>
                <li
                  className="my-3 cursor-pointer"
                  onMouseOver={() => {
                    document.getElementsByClassName(
                      "order_div"
                    )[0].style.background = "#dceee6";
                    document.getElementsByClassName(
                      "order_icon"
                    )[0].style.color = "#00a15d";
                    document.getElementsByClassName(
                      "order_text"
                    )[0].style.color = "#00a15d";
                  }}
                  onMouseOut={() => {
                    document.getElementsByClassName(
                      "order_div"
                    )[0].style.background = "#fff";
                    document.getElementsByClassName(
                      "order_icon"
                    )[0].style.color = "#717579";
                    document.getElementsByClassName(
                      "order_text"
                    )[0].style.color = "#717579";
                  }}
                >
                  {profiledata.role === "admin" ? (
                    <Link to="/order-detail">
                      <div className="flex items-center h-[40px] rounded-full bg-white text-[] px-3 order_div">
                        <BsFillLightningFill className="text-[20px] text-[#717579] mr-2 relative top-[-2px] order_icon" />
                        <p className="text-[#717579] text-[14px] font-semibold order_text">
                          Order
                        </p>
                      </div>
                    </Link>
                  ) : null}
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
                  {profiledata.role === "admin" ? (
                    <Link to="/user-detail">
                      <div className="flex items-center h-[40px] rounded-full bg-white text-[] px-3 user_div">
                        <FaUserAlt className="text-[20px] text-[#717579] mr-2 relative top-[-2px]  user_icon" />
                        <p className="text-[#717579] text-[14px] font-semibold user_text">
                          User Detail
                        </p>
                      </div>
                    </Link>
                  ) : null}
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
                    <Link to="/category">
                      <li className="text-[#717579] text-[14px] font-semibold ml-7 px-3 my-3 cursor-pointer hover:bg-[#dceee6] hover:text-[#00a15d] rounded-full h-[40px] leading-[40px] add_category_div">
                        Add category
                      </li>
                    </Link>
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
            <div className="analytics">
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
                    Analytics
                  </p>
                </div>
                <div className="flex items-center h-[32px] mr-5">
                  <div className="h-[32px] w-[32px] rounded-full bg-[#C4C4C4]"></div>
                  <div className="flex flex-col justify-center h-[32px] mx-1">
                    <p className="text-[#171B1E] text-[14px] font-semibold">
                      {profiledata.full_name} <span>({profiledata.role})</span>
                    </p>
                    <p className="text-[#171B1E] text-[12px]">
                      {profiledata.email}
                    </p>
                  </div>
                  <AiFillCaretDown className="text-[12px] text-[#00A15D] ml-3" />
                </div>
              </div>
              <div className="flex px-5">
                <div className="grow shrink">
                  <div>
                    <p className="text-[#00A15D] text-[14px] font-semibold">
                      Client
                    </p>
                    <div className="flex py-6">
                      <div className="w-[200px] p-4 border rounded-lg ">
                        <p className="text-[#171B1E] text-[14px] font-medium">
                          Total Order
                        </p>
                        <p className="text-[#171B1E] text-[16px] font-bold">
                          62
                        </p>
                      </div>
                      <div className="w-[200px] p-4 border rounded-lg mx-6">
                        <p className="text-[#171B1E] text-[14px] font-medium">
                          Total User
                        </p>
                        <p className="text-[#171B1E] text-[16px] font-bold">
                          102
                        </p>
                      </div>
                      <div className="w-[200px] p-4 border rounded-lg ">
                        <p className="text-[#171B1E] text-[14px] font-medium">
                          Order Amount
                        </p>
                        <p className="text-[#171B1E] text-[16px] font-bold">
                          5222rupe
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow-0 shrink-0 w-[250px]"></div>
              </div>
              <div className="flex px-5">
                <div className="grow shrink">
                  <div>
                    <p className="text-[#00A15D] text-[14px] font-semibold">
                      Manage
                    </p>
                    <div className="flex py-6">
                      <div className="w-[200px] p-4 border rounded-lg ">
                        <p className="text-[#171B1E] text-[14px] font-medium">
                          Added Category
                        </p>
                        <p className="text-[#171B1E] text-[16px] font-bold">
                          8
                        </p>
                      </div>
                      <div className="w-[200px] p-4 border rounded-lg mx-6">
                        <p className="text-[#171B1E] text-[14px] font-medium">
                          Added Product
                        </p>
                        <p className="text-[#171B1E] text-[16px] font-bold">
                          52
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow-0 shrink-0 w-[250px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

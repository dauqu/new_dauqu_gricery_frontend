import { Link } from "react-router-dom";
import "./header.css";

import { AiOutlineMenu } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import './Images.css';
 

function Dashboard(props) {

  //fake data api
  // const [result, setResult] = useState([]);
  // async function fetchUsers() {
  //   const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  //   setResult(response.data);
  //   console.log(response.data);
  // }
  // useEffect(() => {
  //   fetchUsers();
  // }, []);


  const [images, setImages] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
      response => response.json().then(data => {
        setImages(data);
      })
    )
  },[])
 
  return (
    <div>
      <div className="w-full min-h-[100vh]">
        <div className="flex">
          <div className="w-[300px] grow-0 shrink-0 sidebar">
            <div className="h-[80px] w-full"></div>
            <div className="p-6">
              <p className="text-[#D7D7D7] text-[13px]">Main Menu</p>
              <ul>
                <li className="my-3 cursor-pointer" onMouseOver={() => {
                    document.getElementsByClassName("dashboard_div")[0].style.background = "#dceee6";
                    document.getElementsByClassName("dashboard_icon")[0].style.color = "#00a15d";
                    document.getElementsByClassName("dashboard_text")[0].style.color = "#00a15d";
                }}
                  onMouseOut={() => {
                    document.getElementsByClassName("dashboard_div")[0].style.background = "#fff";
                    document.getElementsByClassName("dashboard_icon")[0].style.color = "#717579";
                    document.getElementsByClassName("dashboard_text")[0].style.color = "#717579";
                  }}
                  onClick={() => {
                    document.getElementsByClassName("dashboard_div")[0].style.background = "#dceee6";
                    document.getElementsByClassName("dashboard_icon")[0].style.color = "#00a15d";
                    document.getElementsByClassName("dashboard_text")[0].style.color = "#00a15d";
                    document.getElementsByClassName("analytics")[0].style.display = "block";

                    document.getElementsByClassName("order_div")[0].style.background = "#fff";
                    document.getElementsByClassName("order_icon")[0].style.color = "#717579";
                    document.getElementsByClassName("order_text")[0].style.color = "#717579";
                    document.getElementsByClassName("order_detail")[0].style.display = "none";

                    document.getElementsByClassName("user_div")[0].style.background = "#fff";
                    document.getElementsByClassName("user_icon")[0].style.color = "#717579";
                    document.getElementsByClassName("user_text")[0].style.color = "#717579";
                    document.getElementsByClassName("user_detail")[0].style.display = "none";

                    document.getElementsByClassName("add_div")[0].style.background = "#fff";
                    document.getElementsByClassName("add_icon")[0].style.color = "#717579";
                    document.getElementsByClassName("add_text")[0].style.color = "#717579";
                    document.getElementsByClassName("add")[0].style.height = "40px";

                    document.getElementsByClassName("add_product_div")[0].style.background = "#fff";
                    document.getElementsByClassName("add_product_div")[0].style.color = "#717579";
                    document.getElementsByClassName("add_product")[0].style.display = "none";

                    document.getElementsByClassName("add_category_div")[0].style.background = "#fff";
                    document.getElementsByClassName("add_category_div")[0].style.color = "#717579";
                    document.getElementsByClassName("add_category")[0].style.display = "none";
                  }}
                >
                  <div className="flex items-center h-[40px] rounded-full bg-[#DCEEE6] px-3 dashboard_div">
                    <BsFillHouseDoorFill className="text-[20px] text-[#00A15D] mr-2 relative top-[-2px] dashboard_icon" />
                    <p className="text-[#00A15D] text-[14px] font-semibold dashboard_text">
                      Dashboard
                    </p>
                  </div>
                </li>
                <li className="my-3 cursor-pointer" 
                  onMouseOver={() => {
                    document.getElementsByClassName("order_div")[0].style.background = "#dceee6";
                    document.getElementsByClassName("order_icon")[0].style.color = "#00a15d";
                    document.getElementsByClassName("order_text")[0].style.color = "#00a15d";
                  }}
                  onMouseOut={() => {
                    document.getElementsByClassName("order_div")[0].style.background = "#fff";
                    document.getElementsByClassName("order_icon")[0].style.color = "#717579";
                    document.getElementsByClassName("order_text")[0].style.color = "#717579";
                  }}
                  onClick={() => {
                    document.getElementsByClassName("order_div")[0].style.background = "#dceee6";
                    document.getElementsByClassName("order_icon")[0].style.color = "#00a15d";
                    document.getElementsByClassName("order_text")[0].style.color = "#00a15d";
                    document.getElementsByClassName("order_detail")[0].style.display = "block";

                    document.getElementsByClassName("dashboard_div")[0].style.background = "#fff";
                    document.getElementsByClassName("dashboard_icon")[0].style.color = "#717579";
                    document.getElementsByClassName("dashboard_text")[0].style.color = "#717579";
                    document.getElementsByClassName("analytics")[0].style.display = "none";

                    document.getElementsByClassName("user_div")[0].style.background = "#fff";
                    document.getElementsByClassName("user_icon")[0].style.color = "#717579";
                    document.getElementsByClassName("user_text")[0].style.color = "#717579";
                    document.getElementsByClassName("user_detail")[0].style.display = "none";

                    document.getElementsByClassName("add_div")[0].style.background = "#fff";
                    document.getElementsByClassName("add_icon")[0].style.color = "#717579";
                    document.getElementsByClassName("add_text")[0].style.color = "#717579";
                    document.getElementsByClassName("add")[0].style.height = "40px";

                    document.getElementsByClassName("add_product_div")[0].style.background = "#fff";
                    document.getElementsByClassName("add_product_div")[0].style.color = "#717579";
                    document.getElementsByClassName("add_product")[0].style.display = "none";

                    document.getElementsByClassName("add_category_div")[0].style.background = "#fff";
                    document.getElementsByClassName("add_category_div")[0].style.color = "#717579";
                    document.getElementsByClassName("add_category")[0].style.display = "none";
                  }}
                >
                  <div className="flex items-center h-[40px] rounded-full bg-white text-[] px-3 order_div">
                    <BsFillLightningFill className="text-[20px] text-[#717579] mr-2 relative top-[-2px] order_icon" />
                    <p className="text-[#717579] text-[14px] font-semibold order_text">
                      Order
                    </p>
                  </div>
                </li>
                <li className="my-3 cursor-pointer"
                  onMouseOver={() => {
                    document.getElementsByClassName("user_div")[0].style.background = "#dceee6";
                    document.getElementsByClassName("user_icon")[0].style.color = "#00a15d";
                    document.getElementsByClassName("user_text")[0].style.color = "#00a15d";
                  }}
                  onMouseOut={() => {
                    document.getElementsByClassName("user_div")[0].style.background = "#fff";
                    document.getElementsByClassName("user_icon")[0].style.color = "#717579";
                    document.getElementsByClassName("user_text")[0].style.color = "#717579";
                  }}
                  onClick={() => {
                    document.getElementsByClassName("user_div")[0].style.background = "#dceee6";
                    document.getElementsByClassName("user_icon")[0].style.color = "#00a15d";
                    document.getElementsByClassName("user_text")[0].style.color = "#00a15d";
                    document.getElementsByClassName("user_detail")[0].style.display = "block";

                    document.getElementsByClassName("dashboard_div")[0].style.background = "#fff";
                    document.getElementsByClassName("dashboard_icon")[0].style.color = "#717579";
                    document.getElementsByClassName("dashboard_text")[0].style.color = "#717579";
                    document.getElementsByClassName("analytics")[0].style.display = "none";

                    document.getElementsByClassName("order_div")[0].style.background = "#fff";
                    document.getElementsByClassName("order_icon")[0].style.color = "#717579";
                    document.getElementsByClassName("order_text")[0].style.color = "#717579";
                    document.getElementsByClassName("order_detail")[0].style.display = "none";

                    document.getElementsByClassName("add_div")[0].style.background = "#fff";
                    document.getElementsByClassName("add_icon")[0].style.color = "#717579";
                    document.getElementsByClassName("add_text")[0].style.color = "#717579";
                    document.getElementsByClassName("add")[0].style.height = "40px";

                    document.getElementsByClassName("add_product_div")[0].style.background = "#fff";
                    document.getElementsByClassName("add_product_div")[0].style.color = "#717579";
                    document.getElementsByClassName("add_product")[0].style.display = "none";

                    document.getElementsByClassName("add_category_div")[0].style.background = "#fff";
                    document.getElementsByClassName("add_category_div")[0].style.color = "#717579";
                    document.getElementsByClassName("add_category")[0].style.display = "none";
                  }}
                >
                  <div className="flex items-center h-[40px] rounded-full bg-white text-[] px-3 user_div">
                    <FaUserAlt className="text-[20px] text-[#717579] mr-2 relative top-[-2px]  user_icon" />
                    <p className="text-[#717579] text-[14px] font-semibold user_text">
                      User Detail
                    </p>
                  </div>
                </li>
                <li className="my-3 cursor-pointer add h-[40px] overflow-hidden">
                  <div className="flex items-center justify-between h-[40px] rounded-full bg-white text-[] px-3 add_div"
                    onMouseOver={() => {
                      document.getElementsByClassName("add_div")[0].style.background = "#dceee6";
                      document.getElementsByClassName("add_icon")[0].style.color = "#00a15d";
                      document.getElementsByClassName("add_text")[0].style.color = "#00a15d";
                    }}
                    onMouseOut={() => {
                      document.getElementsByClassName("add_div")[0].style.background = "#fff";
                      document.getElementsByClassName("add_icon")[0].style.color = "#717579";
                      document.getElementsByClassName("add_text")[0].style.color = "#717579";
                    }}
                    onClick={() => {
                      document.getElementsByClassName("add_div")[0].style.background = "#dceee6";
                      document.getElementsByClassName("add_icon")[0].style.color = "#00a15d";
                      document.getElementsByClassName("add_text")[0].style.color = "#00a15d";
                      document.getElementsByClassName("add")[0].style.height = "100%";
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
                    <li className="text-[#717579] text-[14px] font-semibold ml-7 px-3 my-3 cursor-pointer hover:bg-[#dceee6] hover:text-[#00a15d] rounded-full h-[40px] leading-[40px] add_category_div"
                      onMouseOver={() => {
                        document.getElementsByClassName("add_category_div")[0].style.background = "#dceee6";
                        document.getElementsByClassName("add_category_div")[0].style.color = "#00a15d";
                      }}
                      onMouseOut={() => {
                        document.getElementsByClassName("add_category_div")[0].style.background = "#fff";
                        document.getElementsByClassName("add_category_div")[0].style.color = "#717579";
                      }}
                      onClick={() => {
                        document.getElementsByClassName("add_category_div")[0].style.background = "#dceee6";
                        document.getElementsByClassName("add_category_div")[0].style.color = "#00a15d";
                        document.getElementsByClassName("add_category")[0].style.display = "block";

                        document.getElementsByClassName("dashboard_div")[0].style.background = "#fff";
                        document.getElementsByClassName("dashboard_text")[0].style.color = "#717579";
                        document.getElementsByClassName("analytics")[0].style.display = "none";

                        document.getElementsByClassName("order_div")[0].style.background = "#fff";
                        document.getElementsByClassName("order_icon")[0].style.color = "#717579";
                        document.getElementsByClassName("order_text")[0].style.color = "#717579";
                        document.getElementsByClassName("order_detail")[0].style.display = "none";

                        document.getElementsByClassName("user_div")[0].style.background = "#fff";
                        document.getElementsByClassName("user_icon")[0].style.color = "#717579";
                        document.getElementsByClassName("user_text")[0].style.color = "#717579";
                        document.getElementsByClassName("user_detail")[0].style.display = "none";

                        document.getElementsByClassName("add_product_div")[0].style.background = "#fff";
                        document.getElementsByClassName("add_product_div")[0].style.color = "#717579";
                        document.getElementsByClassName("add_product")[0].style.display = "none";
                      }}
                    >
                      Add Category
                    </li>
                    <li className="text-[#717579] text-[14px] font-semibold ml-7 leading-[40px] px-3 cursor-pointer hover:bg-[#dceee6] hover:text-[#00a15d] rounded-full h-[40px] add_product_div"
                      onMouseOver={() => {
                        document.getElementsByClassName("add_product_div")[0].style.background = "#dceee6";
                        document.getElementsByClassName("add_product_div")[0].style.color = "#00a15d";
                      }}
                      onMouseOut={() => {
                        document.getElementsByClassName("add_product_div")[0].style.background = "#fff";
                        document.getElementsByClassName("add_product_div")[0].style.color = "#717579";
                      }}
                      onClick={() => {
                        document.getElementsByClassName("add_product_div")[0].style.background = "#dceee6";
                        document.getElementsByClassName("add_product_div")[0].style.color = "#00a15d";
                        document.getElementsByClassName("add_product")[0].style.display = "block";

                        document.getElementsByClassName("dashboard_div")[0].style.background = "#fff";
                        document.getElementsByClassName("dashboard_icon")[0].style.color = "#717579";
                        document.getElementsByClassName("dashboard_text")[0].style.color = "#717579";
                        document.getElementsByClassName("analytics")[0].style.display = "none";

                        document.getElementsByClassName("order_div")[0].style.background = "#fff";
                        document.getElementsByClassName("order_icon")[0].style.color = "#717579";
                        document.getElementsByClassName("order_text")[0].style.color = "#717579";
                        document.getElementsByClassName("order_detail")[0].style.display = "none";

                        document.getElementsByClassName("user_div")[0].style.background = "#fff";
                        document.getElementsByClassName("user_icon")[0].style.color = "#717579";
                        document.getElementsByClassName("user_text")[0].style.color = "#717579";
                        document.getElementsByClassName("user_detail")[0].style.display = "none";

                        document.getElementsByClassName("add_category_div")[0].style.background = "#fff";
                        document.getElementsByClassName("add_category_div")[0].style.color = "#717579";
                        document.getElementsByClassName("add_category")[0].style.display = "none";
                      }}
                    >
                      Add Product
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
                      if (document.getElementsByClassName("sidebar")[0].style.display == "none") {
                        document.getElementsByClassName("sidebar")[0].style.display = "block";
                      } else {
                        document.getElementsByClassName("sidebar")[0].style.display = "none";
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
                      Admin
                    </p>
                    <p className="text-[#171B1E] text-[12px]">admin@mail.com</p>
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

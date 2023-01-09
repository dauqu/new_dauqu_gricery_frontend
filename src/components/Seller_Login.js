import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "./Constant";

function Seller_Login() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false); //for modal popup
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  // states for seller login

  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerPassword, setSellerPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(
        `${API}/api/login/sellerlogin`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        alert("Login Successful");
        navigate("/dashboard");
        // navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  //CHeck if user is logged in
  React.useEffect(() => {
    axios
      .get(`${API}/api/login/isLoggedIn`)
      .then((res) => {
        console.log(res);
        // window.location.href = "/dashboard";
      })
      .catch((err) => {
        alert("You are not logged in");
      });
  }, []);
  return (
    <div>
      <div className="w-[100vw] min-h-[100vh] flex items-center justify-center py-12">
        <div className="w-full max-w-[600px] p-12 border">
          <p className="text-[48px] font-medium text-[#060C43]">Seller_Login</p>
          <p className="text-[16px] text-[#626476] mt-1">
        
          </p>
          <form className="w-full" action="">
            <div className="mt-5">
              <label className="text-[12px] font-normal text-[#626476] relative top-[10px] left-[10px] p-2 bg-white">
                Email
              </label>
              <input
                type="text"
                name=""
                className="border w-full h-[50px] outline-none px-3 placeholder:
            text-[#060C43] placeholder:text-[14px] placeholder:font-medium"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[12px] font-normal text-[#626476] relative top-[10px] left-[10px] p-2 bg-white">
                Password
              </label>
              <div className="flex w-full h-[50px] border items-center px-3">
                <input
                  type={showPassword ? "password" : "text"}
                  name=""
                  className="w-full h-[48px] outline-none px-3 placeholder:text-[#060C43] placeholder:text-[14px] placeholder:font-medium"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <AiOutlineEye
                    className="text-[#060C43]"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="text-[#060C43]"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </div>

            <div className="mt-[70px] m-auto">
              {isLoading ? (
                <button
                  className="w-full h-[50px] bg-[#00a15ec5] text-white rounded-md text-[16px] font-medium"
                  disabled={isLoading}
                >
                  Loading...
                </button>
              ) : (
                <button
                  className="w-full h-[50px] bg-[#00A15D] text-white rounded-md text-[16px] font-medium"
                  onClick={(e) => {
                    setIsLoading(true);
                    handleLogin(e);
                  }}
                >
                  Login As Seller
                </button>
              )}
            </div>
            {/* <p className="text-[14px] leading-[30px] text-center font-medium text-[#060C43]">
              Don't have an account?&nbsp;
              <b className="font-medium text-[#00A15D]">Sign Up</b>
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Seller_Login;

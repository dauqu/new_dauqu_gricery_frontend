import { Link } from "react-router-dom";
import Dashboard_admin_header from "./Dashboard_admin_header";
import "./header.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import search from "./images/search.png";
import americanflag from "./images/american_flag.png";
import page_not_found_img from "./images/page_not_found_img.png";

export default function Page_Not_Found() {
  return (
    <div>
      <div>
        <Dashboard_admin_header/>
      </div>
      <div className="min-h-full min-w-full flex justify-center items-center">
        <div><img src={page_not_found_img}/></div>
      </div>
    </div>
  );
}

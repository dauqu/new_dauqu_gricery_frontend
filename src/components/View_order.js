import { Link } from "react-router-dom";
import "./header.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { AiOutlineDownload } from 'react-icons/ai';
import { TbCurrencyRupee } from 'react-icons/tb';

import banana from "./images/banana.png";
import vegies from "./images/vegies.png";
import package02 from "./images/package02.png";
import package03 from "./images/package03.png";
import polybag from "./images/polybag.png";
function View_order() {
  return (
    <div>
        <div className="w-full min-h-[100vh] flex justify-center items-center p-10">
            <div className="md:w-[500px] p-6 rounded-md shadow-md">
                <table className="w-full">
                    <tbody className="w-full">
                        <tr className="w-full my-2">
                            <td>
                                <img src={banana}/>
                            </td>
                            <td>
                                <div>
                                    <p className="text-[14px] text-[#1E222B] font-semibold">Banana</p>
                                    <p className="text-[14px] text-[#1E222B] flex items-center"><TbCurrencyRupee/>7.90</p>
                                </div>
                            </td>
                            <td>
                            <p className="text-[14px] text-[#1E222B] font-semibold">2</p>
                            </td>
                            <td>
                            <p className="text-[14px] text-[#1E222B] flex items-center"><TbCurrencyRupee/>7.90</p>
                            </td>
                        </tr>
                        <tr className="w-full my-2">
                            <td>
                                <img src={vegies}/>
                            </td>
                            <td>
                                <div>
                                    <p className="text-[14px] text-[#1E222B] font-semibold">Package01</p>
                                    <p className="text-[14px] text-[#1E222B] flex items-center"><TbCurrencyRupee/>7.90</p>
                                </div>
                            </td>
                            <td>
                            <p className="text-[14px] text-[#1E222B] font-semibold">2</p>
                            </td>
                            <td>
                            <p className="text-[14px] text-[#1E222B] flex items-center"><TbCurrencyRupee/>7.90</p>
                            </td>
                        </tr>
                        <tr className="w-full my-2">
                            <td>
                                <img src={package02}/>
                            </td>
                            <td>
                                <div>
                                    <p className="text-[14px] text-[#1E222B] font-semibold">package02</p>
                                    <p className="text-[14px] text-[#1E222B] flex items-center"><TbCurrencyRupee/>7.90</p>
                                </div>
                            </td>
                            <td>
                            <p className="text-[14px] text-[#1E222B] font-semibold">2</p>
                            </td>
                            <td>
                            <p className="text-[14px] text-[#1E222B] flex items-center"><TbCurrencyRupee/>7.90</p>
                            </td>
                        </tr>
                        <tr className="w-full my-2">
                            <td>
                                <img src={polybag}/>
                            </td>
                            <td>
                                <div>
                                    <p className="text-[14px] text-[#1E222B] font-semibold">Banana</p>
                                    <p className="text-[14px] text-[#1E222B] flex items-center"><TbCurrencyRupee/>7.90</p>
                                </div>
                            </td>
                            <td>
                            <p className="text-[14px] text-[#1E222B] font-semibold">2</p>
                            </td>
                            <td>
                            <p className="text-[14px] text-[#1E222B] flex items-center"><TbCurrencyRupee/>7.90</p>
                            </td>
                        </tr>
                        <tr className="w-full my-2">
                            <td>
                                <img src={package03}/>
                            </td>
                            <td>
                                <div>
                                    <p className="text-[14px] text-[#1E222B] font-semibold">package03</p>
                                    <p className="text-[14px] text-[#1E222B] flex items-center"><TbCurrencyRupee/>7.90</p>
                                </div>
                            </td>
                            <td>
                            <p className="text-[14px] text-[#1E222B] font-semibold">2</p>
                            </td>
                            <td>
                            <p className="text-[14px] text-[#1E222B] flex items-center"><TbCurrencyRupee/>7.90</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="p-6 bg-[#F8F9FB] rounded-lg mt-5">
                    <div className="flex justify-between items-center">
                        <p className="text-[#616A7D] text-[14px]">Subtotal</p>
                        <p className="text-[#1E222B] text-[14px] flex items-center"><TbCurrencyRupee/>805.96</p>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <p className="text-[#616A7D] text-[14px]">Delivery</p>
                        <p className="text-[#1E222B] text-[14px] flex items-center"><TbCurrencyRupee/>2</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#616A7D] text-[14px]">Total</p>
                        <p className="text-[#1E222B] text-[14px] flex items-center"><TbCurrencyRupee/>807.96</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default View_order;

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

import React, { useEffect, useState} from "react";
// import './App.css';
import Images from "./Images";
function View_order() {
    const [images, setImages] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
      response => response.json().then(data => {
        setImages(data);
      })
    )
  },[])
  return (
    <Images data={images} />
  );
}
export default View_order;

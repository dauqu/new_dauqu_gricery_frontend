import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useParams } from "react-router-dom";
import { API } from "./Constant";

export default function Images_product(props) {
  const { data } = props;
  const itemsPerPage = 5;
  const [currentitems, setcurrentitems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    //Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setcurrentitems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  // code to delete product from database

  const { _id } = useParams();

  const handleDelete = (_id) => {
    axios
      .delete(`${API}/api/product/delete/${_id}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="images">
        <table className="w-full">
          <thead className="w-full">
            <tr className="text-[#171B1E] w-full">
              <th className="p-3 text-[16px] font-senibold border-b text-left">
                ID
              </th>
              <th className="p-3 text-[16px] font-senibold border-b text-left">
                IMG
              </th>
              <th className="p-3 text-[16px] font-senibold border-b text-left">
                Title
              </th>
              <th className="p-3 text-[16px] font-senibold border-b text-left">
                Price
              </th>

              <th className="p-3 text-[16px] font-senibold border-b text-left">
                CREATE AT
              </th>
              <th className="p-3 text-[16px] font-senibold border-b text-left">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="">
            {currentitems.map((val) => {
              return (
                <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                  <td className="px-4 py-2 border">{val._id}</td>
                  <td className="px-[2px] py-[2px] border w-[90px]">
                    <img src={val.image} className="w-auto " alt="img" />
                  </td>
                  <td className="px-4 py-2 border text-[#008eff]">
                    {val.title}{" "}
                  </td>
                  <td className="px-4 py-2 border">{val.price}</td>
                  <td className="px-4 py-2 border">
                    {val.created_at.slice(0, 10)}
                  </td>
                  <td className="text-[#00A15D] px-4 py-2 border text-[14px]  ">
                    <Link to={`/editprodut/${val._id}`}>
                      <button className="border rounded-full h-[24px] px-3 border-[#d7d7d7] text-[#171B1E] text-[13px]">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="border rounded-full h-[24px] px-3 border-[#E31D1C] text-[#E31D1C] text-[13px] ml-2"
                      onClick={() => handleDelete(val._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <data currentitems={currentitems} />
      <ReactPaginate
        breaklabel="..."
        nextlabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}

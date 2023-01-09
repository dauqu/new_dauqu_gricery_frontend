import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Images_order(props) {
  // const { data } = props;

  // const itemsPerPage = 5;
  const [currentitems, setcurrentitems] = useState([]);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);

  // useEffect(() => {
  //   //Fetch items from another resources.
  //   const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   setcurrentitems(data.slice(itemOffset, endOffset)); 
  //   setPageCount(Math.ceil(data.length / itemsPerPage));
  // }, [itemOffset, itemsPerPage, data]); 
  // // Invoke when user click to request another page.
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % data.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };
  return (
    <>
      <div className="images">
        <table className="w-full">
            <thead className="w-full">
                <tr className="text-[#171B1E] w-full">
                    <th className="p-3  text-[16px] font-senibold border-b">ID</th>
                    <th className="p-3  text-[16px] font-senibold border-b">ADDRESS</th>
                    <th className="p-3  text-[16px] font-senibold border-b">CREATED AT</th>
                    <th className="p-3  text-[16px] font-senibold border-b">AMOUNT</th>
                    <th className="p-3  text-[16px] font-senibold border-b">Delivery Address</th>
                    <th className="p-3  text-[16px] font-senibold border-b">STATUS</th>
                    <th className="p-3  text-[16px] font-senibold border-b">ACTION</th>
                </tr>
            </thead>
            <tbody className="overflow-y-scroll h-[400px]">
                {currentitems.map((val) => {
                    return (
                      <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                        <td className="px-4 py-2 border text-[#008eff]">{val._id}</td>
                        <td className="px-4 py-2 border">{val.address_id}</td>
                        <td className="px-4 py-2 border">{val.createdAt}</td>
                        <td className="px-4 py-2 border">{val.url == false ? "false" : "true"}</td>
                        <td className="px-4 py-2 border">{val.thumbnailUrl}</td>
                        <td className="px-4 py-2 border">{val.status}</td>
                        <td className="px-4 py-2 border">{val.id}</td>
                    </tr>
                    );
                    })
                }

                {/* <tr>
                      <td className="text-[#717579] p-3 text-[14px]">
                        #345027
                      </td>
                      <td className="text-[#717579] p-3 text-[14px]">
                        subad304901
                      </td>
                      <td className="text-[#717579] p-3 text-[14px]">
                        22/05/22
                      </td>
                      <td className="text-[#717579] p-3 text-[14px]">
                        3100$/-
                      </td>
                      <td className="text-[#717579] p-3 text-[14px]">
                        Cristofer Siphron
                      </td>
                      <td className="text-[#00A15D] p-3 text-[14px]">
                        <AiOutlineEye className="text-[20px] text-[#00A15D] text-center m-auto" />
                      </td>
                      <td className="text-[#00A15D] p-3 text-[14px] flex items-center">
                        <button className="border rounded-full h-[24px] px-3 border-[#00a15d] text-[#00a15d] text-[13px]">
                          Accept
                        </button>
                        <button className="border rounded-full h-[24px] px-3 border-[#E31D1C] text-[#E31D1C] text-[13px] ml-2">
                          Decline
                        </button>
                      </td>
                    </tr>
                     */}
            </tbody>
        </table>
        
      </div>
      {/* <data currentitems={currentitems} /> */}
      {/* <ReactPaginate
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
      /> */}
    </>
  );
}

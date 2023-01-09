import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Images(props) {
  const { data } = props;

  const itemsPerPage = 5;
  const [currentitems, setcurrentitems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    //Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
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
  return (
    <>
      <div className="images">
        <table className="w-full">
            <thead className="w-full text-left">
                <tr className="text-[#171B1E] w-full">
                    <th className="p-3 text-[16px] font-semibold border-b">No.</th>
                    <th className="p-3 text-[16px] font-semibold border-b">EMAIL</th>
                    <th className="p-3 text-[16px] font-semibold border-b">NAME</th>
                    <th className="p-3 text-[16px] font-semibold border-b">USERNAME</th>
                    <th className="p-3 text-[16px] font-semibold border-b">DP</th>
                    <th className="p-3 text-[16px] font-semibold border-b">DATE</th>
                </tr>
            </thead>
            <tbody className="">
                {currentitems.map((val) => {
                    return (
                    <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                        <td className="px-4 py-2 border text-[#008eff]">{val._id}</td>
                        <td className="px-4 py-2 border">{val.email}</td>
                        <td className="px-4 py-2 border">{val.full_name}</td>
                        <td className="px-4 py-2 border">
                            {val.username}
                        </td>
                        <td className="px-4 py-2 border">
                          <img src={val.dp} alt="" className="w-10 h-10 rounded-full" />
                          </td>
                        <td className="px-4 py-2 border">{val.created_at}</td>
                    </tr>
                    );
                    })}
                    {/* <tr>
                      <td className="text-[#717579] p-3 text-[14px]">1</td>
                      <td className="text-[#717579] p-3 text-[14px]">subad304901@gmail.com</td>
                      <td className="text-[#717579] p-3 text-[14px]">subad304901</td>
                      <td className="text-[#717579] p-3 text-[14px]">7878******</td>
                      <td className="text-[#717579] p-3 text-[14px]">22/05/22</td>
                      <td className="text-[#00A15D] p-3 text-[14px]">main road, paharipur pul, garwar road,  </td>
                    </tr> */}
                   
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

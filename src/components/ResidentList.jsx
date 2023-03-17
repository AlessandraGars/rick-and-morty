import React from "react";
import ResidentInfo from "./ResidentInfo";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function ResidentList({ residentList }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(residentList?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(residentList?.length / itemsPerPage));
  }, [residentList, itemOffset, itemsPerPage]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % residentList?.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <div>
        {currentItems?.map((resident) => (
          <ResidentInfo key={resident} url={resident} />
        ))}
      </div>
      <ReactPaginate
        breakLabel={"..."}
        breakClassName={"break-me"}
        containerClassName={"pagination"}
        nextLabel={">"}
        previousLabel={"<"}
        pageCount={pageCount}
        renderOnZeroPageCount={false}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        activeClassName={"active"}
        pageLinkClassName={"page-link"}
      />
    </>
  );
}

export default ResidentList;

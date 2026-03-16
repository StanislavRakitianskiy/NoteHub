import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
    currentPage: number,
    totalPage: number,
    onPageChange: (page: number) => void
}

const Pagination = ({currentPage, totalPage, onPageChange}: PaginationProps ) => {
  return (
    <ReactPaginate
      pageCount={totalPage}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      forcePage={currentPage - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}
export default Pagination;

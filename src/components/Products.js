import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { BsFillStarFill } from "react-icons/bs";
const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  let records;
  let number;
  let firstIndex;
  let lastIndex;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (state.productSliceReducer.data) {
    let res = state.productSliceReducer.data;
    const recordsPerPage = 6;
    lastIndex = currentPage * recordsPerPage;
    firstIndex = lastIndex - recordsPerPage;
    records = res.slice(firstIndex, lastIndex);
    const npage = Math.ceil(res.length / recordsPerPage);
    number = [...Array(npage + 1).keys()].slice(1);
  }

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (n) => {
    setCurrentPage(n);
  };

  const nextPage = () => {
    if (currentPage < number.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    state.productSliceReducer.data && (
      <>
        <div className="list-group">
          {records.map((product, key) => {
            let rating = Array(Math.round(product.rating.rate)).fill(
              <BsFillStarFill className="card-rating" />
            );
            return (
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{product.title}</h3>
                  <span class="badge rounded-pill bg-light">
                    {product.category}
                  </span>
                  <img
                    className="d-block user-select-none"
                    src={product.image}
                    width="100%"
                    height="200"
                    aria-label="Placeholder: Image cap"
                    focusable="false"
                    role="img"
                    preserveAspectRatio="xMidYMid slice"
                    viewBox="0 0 318 180"
                    alt=""
                  />
                  <p className="card-text">{product.description}</p>
                  <div className="card-rating-price">
                    <span>
                      {rating.map((r) => {
                        return r;
                      })}
                    </span>
                    <h3>$ {product.price}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" onClick={prevPage}>
                &laquo;
              </a>
            </li>
            {number.map((n, i) => {
              return (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                  key={i}
                >
                  <a class="page-link" href="#" onClick={() => changePage(n)}>
                    {n}
                  </a>
                </li>
              );
            })}
            <li class="page-item">
              <a class="page-link" href="#" onClick={nextPage}>
                &raquo;
              </a>
            </li>
          </ul>
        </div>
      </>
    )
  );
};

export default Products;

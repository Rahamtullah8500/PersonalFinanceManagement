import React, { useEffect, useState } from "react";
import "./Transactions.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewTransactions } from "../redux/reducers";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";


const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const TransactionsData = useSelector((state) => state.transactions);
  const [Transactions, setTransactions] = useState(TransactionsData);
  const [newTransaction, setNewTransaction] = useState({
    id: Math.floor(Math.random() * 1000000),
    date: "",
    description: "",
    category: "",
    amount: null,
  });
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const dispatch = useDispatch();

  useEffect(() => {
    setTransactions(TransactionsData);
  }, [TransactionsData]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  let filteredItems = Transactions.filter((item) =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSortTransactions = (e) => {
    const order = e.target.innerHTML;
    const sortedTransactions = [...Transactions].sort((a, b) => {
      return order === "lowToHigh" ? a.amount - b.amount : b.amount - a.amount;
    });
    setTransactions(sortedTransactions);
    setSortOrder(order);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!newTransaction.description || !newTransaction.amount) {
      alert("Please enter all fields");
      return;
    }
    //dispatch to add new transaction to the store
    dispatch(addNewTransactions(newTransaction), () => {
      setNewTransaction({
        id: Math.floor(Math.random() * 1000000),
        date: "",
        description: "",
        category: "",
        amount: null,
      });
    });
    //reset form after submission
  };

  return (
    <div className="transacitons-container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <h3>Transactions</h3>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0"></ul>
            <button
              type="button"
              class="btn btn-primary me-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add
            </button>
            <ul class="navbar-nav mb-2 mb-lg-0 me-2">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="##"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By
                </a>
                <ul class="dropdown-menu">
                  <li
                    className="dropdown-item"
                    active
                    onClick={handleSortTransactions}
                  >
                    lowToHigh
                  </li>
                  <li
                    className="dropdown-item"
                    onClick={handleSortTransactions}
                  >
                    highToLow
                  </li>
                </ul>
              </li>
            </ul>
              <input
                class="form-control w-25"
                type="search"
                placeholder="search by category"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
          </div>
        </div>
      </nav>
       {/* form for adding Transactions */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add Transaction
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="date"
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInput" class="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput"
                    aria-describedby="emailHelp"
                    name="description"
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputCategory" class="form-label">
                    Category
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputCategory"
                    aria-describedby="emailHelp"
                    name="category"
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputAmount" class="form-label">
                    Amount
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputAmount"
                    aria-describedby="emailHelp"
                    name="amount"
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleAddTransaction}
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
       {/* ------------------- */}
      <div className=" table-responsive">
        <table class="table table-hover table-container">
          <thead className="table-header">
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((eachItem, i) => {
              return (
                <tr id={i}>
                  <td>{i + 1}</td>
                  <td>{eachItem.date}</td>
                  <td>{eachItem.description}</td>
                  <td>{eachItem.category}</td>
                  <td>{eachItem.category === 'Received' ? <BsArrowDown color="green" /> : <BsArrowUp color="red" />}{eachItem.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;

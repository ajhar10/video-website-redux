import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { searched } from "../../features/filter/filterSlice";
const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    //redirect to home page
    if (!match) {
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        value={input}
        placeholder="Search"
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default Search;

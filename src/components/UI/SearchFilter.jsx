import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCoutries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry)
  };

  return (
    <>
      <div className="container">
        <div className="input_filter">
        <div className="row">
          <div className="col-md-3">
            <div className="search_box">
            <input
              type="text"
              placeholder="search"
              value={search}
              onChange={handleInputChange}
              />
              </div>
          </div>
          <div className="col-md-3 col-4 d-flex justify-content-md-center justify-content-start">
            <button className="sortBtn" onClick={() => sortCoutries("asc")}>Asc</button>
          </div>
          <div className="col-md-3 col-4 d-flex justify-content-md-center justify-content-start">
            <button className="sortBtn" onClick={() => sortCoutries("des")}>Desc</button>
          </div>
          <div className="col-md-3 col-4">
            <select
              className="select_box"
              value={filter}
              onChange={handleSelectChange}
            >
              <option value="all">All</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;

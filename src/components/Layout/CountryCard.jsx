import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <>
      <div className="col-lg-3">
        <div className="countryCard_container">
          <div className="countryCard">
            <img src={flags.svg} />
            <div className="countryInfo d-flex flex-column justify-content-start align-items-start gap-3">
              <span className="country_name">
                {" "}
                {name.common.length > 10
                  ? name.common.slice(0, 10) + "..."
                  : name.common}
              </span>
              <p>
                Capital : <span>{capital[0]}</span>
              </p>
              <p>
                Region : <span>{region}</span>
              </p>
              <p>
                Population : <span>{population.toLocaleString()}</span>
              </p>
              <NavLink to={`/country/${name.common}`}>
                <button className="button">
                  Read More &nbsp; &nbsp;
                  <FaLongArrowAltRight />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryCard;

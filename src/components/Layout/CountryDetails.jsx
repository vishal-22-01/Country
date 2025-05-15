import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/countryApi";
import Loader from "../UI/Loader";

const CountryDetails = () => {
  const params = useParams();
  // console.log(params);

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();
  // console.log(country);
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
      // console.log(res);
    });
  }, []);
  if (isPending)
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Loader />
      </div>
    );
  return (
    <>
      <section className="country_card_detail_secttion">
        {country && (
          <div className="country_detail_card">
            <div className="flag_img">
              <img src={country.flags.svg} alt="flagImg" />
            </div>
            <div className="country_detail_card_info">
              <span>{country.name.common}</span>
              <p>
                <span>Native Names : </span>
                {Object.keys(country.name.nativeName)
                  .map((key) => country.name.nativeName[key].common)
                  .join(", ")}
              </p>
              <p>
                <span>Population : </span>
                {country.population.toLocaleString()}
              </p>
              <p>
                <span>Region : </span>
                {country.region}
              </p>
              <p>
                <span>Sub Region : </span>
                {country.subregion}
              </p>
              <p>
                <span>Capital : </span>
                {country.capital}
              </p>
              <p>
                <span>Top Level Domain : </span>
                {country.tld[0]}
              </p>
              <p>
                <span>Currencies : </span>
                {Object.keys(country.currencies)
                  .map((ele) => country.currencies[ele].name)
                  .join(", ")}
              </p>
              <p>
                <span>Languages : </span>
                {Object.keys(country.languages)
                  .map((curEle) => country.languages[curEle])
                  .join(", ")}
              </p>
            </div>
            <div className="country_detail_card_btn">
              <NavLink to="/country">
                <button className="button">Go Back</button>
              </NavLink>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default CountryDetails;

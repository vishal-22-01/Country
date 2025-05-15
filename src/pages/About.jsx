import React from "react";
import CountryData from "../api/countryData.json";

const About = () => {
  return (
    <>
      <section className="about_section">
        <div className="container">
          <div className="row">
            <div className="Heading text-center">
              <h1>Here are the Interesting Facts We're Pround of</h1>
            </div>
            {CountryData.map((items) => {
              const {
                id,
                countryName,
                countryCapital,
                population,
                interestingFacts,
              } = items;
              return (
                <div className="col-lg-4">
                  <div key={id} className="country_card">
                    <div className="country_card_content">
                      <span className="country_name">{countryName}</span>
                      <p>
                        Capital : <span>{countryCapital}</span>
                      </p>
                      <p>
                        Population : <span>{population}</span>
                      </p>
                      <p>
                        Interesting Fact : <span>{interestingFacts}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

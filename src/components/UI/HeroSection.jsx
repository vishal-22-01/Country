import React from 'react'
import ExploreWorld from "../../assets/images/worldExplore.png"
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
  <>
  <section className="hero_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="Hero_left">
                <h1>Explore the World, One Country at a Time.</h1>
                <p>Discover the history,culture, and beauty of every nation. Sort,Search and filter through coutries to find the details you need</p>
                <button className="button">Start Exploring &nbsp; &nbsp;<FaLongArrowAltRight /></button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero_right">
                <img src={ExploreWorld} alt="ExploreWorld"/>
              </div>
            </div>
          </div>
        </div>
        </section></>
  )
}

export default HeroSection
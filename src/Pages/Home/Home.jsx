import React from "react";
import Banner from "./Banner";
import Values from "../../components/values";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <Values></Values>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;

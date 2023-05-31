import React from "react";
import Header from "./components/Header";

import './App.css';
import HowSection from "./components/HowSection";
import JobCatagories from "./components/JobCategories";
import Question from "./components/Question";
import FeatureSection from "./components/FeatureSection";
import JobOffered from "./components/JobOffered";
import Footer from "./components/Footer";


function App() {

  // const [data, setData] = React.useState(null);
  
  // React.useEffect(()=>{
  //   fetch("http://localhost/3001/api")
  //   .then((res) => res.json())
  //   .then((data) => setData(data.message));

  //   console.log(data);
  // }, []);

  return (
    <div className="App">
      <Header/>
      <HowSection/>
      <JobCatagories/>
      <FeatureSection/>
      <JobOffered/>



      <Question/>
      <Footer/>
    </div>
  );
}

export default App;

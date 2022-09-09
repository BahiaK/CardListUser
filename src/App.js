import React, { useState } from "react";
import "./App.css"
import CardList from "./Components/CardList";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import UserDashboard from "./Components/UserDashboard";
import {reviews} from './data'
const App = () => {
  const [index,setIndex] = useState(0)
  return (
    <div className="App">
      <ResponsiveAppBar />
      <div className="userup" >
        <UserDashboard lengthReviews={reviews.length} setIndex={setIndex} review={reviews[index]}/>
        <CardList reviews={reviews} setIndex={setIndex} />
      </div>
    </div>
  );
};

export default App;

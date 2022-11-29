import React from "react";
import Navbar from "./components/Navbar";
import Data from './components/Data'
import Travel from "./components/Travel";

export default function App() {

  const travelData = Data.map((item, index) => {
    const travelLength = Data.length
    console.log(travelLength)
    return <Travel 
              key={item.id} 
              item={item}
              index={index}
              length={travelLength}
               />;

               
    
});
  return (
    <div className="big-container">
      <Navbar />
      {travelData}
    </div>
  );
}



import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SaleCard from "./SaleCard";
import Sales from "./json files/sales.json";
import Activities from "./json files/activities.json";
import Activity from "./Activity";
import "./App.css";

function App() {
  console.log(Sales);
  const [switcher, setSwitcher] = useState(true);
  const hundlePage = (n,e) => {
    if (n == 1) {
      setSwitcher(true);
    }
    else{
      setSwitcher(false);
    } 
    

  };
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="underHeader">
          <Sidebar />
          <p onClick={(e) => hundlePage(1,e)} className={switcher ? "selected" : ""}>Dashboard</p>
          <p onClick={(e) => hundlePage(2,e)} className={!switcher ? "selected" : ""}>Recommondations</p>
        </div>
        {switcher ? (
          <div className="dashboard">
            <div className="sales">
              <h2>Sales Plays</h2>
              <div className="salesPlays">
                {Sales.map((sale) => (
                  <SaleCard key={sale.id} sale={sale} />
                ))}
              </div>
            </div>

            <div className="activitys">
              <h2>Activity</h2>
                  {
                    Activities.map((activity) => (
                      <Activity key={activity.id} activity={activity} />
                    ))
                  }
            </div>
          </div>
        ) : (
          <div className="recommondations">Rocomendation</div>
        )}
      </main>
    </div>
  );
}

export default App;

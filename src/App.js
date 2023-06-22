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
  const hundlePage = (n) => {
    if (n == 1) setSwitcher(true);
    else setSwitcher(false);
  };
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="underHeader">
          <Sidebar />
          <p onClick={() =>hundlePage(1)}>dashboard</p>
          <p onClick={() => hundlePage(2)}>recommondations</p>
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
          <div className="recommondations">page2</div>
        )}
      </main>
    </div>
  );
}

export default App;

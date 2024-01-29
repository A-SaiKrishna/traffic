import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  async function recursiveFunction(trafficcolor, traffictime) {
    if (trafficcolor === "red") {
      setTraffic({ red: "red", green: "gray", yellow: "gray" });
      await setTimeout(() => {
        return recursiveFunction("green", 3000);
      }, traffictime);
    }
    if (trafficcolor === "green") {
      setTraffic({ red: "gray", green: "green", yellow: "gray" });
      await setTimeout(() => {
        return recursiveFunction("yellow", 2000);
      }, traffictime);
    }
    if (trafficcolor === "yellow") {
      setTraffic({ red: "gray", green: "gray", yellow: "yellow" });
      await setTimeout(() => {
        return recursiveFunction("red", 5000);
      }, traffictime);
    }
  }
  let [traffic, setTraffic] = useState({
    red: "gray",
    green: "gray",
    yellow: "gray",
  });
  useEffect(() => {
    recursiveFunction("red", 5000);
  }, []);
  return (
    <>
      <div className="outerdiv">
        <div className="circle" style={{ backgroundColor: traffic.red }}></div>
        <div
          className="circle"
          style={{ backgroundColor: traffic.yellow }}
        ></div>
        <div
          className="circle"
          style={{ backgroundColor: traffic.green }}
        ></div>
      </div>
      <h1>seconds</h1>
    </>
  );
}

export default App;

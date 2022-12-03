import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Status from "./Status.js"
import StatusTwo from "./StatusTwo.js"
const sanctuary = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        style={{ textAlign: "center" }}
        position= "static"
      >
        <Tab
          label="Search Wildlife By Status"
          style={{ width: "1000px", fontSize: "25px" }}
        />
        <Tab
          label="View All Wildlife"
          style={{ width: "1000px", fontSize: "25px" }}
        />
      </Tabs>
        {selectedTab === 0 && <Status/>}
        {/* {selectedTab == 1 && <StatusTwo/>} */}
    </>
  );
};
export default sanctuary;

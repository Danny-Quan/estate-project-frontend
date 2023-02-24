import React from "react";
import Navbar from "./../navigation/Navbar";
import DashboardSideBar from "./DashboardSideBar";

function AdminInfo() {
  return (
    <div>
      <div className="navbar--styled">
        <Navbar />
      </div>
      <div className="admin--info--and--sidebar">
        <DashboardSideBar />
        <div className="admin--info--section">
            <h2>Active agents</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            veniam molestias, tenetur enim, consequuntur neque beatae
            consequatur incidunt a id qui voluptatibus nostrum dolorum
            exercitationem repellat velit suscipit rerum illo.
          </p>
          <h2>Aprove Agent</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            veniam molestias, tenetur enim, consequuntur neque beatae
            consequatur incidunt a id qui voluptatibus nostrum dolorum
            exercitationem repellat velit suscipit rerum illo.
          </p>
          <h2>Agent settings</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            veniam molestias, tenetur enim, consequuntur neque beatae
            consequatur incidunt a id qui voluptatibus nostrum dolorum
            exercitationem repellat velit suscipit rerum illo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminInfo;

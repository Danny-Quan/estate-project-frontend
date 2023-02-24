import React from "react";
import DashboardSideBar from "./DashboardSideBar";
import Navbar from "../navigation/Navbar";

function Dashboard() {
  return (
    <div>
<Navbar/>
      <div className="dashboard--and--sidebar">
        <DashboardSideBar/>
        <div className="dashboard--area">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            corporis iste, non odit exercitationem accusamus tenetur numquam
            optio velit deserunt. Doloribus repudiandae consequuntur iste rem
            fugit! Rem quam cumque illum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            corporis iste, non odit exercitationem accusamus tenetur numquam
            optio velit deserunt. Doloribus repudiandae consequuntur iste rem
            fugit! Rem quam cumque illum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            corporis iste, non odit exercitationem accusamus tenetur numquam
            optio velit deserunt. Doloribus repudiandae consequuntur iste rem
            fugit! Rem quam cumque illum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

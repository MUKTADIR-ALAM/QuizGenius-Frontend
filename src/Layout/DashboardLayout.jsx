import React from "react";
import { MdMenu } from "react-icons/md";
import DashboardHeader from "../components/DashboardHeader";

const DashboardLayout = () => {
  return (
    <section>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-11/12 mx-auto">
          <DashboardHeader />
          {/* Content here */}
          <main>
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="text-lg">Welcome to your dashboard</p>
            <button className="btn btn-primary mt-4">Get Started</button>
          </main>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;

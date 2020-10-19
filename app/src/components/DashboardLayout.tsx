import React from "react";
import { Link, Switch, Route, useLocation } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import DashboardCatches from "./DashboardCatches";
import DashboardMaps from "./DashboardMaps";
import DashboardTacklebox from "./DashboardTacklebox";

type SectionType = {
  uri: string;
  component: React.FC;
};
const appSections: SectionType[] = [
  {
    uri: "home",
    component: DashboardHome,
  },
  {
    uri: "catches",
    component: DashboardCatches,
  },
  {
    uri: "maps",
    component: DashboardMaps,
  },
  {
    uri: "tacklebox",
    component: DashboardTacklebox,
  },
];

const DashboardLayout = () => {
  console.log(useLocation());
  return (
    <div className="flex-grow flex flex-col justify-center items-center bg-blue-300">
      <div className="w-full px-6 flex-grow">
        <div className="container">
          <Switch>
            {appSections.map((section) => (
              <Route
                key={section.uri}
                path={`/dashboard/${section.uri}`}
                component={section.component}
              />
            ))}
          </Switch>
        </div>
      </div>
      <div className="w-full flex-none flex h-10 bg-red-400">
        {appSections.map((section) => (
          <div className="flex-1 flex justify-center items-center">
            <Link to={`/dashboard/${section.uri}`}>{section.uri}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardLayout;

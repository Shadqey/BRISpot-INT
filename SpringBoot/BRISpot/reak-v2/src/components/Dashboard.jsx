import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="w-full bg-BackgroundColor">
        <NavigationComponents currentPage={currentPageName} />
        <div className="m-4 h-auto">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import PageVisitor from "../Tables/PageVisitor/PageVisitor";
import SocialTraffic from "../Tables/SocialTraffic/SocialTraffic";

const TableContainer = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-6 bg-gray-200 pb-10 px-5 lg:px-10 gap-7">
      <div className="lg:col-span-3 xl:col-span-4">
        <PageVisitor></PageVisitor>
      </div>
      <div className="lg:col-span-3 xl:col-span-2">
        <SocialTraffic></SocialTraffic>
      </div>
    </div>
  );
};

export default TableContainer;
